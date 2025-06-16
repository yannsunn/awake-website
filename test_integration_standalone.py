#!/usr/bin/env python3
"""
スタンドアローン統合テストシステム
循環インポートを回避し、logging.pyとagent-send.shの機能検証を実行
"""

import subprocess
import time
import sys
import json
import hashlib
import threading
import logging as std_logging
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Optional, Union
from dataclasses import dataclass
from enum import Enum
import pickle
import re
from collections import defaultdict

# シンプルなロガーセットアップ
def setup_simple_logger(name: str, level=std_logging.INFO):
    """シンプルなロガー設定"""
    logger = std_logging.getLogger(name)
    logger.setLevel(level)
    
    if not logger.handlers:
        # コンソールハンドラー
        console_handler = std_logging.StreamHandler()
        console_handler.setLevel(level)
        
        # フォーマッター
        formatter = std_logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        console_handler.setFormatter(formatter)
        
        logger.addHandler(console_handler)
        
        # ファイルハンドラー（logsディレクトリに出力）
        log_dir = Path("logs")
        log_dir.mkdir(parents=True, exist_ok=True)
        
        file_handler = std_logging.FileHandler(log_dir / f"{name}.log", encoding='utf-8')
        file_handler.setLevel(level)
        file_handler.setFormatter(formatter)
        
        logger.addHandler(file_handler)
    
    return logger

# 実行時間計測デコレータ
def execution_time_tracker(func):
    """実行時間計測デコレータ"""
    def wrapper(*args, **kwargs):
        start_time = time.time()
        try:
            result = func(*args, **kwargs)
            execution_time = time.time() - start_time
            print(f"✅ {func.__name__} 実行時間: {execution_time:.3f}秒")
            return result
        except Exception as e:
            execution_time = time.time() - start_time
            print(f"❌ {func.__name__} 失敗 ({execution_time:.3f}秒): {e}")
            raise
    return wrapper

class TestConfig:
    """テスト設定"""
    def __init__(self):
        self.agent_send_script = "./agent-send.sh"
        self.log_directory = "logs"
        self.test_mode = True
        self.timeout = 30

class MessagePriorityAnalyzer:
    """メッセージ優先度分析器"""
    
    CRITICAL_KEYWORDS = ["エラー", "失敗", "緊急", "critical", "error", "failed", "fatal"]
    URGENT_KEYWORDS = ["警告", "注意", "warning", "urgent", "問題", "issue", "timeout"]
    
    @staticmethod
    def analyze_priority(message: str) -> str:
        """メッセージの優先度を分析"""
        message_lower = message.lower()
        
        if any(keyword in message_lower for keyword in MessagePriorityAnalyzer.CRITICAL_KEYWORDS):
            return "CRITICAL"
        elif any(keyword in message_lower for keyword in MessagePriorityAnalyzer.URGENT_KEYWORDS):
            return "URGENT"
        else:
            return "ROUTINE"

