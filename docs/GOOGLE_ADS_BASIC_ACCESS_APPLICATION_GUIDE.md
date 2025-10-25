# Google Ads API - ベーシックアクセス申請ガイド

## 📋 申請フォームの回答例

このガイドに従って、ベーシックアクセス申請フォームに記入してください。

---

## フォーム項目と回答

### 1. My API contact email in the Google Ads API Center is accurate and up-to-date.
**回答**: ✅ チェックを入れる

**事前確認**:
1. MCCアカウント（321-411-2286）にログイン
2. ツールと設定 → APIセンター
3. 「開発者の詳細」セクションで連絡先メールを確認
4. メールアドレス: `ai.ec@awakeinc.co.jp` になっているか確認

---

### 2. Please provide the Google Ads manager account (MCC) ID associated with your developer token.
**回答**:
```
321-411-2286
```

**注意**: ハイフンあり（321-411-2286）で入力してください。

---

### 3. What is your issue?
**回答**:
```
Other
```

プルダウンから「Other」を選択してください。

---

### 4. Please describe the issue you are having in more detail.
**回答（英語）**:
```
I am applying for Basic Access to the Google Ads API to automate our company's advertising operations.

Company: Awake Inc.
Purpose: Automate keyword management, bid adjustments, and reporting for our own Google Ads account (404-045-1201).
Use case: Internal use only (not for external clients).

We have already:
- Created an MCC account (321-411-2286)
- Obtained a developer token (Test Account status)
- Implemented OAuth 2.0 authentication
- Developed automation scripts using the google-ads-api Node.js library

We are requesting Basic Access to use the API for our business operations.

Please find attached our API Design Document for review.
```

**回答（日本語訳）**:
```
自社の広告運用を自動化するため、Google Ads APIのベーシックアクセスを申請します。

会社: 株式会社Awake
目的: 自社のGoogle広告アカウント（404-045-1201）のキーワード管理、入札調整、レポート取得を自動化
利用方法: 社内利用のみ（外部クライアント向けサービスなし）

既に完了している準備:
- MCCアカウントの作成（321-411-2286）
- 開発者トークンの取得（テストアカウント状態）
- OAuth 2.0認証の実装
- google-ads-api Node.jsライブラリを使用した自動化スクリプトの開発

ビジネス運用のためにベーシックアクセスをリクエストします。

API設計ドキュメントを添付しますのでご確認ください。
```

---

### 5. Please provide your contact email address.
**回答**:
```
ai.ec@awakeinc.co.jp
```

**注意**: 企業ドメインのメールアドレスを使用してください。
Gmailアドレス（yannsunn1116@gmail.com）ではなく、会社のメールアドレスが推奨されます。

---

### 6. Are you working with a Google representative on this?
**回答**:
```
No
```

---

### 7. What is your company's website URL?
**回答**:
```
https://www.awakeinc.co.jp/
```

---

### 8. Please describe your business model and how you use Google Ads.
**回答（英語）**:
```
Awake Inc. is an IT services company based in Higashiyamato City, Tokyo, Japan.

Business Model:
- Website development for small and medium-sized businesses
- AI chatbot development and automation services
- Amazon marketplace agency services

Google Ads Usage:
We use Google Ads to acquire customers for our services. Our main campaigns focus on:
1. "Website development" keywords (50% of budget)
2. "AI chatbot" keywords (30% of budget)
3. "Amazon agency" keywords (20% of budget)

We run search campaigns targeting local businesses in Tokyo and nationwide customers.

API Use Case:
We plan to use the Google Ads API to:
- Automate keyword management (adding, removing, updating)
- Optimize bids based on performance data
- Generate automated reports for internal analysis
- Improve campaign efficiency and ROI

This is for internal use only. We do not provide Google Ads management services to external clients.
```

**回答（日本語訳）**:
```
株式会社Awakeは、東京都東大和市に拠点を置くITサービス会社です。

ビジネスモデル:
- 中小企業向けホームページ制作
- AIチャットボット開発および自動化サービス
- Amazon販売代行サービス

Google広告の利用方法:
当社サービスの顧客獲得にGoogle広告を使用しています。主なキャンペーンは以下の通りです:
1. 「ホームページ制作」キーワード（予算の50%）
2. 「AIチャットボット」キーワード（予算の30%）
3. 「Amazon販売代行」キーワード（予算の20%）

東京都内の地域企業および全国の顧客をターゲットとした検索広告を配信しています。

APIの使用目的:
Google Ads APIを以下の用途で使用する予定です:
- キーワード管理の自動化（追加、削除、更新）
- パフォーマンスデータに基づく入札最適化
- 社内分析用の自動レポート生成
- キャンペーン効率とROIの改善

これは社内利用のみです。外部クライアント向けのGoogle広告管理サービスは提供していません。
```

