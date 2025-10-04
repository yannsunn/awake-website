# 📍 写真配置マップ
## 株式会社Awake ホームページ

**作成日**: 2025年10月3日
**目的**: 各写真をどこに配置するかを明確に記録

---

## 🏠 トップページ (/)

### 1. ヒーローセクション
**ファイル**: `src/app/HomePageContent.tsx` (64-100行目)

```tsx
// 現在の実装
<section className="corp-hero">
  {/* 背景画像: 抽象的なグラデーション */}
</section>
```

**追加する写真**:
- **オプションA: 背景動画**
  - ファイル: `public/videos/team-working.mp4`
  - サイズ: 1920x1080px、15-30秒ループ
  - 内容: チームが働いている様子
  - 実装場所: `<video>` タグを背景に追加
  - 優先度: ⭐⭐⭐

- **オプションB: 分割スクリーン（右側）**
  - ファイル: `public/images/hero/mockup-showcase.png`
  - サイズ: 800x1000px
  - 内容: 制作したサイトのモックアップ
  - 実装場所: ヒーローの右半分
  - 優先度: ⭐⭐

### 2. サービスセクション
**ファイル**: `src/app/HomePageContent.tsx` (103-152行目)

```tsx
// 現在: アイコンのみ
<service.icon className="w-7 h-7" />
```

**追加する写真**:
- 各サービスカードの背景または上部に配置

#### サービス1: ホームページ制作
- **ファイル**: `public/images/services/web-design-team.jpg`
- **サイズ**: 400x250px
- **内容**: デザイナーが作業している様子
- **実装**: カードの上部に配置
- **優先度**: ⭐⭐

#### サービス2: AIチャットボット
- **ファイル**: `public/images/services/ai-chatbot-demo.png`
- **サイズ**: 400x250px
- **内容**: チャットボットのデモ画面
- **実装**: カードの上部に配置
- **優先度**: ⭐⭐⭐

#### サービス3: Amazon代理店
- **ファイル**: `public/images/services/amazon-store.jpg`
- **サイズ**: 400x250px
- **内容**: Amazonストアフロント
- **実装**: カードの上部に配置
- **優先度**: ⭐⭐

### 3. 経営理念セクション
**ファイル**: `src/app/HomePageContent.tsx` (158-188行目)

```tsx
<section className="corp-section bg-white relative">
  {/* CEO写真を追加 */}
</section>
```

**追加する写真**:
- **ファイル**: `public/images/team/ceo-profile.jpg`
- **サイズ**: 400x400px（正方形）
- **内容**: CEOプロフィール写真
- **実装**: セクション左側または中央上部
- **優先度**: ⭐⭐⭐

---

## 👥 会社概要ページ (/about)

### 1. ページトップ
**ファイル**: `src/app/about/page.tsx`

**追加する写真**:
- **ファイル**: `public/images/about/team-hero.jpg`
- **サイズ**: 1920x600px（横長）
- **内容**: チーム全員の集合写真
- **実装**: ページトップのヒーロー画像
- **優先度**: ⭐⭐⭐

### 2. CEOメッセージセクション
**追加する写真**:
- **ファイル**: `public/images/team/ceo-message.jpg`
- **サイズ**: 600x600px
- **内容**: CEOの別カット（より親しみやすい表情）
- **実装**: メッセージの左側
- **優先度**: ⭐⭐

### 3. オフィス紹介セクション
**追加する写真**:

#### オフィス外観
- **ファイル**: `public/images/office/exterior.jpg`
- **サイズ**: 800x600px
- **内容**: 建物外観、看板
- **優先度**: ⭐

#### デスクエリア
- **ファイル**: `public/images/office/desk-area.jpg`
- **サイズ**: 800x600px
- **内容**: 整理されたデスク
- **優先度**: ⭐⭐

#### ミーティングスペース
- **ファイル**: `public/images/office/meeting-room.jpg`
- **サイズ**: 800x600px
- **内容**: 会議室またはミーティングスペース
- **優先度**: ⭐

### 4. チームメンバー紹介（新規追加予定）
**追加する写真**:
- **ファイル**: `public/images/team/member-*.jpg`（複数）
- **サイズ**: 300x300px（各メンバー）
- **内容**: 各メンバーのプロフィール写真
- **優先度**: ⭐

---

## 💼 サービス詳細ページ

### A. ホームページ制作 (/services/web または portfolio.awakeinc.co.jp)