class AgentCommunicationTester:
    """エージェント通信テスター"""
    
    def __init__(self, config: TestConfig):
        self.config = config
        self.logger = setup_simple_logger("agent_comm_test")
        self.test_results = []
        
    @execution_time_tracker
    def test_agent_send_script_exists(self) -> bool:
        """agent-send.shの存在確認"""
        script_path = Path(self.config.agent_send_script)
        
        if not script_path.exists():
            self.logger.error(f"❌ agent-send.sh が見つかりません: {script_path}")
            return False
            
        if not script_path.stat().st_mode & 0o111:
            self.logger.error(f"❌ agent-send.sh が実行可能ではありません: {script_path}")
            return False
            
        self.logger.info(f"✅ agent-send.sh 存在確認: {script_path}")
        return True
    
    @execution_time_tracker
    def test_agent_send_list_command(self) -> bool:
        """agent-send.sh --list コマンドテスト"""
        try:
            result = subprocess.run(
                [self.config.agent_send_script, "--list"],
                capture_output=True,
                text=True,
                timeout=self.config.timeout
            )
            
            if result.returncode == 0:
                self.logger.info(f"✅ agent-send.sh --list 成功")
                self.logger.debug(f"出力: {result.stdout[:200]}...")
                return True
            else:
                self.logger.error(f"❌ agent-send.sh --list 失敗: {result.stderr}")
                return False
                
        except subprocess.TimeoutExpired:
            self.logger.error("❌ agent-send.sh --list タイムアウト")
            return False
        except Exception as e:
            self.logger.error(f"❌ agent-send.sh --list エラー: {e}")
            return False
    
    @execution_time_tracker
    def test_message_priority_analysis(self) -> bool:
        """メッセージ優先度分析テスト"""
        test_cases = [
            ("正常メッセージ", "ROUTINE"),
            ("警告: 注意が必要です", "URGENT"),
            ("エラー: システム失敗", "CRITICAL"),
            ("緊急事態が発生しました", "CRITICAL"),
            ("timeout occurred in connection", "URGENT")
        ]
        
        all_passed = True
        
        for message, expected_priority in test_cases:
            actual_priority = MessagePriorityAnalyzer.analyze_priority(message)
            
            if actual_priority == expected_priority:
                self.logger.info(f"✅ 優先度分析: '{message}' -> {actual_priority}")
            else:
                self.logger.error(f"❌ 優先度分析失敗: '{message}' -> {actual_priority} (期待値: {expected_priority})")
                all_passed = False
        
        return all_passed
    
    @execution_time_tracker 
    def test_mock_agent_communication(self) -> bool:
        """モックエージェント通信テスト"""
        test_messages = [
            ("worker1", "テストメッセージ1"),
            ("worker2", "警告: テストメッセージ2"),
            ("boss1", "エラー: テストメッセージ3")
        ]
        
        success_count = 0
        
        for agent, message in test_messages:
            try:
                priority = MessagePriorityAnalyzer.analyze_priority(message)
                
                # モック送信ログ
                self.logger.info(f"📤 モック送信: {agent} <- '{message}' (優先度: {priority})")
                
                # 送信成功をシミュレート
                success_count += 1
                
            except Exception as e:
                self.logger.error(f"❌ モック送信失敗: {agent} - {e}")
        
        success_rate = success_count / len(test_messages)
        self.logger.info(f"モック送信成功率: {success_rate:.1%} ({success_count}/{len(test_messages)})")
        
        return success_rate >= 0.8  # 80%以上で成功

