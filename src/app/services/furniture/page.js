export default function FurnitureService() {
  return (
    <div className="service-container">
      <h1 className="service-title">家具製作</h1>
      <p className="service-description">
        人気のアイアン家具を完全オーダーメイドで製造します
        一体型での納品になるので難しい組み立ても不要
      </p>
      <div className="service-features">
        <div className="service-grid">
          <div className="service-card">
            <h3>アイアンシェルフ</h3>
            <p>オーダーメイドの収納棚</p>
            <ul className="feature-list">
              <li>サイズオーダー可能</li>
              <li>耐荷重性能保証</li>
              <li>防錆加工済み</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>テレビボード</h3>
            <p>配線収納に特化したデザイン</p>
            <ul className="feature-list">
              <li>配線穴カスタマイズ</li>
              <li>キャスターオプション</li>
              <li>木材とアイアンの組み合わせ</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>ダイニングテーブル</h3>
            <p>無垢材×アイアンの組み合わせ</p>
            <ul className="feature-list">
              <li>天板材質選択可能</li>
              <li>エイジング加工対応</li>
              <li>サイズオーダー可能</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 