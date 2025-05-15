export default function ECService() {
  return (
    <div className="service-container">
      <h1 className="service-title">EC通販</h1>
      <p className="service-description">
        メーカー、問屋の商品やOEM商品を代理で販売いたします
      </p>
      <div className="service-features">
        <div className="service-card">
          <div className="text-center">
            <span className="text-sm text-gray-600">初期費用</span>
            <span className="block text-4xl font-bold text-primary">¥0</span>
          </div>
          <ul className="feature-list">
            <li>売上手数料10%〜</li>
            <li>在庫管理無料</li>
            <li>即日開始可能</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 