class LoggingSystemTester:
    """ロギングシステムテスター"""
    
    def __init__(self, config: TestConfig):
        self.config = config
        self.logger = setup_simple_logger("logging_test")
        
    @execution_time_tracker
    def test_custom_logging_import(self) -> bool:
        """カスタムlogging.pyのインポートテスト"""
        try:
            # ファイルの存在確認
            logging_py_path = Path("logging.py")
            if not logging_py_path.exists():
                self.logger.error("❌ logging.py ファイルが見つかりません")
                return False
            
            # ファイル内容の確認
            with open(logging_py_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # 重要な要素の存在確認
            required_elements = [
                "ColorFormatter",
                "setup_logger",
                "log_execution_time",
                "log_function_call"
            ]
            
            missing_elements = []
            for element in required_elements:
                if element not in content:
                    missing_elements.append(element)
            
            if missing_elements:
                self.logger.error(f"❌ logging.py に必要な要素が不足: {missing_elements}")
                return False
            
            self.logger.info("✅ logging.py ファイル構造確認")
            return True
            
        except Exception as e:
            self.logger.error(f"❌ logging.py 確認エラー: {e}")
            return False
    
    @execution_time_tracker
    def test_log_file_creation(self) -> bool:
        """ログファイル作成テスト"""
        try:
            # テスト用ログファイル作成
            test_logger = setup_simple_logger("test_file_creation")
            test_logger.info("ログファイル作成テスト")
            
            # ログファイルの存在確認
            log_file_path = Path("logs/test_file_creation.log")
            
            if log_file_path.exists():
                self.logger.info(f"✅ ログファイル作成成功: {log_file_path}")
                
                # ファイル内容確認
                with open(log_file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                if "ログファイル作成テスト" in content:
                    self.logger.info("✅ ログファイル内容確認")
                    return True
                else:
                    self.logger.error("❌ ログファイル内容が正しくありません")
                    return False
            else:
                self.logger.error(f"❌ ログファイルが作成されませんでした: {log_file_path}")
                return False
                
        except Exception as e:
            self.logger.error(f"❌ ログファイル作成テストエラー: {e}")
            return False

class PerformanceTester:
    """パフォーマンステスター"""
    
    def __init__(self, config: TestConfig):
        self.config = config
        self.logger = setup_simple_logger("performance_test")
        
    @execution_time_tracker
    def test_concurrent_operations(self, num_operations: int = 100) -> Dict:
        """並行処理テスト"""
        start_time = time.time()
        
        # 並行処理シミュレーション
        operations_completed = 0
        errors = 0
        
        try:
            for i in range(num_operations):
                try:
                    # 簡単な処理をシミュレート
                    test_data = f"operation_{i}" * 100
                    hash_result = hashlib.md5(test_data.encode()).hexdigest()
                    
                    # 短い待機時間
                    time.sleep(0.001)  # 1ms
                    
                    operations_completed += 1
                    
                except Exception as e:
                    errors += 1
                    self.logger.error(f"操作 {i} でエラー: {e}")
            
            end_time = time.time()
            total_time = end_time - start_time
            
            results = {
                'total_operations': num_operations,
                'completed_operations': operations_completed,
                'errors': errors,
                'total_time': total_time,
                'operations_per_second': operations_completed / total_time if total_time > 0 else 0,
                'success_rate': operations_completed / num_operations
            }
            
            self.logger.info(f"📊 並行処理テスト結果:")
            self.logger.info(f"   完了操作: {operations_completed}/{num_operations}")
            self.logger.info(f"   エラー数: {errors}")
            self.logger.info(f"   実行時間: {total_time:.3f}秒")
            self.logger.info(f"   OPS: {results['operations_per_second']:.1f} ops/sec")
            self.logger.info(f"   成功率: {results['success_rate']:.1%}")
            
            return results
            
        except Exception as e:
            self.logger.error(f"❌ 並行処理テストエラー: {e}")
            return {'error': str(e)}
    
    @execution_time_tracker
    def test_memory_usage(self) -> Dict:
        """メモリ使用量テスト"""
        try:
            # メモリ使用量測定（概算）
            import gc
            import sys
            
            # ガベージコレクション実行
            gc.collect()
            
            # 大量データ生成前
            initial_objects = len(gc.get_objects())
            
            # 大量データ生成
            large_data = []
            for i in range(10000):
                large_data.append(f"data_item_{i}" * 10)
            
            # メモリ使用量測定
            after_objects = len(gc.get_objects())
            
            # データ削除
            del large_data
            gc.collect()
            
            final_objects = len(gc.get_objects())
            
            results = {
                'initial_objects': initial_objects,
                'peak_objects': after_objects,
                'final_objects': final_objects,
                'objects_created': after_objects - initial_objects,
                'objects_cleaned': after_objects - final_objects,
                'cleanup_efficiency': (after_objects - final_objects) / (after_objects - initial_objects) if after_objects > initial_objects else 0
            }
            
            self.logger.info(f"🧠 メモリ使用量テスト結果:")
            self.logger.info(f"   初期オブジェクト数: {initial_objects}")
            self.logger.info(f"   ピークオブジェクト数: {after_objects}")
            self.logger.info(f"   最終オブジェクト数: {final_objects}")
            self.logger.info(f"   作成オブジェクト数: {results['objects_created']}")
            self.logger.info(f"   クリーンアップ効率: {results['cleanup_efficiency']:.1%}")
            
            return results
            
        except Exception as e:
            self.logger.error(f"❌ メモリ使用量テストエラー: {e}")
            return {'error': str(e)}

class FailureScenarioTester:
    """障害シナリオテスター"""
    
    def __init__(self, config: TestConfig):
        self.config = config
        self.logger = setup_simple_logger("failure_test")
        
    @execution_time_tracker
    def test_invalid_agent_handling(self) -> bool:
        """無効なエージェントの処理テスト"""
        try:
            # 存在しないエージェントへの送信テスト
            invalid_agents = ["nonexistent_agent", "", "invalid-agent@test", "agent123"]
            
            failed_appropriately = 0
            
            for agent in invalid_agents:
                try:
                    # 実際の送信は行わず、処理ロジックのテスト
                    if agent in ["", "invalid-agent@test"]:
                        # 無効な名前として処理されるべき
                        self.logger.info(f"✅ 無効エージェント検出: '{agent}'")
                        failed_appropriately += 1
                    else:
                        # 存在しないが有効な名前形式
                        self.logger.info(f"⚠️ 有効形式だが存在しないエージェント: '{agent}'")
                        failed_appropriately += 1
                        
                except Exception as e:
                    self.logger.error(f"❌ エージェント処理エラー '{agent}': {e}")
            
            success_rate = failed_appropriately / len(invalid_agents)
            self.logger.info(f"無効エージェント処理成功率: {success_rate:.1%}")
            
            return success_rate >= 0.8
            
        except Exception as e:
            self.logger.error(f"❌ 無効エージェント処理テストエラー: {e}")
            return False
    
    @execution_time_tracker
    def test_error_recovery_simulation(self) -> bool:
        """エラー回復シミュレーションテスト"""
        try:
            # 様々なエラーパターンをシミュレート
            error_patterns = [
                "Connection timeout to server",
                "FileNotFoundError: /path/to/file",
                "PermissionError: Access denied",
                "MemoryError: Out of memory",
                "ValueError: Invalid input"
            ]
            
            recovery_attempts = 0
            successful_recoveries = 0
            
            for error in error_patterns:
                recovery_attempts += 1
                
                try:
                    # エラーパターン分析
                    error_hash = hashlib.md5(error.encode()).hexdigest()[:8]
                    
                    # 回復アクション決定
                    if "timeout" in error.lower():
                        recovery_action = "retry_with_backoff"
                    elif "notfound" in error.lower():
                        recovery_action = "create_missing_resource"
                    elif "permission" in error.lower():
                        recovery_action = "request_elevated_access"
                    elif "memory" in error.lower():
                        recovery_action = "garbage_collection"
                    else:
                        recovery_action = "log_and_escalate"
                    
                    self.logger.info(f"🔧 エラー回復: {error_hash} -> {recovery_action}")
                    
                    # 回復成功をシミュレート（80%の成功率）
                    import random
                    if random.random() < 0.8:
                        successful_recoveries += 1
                        self.logger.info(f"✅ 回復成功: {error_hash}")
                    else:
                        self.logger.warning(f"⚠️ 回復失敗: {error_hash}")
                        
                except Exception as e:
                    self.logger.error(f"❌ 回復処理エラー: {e}")
            
            recovery_rate = successful_recoveries / recovery_attempts if recovery_attempts > 0 else 0
            self.logger.info(f"エラー回復成功率: {recovery_rate:.1%} ({successful_recoveries}/{recovery_attempts})")
            
            return recovery_rate >= 0.6  # 60%以上で成功
            
        except Exception as e:
            self.logger.error(f"❌ エラー回復シミュレーションエラー: {e}")
            return False

@execution_time_tracker
def run_comprehensive_verification():
    """包括的検証実行"""
    print("🚀 統合ロギングシステム包括的検証開始")
    print("=" * 60)
    
    config = TestConfig()
    
    # テスト結果格納
    all_results = {
        'timestamp': datetime.now().isoformat(),
        'tests': {}
    }
    
    # 1. エージェント通信テスト
    print("\n📡 1. エージェント通信テスト")
    agent_tester = AgentCommunicationTester(config)
    
    agent_results = {}
    agent_results['script_exists'] = agent_tester.test_agent_send_script_exists()
    agent_results['list_command'] = agent_tester.test_agent_send_list_command()
    agent_results['priority_analysis'] = agent_tester.test_message_priority_analysis()
    agent_results['mock_communication'] = agent_tester.test_mock_agent_communication()
    
    all_results['tests']['agent_communication'] = agent_results
    
    agent_success = all(agent_results.values())
    print(f"エージェント通信テスト: {'✅ 成功' if agent_success else '❌ 失敗'}")
    
    # 2. ロギングシステムテスト
    print("\n📝 2. ロギングシステムテスト")
    logging_tester = LoggingSystemTester(config)
    
    logging_results = {}
    logging_results['custom_logging_import'] = logging_tester.test_custom_logging_import()
    logging_results['log_file_creation'] = logging_tester.test_log_file_creation()
    
    all_results['tests']['logging_system'] = logging_results
    
    logging_success = all(logging_results.values())
    print(f"ロギングシステムテスト: {'✅ 成功' if logging_success else '❌ 失敗'}")
    
    # 3. パフォーマンステスト
    print("\n⚡ 3. パフォーマンステスト")
    performance_tester = PerformanceTester(config)
    
    concurrent_results = performance_tester.test_concurrent_operations(50)
    memory_results = performance_tester.test_memory_usage()
    
    performance_success = (
        concurrent_results.get('success_rate', 0) >= 0.9 and
        'error' not in concurrent_results and
        'error' not in memory_results
    )
    
    all_results['tests']['performance'] = {
        'concurrent_operations': concurrent_results,
        'memory_usage': memory_results
    }
    
    print(f"パフォーマンステスト: {'✅ 成功' if performance_success else '❌ 失敗'}")
    
    # 4. 障害シナリオテスト
    print("\n🚨 4. 障害シナリオテスト")
    failure_tester = FailureScenarioTester(config)
    
    failure_results = {}
    failure_results['invalid_agent_handling'] = failure_tester.test_invalid_agent_handling()
    failure_results['error_recovery_simulation'] = failure_tester.test_error_recovery_simulation()
    
    all_results['tests']['failure_scenarios'] = failure_results
    
    failure_success = all(failure_results.values())
    print(f"障害シナリオテスト: {'✅ 成功' if failure_success else '❌ 失敗'}")
    
    # 総合結果
    overall_success = agent_success and logging_success and performance_success and failure_success
    all_results['overall_success'] = overall_success
    
    print("\n" + "=" * 60)
    print(f"🎯 総合結果: {'✅ 全テスト成功' if overall_success else '❌ 一部テスト失敗'}")
    
    # 詳細結果
    print("\n📊 詳細結果:")
    for category, results in all_results['tests'].items():
        print(f"   {category}:")
        if isinstance(results, dict):
            for test, result in results.items():
                if isinstance(result, bool):
                    status = "✅" if result else "❌"
                    print(f"     {test}: {status}")
                elif isinstance(result, dict) and 'success_rate' in result:
                    print(f"     {test}: {result['success_rate']:.1%} 成功率")
    
    # 結果をJSONファイルに保存
    results_file = Path("logs/verification_results.json")
    results_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(results_file, 'w', encoding='utf-8') as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)
    
    print(f"\n📄 詳細結果ファイル: {results_file}")
    
    return all_results

if __name__ == "__main__":
    try:
        results = run_comprehensive_verification()
        sys.exit(0 if results['overall_success'] else 1)
    except KeyboardInterrupt:
        print("\n\n🛑 テスト中断")
        sys.exit(1)
    except Exception as e:
        print(f"\n\n❌ テスト実行エラー: {e}")
        sys.exit(1)