#### ポートフォリオギャラリー
**追加する写真**:

##### 実績1
- **ファイル**: `public/images/portfolio/project1-desktop.png`
- **サイズ**: 1440x900px
- **内容**: プロジェクト全画面
- **優先度**: ⭐⭐⭐

- **ファイル**: `public/images/portfolio/project1-mobile.png`
- **サイズ**: 375x812px
- **内容**: モバイル版
- **優先度**: ⭐⭐⭐

##### 実績2-5
- 同様のフォーマットで複数
- **優先度**: ⭐⭐⭐

#### 制作プロセス
**追加する写真**:
- **ファイル**: `public/images/process/wireframe.jpg`
- **内容**: ワイヤーフレーム作成中
- **優先度**: ⭐

- **ファイル**: `public/images/process/design-work.jpg`
- **内容**: デザイン作業中
- **優先度**: ⭐

- **ファイル**: `public/images/process/coding.jpg`
- **内容**: コーディング中
- **優先度**: ⭐

### B. AIチャットボット開発 (/services/ai)

#### デモセクション
**追加する写真**:

##### デスクトップデモ
- **ファイル**: `public/images/ai/chatbot-demo-desktop.png`
- **サイズ**: 1440x900px
- **内容**: チャットボット動作画面（今回作ったもの）
- **実装**: メインデモ
- **優先度**: ⭐⭐⭐

##### モバイルデモ
- **ファイル**: `public/images/ai/chatbot-demo-mobile.png`
- **サイズ**: 375x812px
- **内容**: スマホでの表示
- **優先度**: ⭐⭐

##### 管理画面
- **ファイル**: `public/images/ai/chatbot-admin.png`
- **サイズ**: 1440x900px
- **内容**: 設定画面（一部）
- **優先度**: ⭐

#### ユースケース
**追加する写真**:
- **ファイル**: `public/images/ai/usecase-customer-support.jpg`
- **内容**: カスタマーサポート活用例
- **優先度**: ⭐⭐

- **ファイル**: `public/images/ai/usecase-lead-generation.jpg`
- **内容**: リード獲得活用例
- **優先度**: ⭐

### C. Amazon代理店 (/services/ec)

#### Amazon管理画面
**追加する写真**:

##### ストアフロント
- **ファイル**: `public/images/amazon/storefront.png`
- **サイズ**: 1440x900px
- **内容**: 実際のAmazonストア
- **優先度**: ⭐⭐⭐

##### 商品ページ
- **ファイル**: `public/images/amazon/product-page-*.png`（複数）
- **サイズ**: 1440x900px
- **内容**: 魅力的な商品ページ
- **優先度**: ⭐⭐⭐

##### 売上グラフ
- **ファイル**: `public/images/amazon/sales-graph.png`
- **サイズ**: 800x600px
- **内容**: 成長曲線（数字は隠してOK）
- **優先度**: ⭐⭐

---

## 🎯 FAQ/お問い合わせページ

### お問い合わせフォーム横
**ファイル**: `src/components/ui/ContactForm.tsx`

**追加する写真**:
- **ファイル**: `public/images/contact/support-team.jpg`
- **サイズ**: 600x800px
- **内容**: サポートチームの親しみやすい写真
- **実装**: フォームの右側または下部
- **優先度**: ⭐

---

## 📊 新規追加予定セクション

### Success Stories（成功事例）
**場所**: トップページに新規追加予定

**追加する写真**:

#### 事例1: ホームページ制作
- **ファイル**: `public/images/success/web-case1.jpg`
- **内容**: Before/After 比較
- **優先度**: ⭐⭐⭐

#### 事例2: AIチャットボット
- **ファイル**: `public/images/success/ai-case1.jpg`
- **内容**: 導入効果のビジュアル
- **優先度**: ⭐⭐⭐

#### 事例3: Amazon代理店
- **ファイル**: `public/images/success/ec-case1.jpg`
- **内容**: 売上グラフ、商品画像
- **優先度**: ⭐⭐⭐

### How We Work（働き方）
**場所**: Aboutページに新規追加予定

**追加する写真**:
- **ファイル**: `public/images/work/brainstorming.jpg`
- **内容**: ホワイトボードでアイデア出し
- **優先度**: ⭐⭐

- **ファイル**: `public/images/work/collaboration.jpg`
- **内容**: チームでのコラボレーション
- **優先度**: ⭐⭐