---

### 9. Please provide a design document that outlines how your tool interacts with the Google Ads API.
**回答**:
```
Please see attached: GOOGLE_ADS_API_DESIGN_DOCUMENT.pdf
```

**アクションアイテム**:
設計ドキュメント（`docs/GOOGLE_ADS_API_DESIGN_DOCUMENT.md`）をPDFに変換して添付してください。

---

### 10. Who will have access to your tool?
**回答**:
```
Internal users - employees only
```

プルダウンから「Internal users - employees only」を選択してください。

---

### 11. Do you use any third-party developed tools?
**回答**:
```
No
```

---

### 12. Does your tool use App Conversion Tracking?
**回答**:
```
No
```

---

## 📄 PDF変換方法

### 方法1: VSCodeの拡張機能を使用（推奨）

1. VSCodeで `GOOGLE_ADS_API_DESIGN_DOCUMENT.md` を開く
2. 拡張機能「Markdown PDF」をインストール
3. `Ctrl+Shift+P` → "Markdown PDF: Export (pdf)" を選択
4. PDFファイルが生成される

### 方法2: オンラインツールを使用

1. https://www.markdowntopdf.com/ にアクセス
2. `GOOGLE_ADS_API_DESIGN_DOCUMENT.md` をアップロード
3. 「Convert to PDF」をクリック
4. PDFをダウンロード

### 方法3: Pandocを使用

```bash
# Pandocがインストールされている場合
pandoc docs/GOOGLE_ADS_API_DESIGN_DOCUMENT.md -o GOOGLE_ADS_API_DESIGN_DOCUMENT.pdf
```

---

## ✅ 申請前チェックリスト

申請前に以下を確認してください：

- [ ] MCCアカウントのAPI連絡先メールが `ai.ec@awakeinc.co.jp` になっている
- [ ] 設計ドキュメントをPDFに変換した
- [ ] PDFファイルのサイズが10MB以下である
- [ ] すべてのフォーム項目に回答した
- [ ] 会社のウェブサイト（https://www.awakeinc.co.jp/）が正常に表示される
- [ ] 連絡先メールアドレス（ai.ec@awakeinc.co.jp）が有効である

---

## 📧 申請後の流れ

### 1. 自動返信メール
申請後すぐに、確認メールが `ai.ec@awakeinc.co.jp` に届きます。

### 2. 審査期間
通常、**1-3営業日**で審査が完了します。

### 3. 審査結果
以下のいずれかのメールが届きます：

#### ✅ 承認された場合
```
件名: Your Google Ads API access has been upgraded to Basic Access
内容: 開発者トークンがベーシックアクセスにアップグレードされました
```

→ すぐにAPI制限なしで使用可能になります！

#### ❌ 追加情報が必要な場合
```
件名: Additional information needed for your Google Ads API application
内容: 設計書の追加説明や修正が必要
```

→ 質問に回答して再提出してください。

#### ❌ 却下された場合
```
件名: Your Google Ads API application has been declined
内容: 却下理由の説明
```

→ 理由を確認し、修正して再申請してください。

---

## 🆘 よくある質問

### Q1: 設計ドキュメントは日本語でも良いですか？
A: いいえ、**英語で提出することを強く推奨**します。今回作成したドキュメントは既に英語で記載されています。

### Q2: 審査に落ちることはありますか？
A: 以下の場合、審査に落ちる可能性があります：
- 外部クライアント向けサービスと誤解される
- 設計ドキュメントが不十分
- 会社のウェブサイトが存在しない
- ポリシー違反の可能性がある

今回の申請内容は問題ないはずです。

### Q3: テストアカウントとベーシックアクセスの違いは？
A:
- **テストアカウント**: API呼び出し数に制限あり、テスト目的のみ
- **ベーシックアクセス**: 日次15,000回のAPI呼び出しが可能、本番運用可能

### Q4: 審査中もAPIは使えますか？
A: はい、テストアカウント状態で使用可能です（制限あり）。

---

## 📞 サポート

申請に関して質問がある場合：

1. **Googleサポート**: 申請フォーム経由で質問
2. **社内担当**: 田形康貴（ai.ec@awakeinc.co.jp）

---

**作成日**: 2025年10月23日
**最終更新**: 2025年10月23日
