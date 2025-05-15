import styles from './styles.module.css';

export default function VideoService() {
  return (
    <div className="service-container">
      <h1 className="service-title">動画編集</h1>
      <p className="service-description">
        AIによる加工により顔出しなしでSNS運用が可能です
      </p>
      <div className="service-features">
        <div className="service-grid">
          <div className="service-card">
            <h3>SNS動画編集</h3>
            <p>TikTok、Instagram、YouTubeなどのSNS向け動画編集</p>
          </div>
          <div className="service-card">
            <h3>AI音声ナレーション</h3>
            <p>自然な声でナレーションを追加</p>
          </div>
          <div className="service-card">
            <h3>字幕・テロップ</h3>
            <p>視聴者を引き込む効果的なテキスト演出</p>
          </div>
          <div className="service-card">
            <h3>BGM・効果音</h3>
            <p>著作権フリーの音源を使用した演出</p>
          </div>
        </div>
      </div>
    </div>
  );
} 