- **ファイル**: `public/images/work/coffee-break.jpg`
- **内容**: リラックスした雰囲気
- **優先度**: ⭐

---

## 🖼️ 画像フォルダ構成

```
public/
├── images/
│   ├── hero/
│   │   ├── mockup-showcase.png
│   │   └── team-background.jpg
│   ├── team/
│   │   ├── ceo-profile.jpg
│   │   ├── ceo-message.jpg
│   │   ├── team-hero.jpg
│   │   └── member-*.jpg
│   ├── office/
│   │   ├── exterior.jpg
│   │   ├── desk-area.jpg
│   │   └── meeting-room.jpg
│   ├── services/
│   │   ├── web-design-team.jpg
│   │   ├── ai-chatbot-demo.png
│   │   └── amazon-store.jpg
│   ├── portfolio/
│   │   ├── project1-desktop.png
│   │   ├── project1-mobile.png
│   │   └── project*-*.png
│   ├── ai/
│   │   ├── chatbot-demo-desktop.png
│   │   ├── chatbot-demo-mobile.png
│   │   ├── chatbot-admin.png
│   │   └── usecase-*.jpg
│   ├── amazon/
│   │   ├── storefront.png
│   │   ├── product-page-*.png
│   │   └── sales-graph.png
│   ├── success/
│   │   ├── web-case1.jpg
│   │   ├── ai-case1.jpg
│   │   └── ec-case1.jpg
│   ├── work/
│   │   ├── brainstorming.jpg
│   │   ├── collaboration.jpg
│   │   └── coffee-break.jpg
│   ├── process/
│   │   ├── wireframe.jpg
│   │   ├── design-work.jpg
│   │   └── coding.jpg
│   └── contact/
│       └── support-team.jpg
└── videos/
    └── team-working.mp4
```

---

## 📝 実装コードスニペット

### 1. ヒーローセクションに写真追加

```tsx
// src/app/HomePageContent.tsx

// オプションA: 背景動画
<section className="corp-hero relative">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-20"
  >
    <source src="/videos/team-working.mp4" type="video/mp4" />
  </video>
  {/* 既存のコンテンツ */}
</section>

// オプションB: 分割スクリーン
<section className="corp-hero">
  <div className="grid lg:grid-cols-2 gap-8">
    <div>{/* テキスト */}</div>
    <div>
      <Image
        src="/images/hero/mockup-showcase.png"
        alt="制作実績"
        width={800}
        height={1000}
      />
    </div>
  </div>
</section>
```

### 2. サービスカードに写真追加

```tsx
// src/app/HomePageContent.tsx (119-149行目)

<div className="corp-card h-full">
  {/* 写真を追加 */}
  <div className="mb-6 rounded-lg overflow-hidden">
    <Image
      src={`/images/services/${service.image}`}
      alt={service.title}
      width={400}
      height={250}
      className="w-full h-auto"
    />
  </div>

  {/* 既存のアイコン・テキスト */}
  <div className="w-14 h-14...">
    <service.icon ... />
  </div>
  {/* ... */}
</div>
```

### 3. CEOセクションに写真追加

```tsx
// 経営理念セクション

<section className="corp-section bg-white relative">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="corp-card p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* CEO写真 */}
          <div>
            <Image
              src="/images/team/ceo-profile.jpg"
              alt="CEO 田形 康貴"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* テキスト */}
          <div>
            <h3 className="corp-heading-3 mb-6">
              {COMPANY_DATA.basic.mission}
            </h3>
            <p className="corp-text-lead mb-8">
              適正な投資で最大の効果を...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## ✅ 写真準備チェックリスト

### 最優先（Phase 1）
- [ ] CEOプロフィール写真
- [ ] チーム写真
- [ ] 働く様子の写真（3枚）
- [ ] 制作実績スクリーンショット（3件）
- [ ] AIチャットボットデモ画面

### 優先（Phase 2）
- [ ] オフィス写真（外観 + 内観）
- [ ] Amazonストア画面
- [ ] 各サービスのカード用写真

### 推奨（Phase 3）
- [ ] 成功事例用写真
- [ ] プロセス写真
- [ ] 顧客関連写真

---

## 📍 優先度の説明

- ⭐⭐⭐ 最優先: すぐに効果が出る、必須
- ⭐⭐ 優先: ブランド強化に重要
- ⭐ 推奨: あると良い、長期的改善

---

**このマップを参考に、写真が揃い次第、順次実装していきます！**
