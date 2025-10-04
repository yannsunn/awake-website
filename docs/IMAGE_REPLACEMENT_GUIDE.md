# 📸 画像差し替えガイド
## 株式会社Awake ホームページ

**最終更新**: 2025年10月3日

このドキュメントでは、現在配置されているUnsplash仮画像を、実際の会社の画像に差し替える方法を説明します。

---

## 🎯 画像差し替え箇所一覧

### 1. トップページ (/)

#### ヒーローセクション背景
**ファイル**: `src/app/HomePageContent.tsx`
**行数**: 69-73
**現在の画像**: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop`

```tsx
<img
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c..."
  alt="チームワーク背景"
  className="w-full h-full object-cover opacity-10"
/>
```

**推奨画像**:
- 内容: チームワーク、オフィス、ビジネスミーティング
- サイズ: 1920x1080px以上
- フォーマット: JPG, WebP推奨
- 配置先: `/public/images/hero-background.jpg`

**差し替え方法**:
```tsx
<img
  src="/images/hero-background.jpg"
  alt="Awake チームワーク"
  className="w-full h-full object-cover opacity-10"
/>
```

---

#### サービスカード画像

##### Web制作サービス
**ファイル**: `src/app/HomePageContent.tsx`
**行数**: 23
**現在の画像**: `https://images.unsplash.com/photo-1460925895917-afdab827c52f...`

```tsx
image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f...',
```

**推奨画像**:
- 内容: Webデザイン、UI/UX、デスクトップ画面
- サイズ: 800x500px
- 配置先: `/public/images/services/web-design.jpg`

**差し替え方法**:
```tsx
image: '/images/services/web-design.jpg',
```

##### AIチャットボットサービス
**ファイル**: `src/app/HomePageContent.tsx`
**行数**: 38
**現在の画像**: `https://images.unsplash.com/photo-1677442136019-21780ecad995...`

**推奨画像**:
- 内容: AI、ロボット、チャットボット画面
- サイズ: 800x500px
- 配置先: `/public/images/services/ai-chatbot.jpg`

**差し替え方法**:
```tsx
image: '/images/services/ai-chatbot.jpg',
```

##### Amazon代理店サービス
**ファイル**: `src/app/HomePageContent.tsx`
**行数**: 53
**現在の画像**: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d...`

**推奨画像**:
- 内容: ECサイト、オンラインショッピング、商品パッケージ
- サイズ: 800x500px
- 配置先: `/public/images/services/ec-amazon.jpg`

**差し替え方法**:
```tsx
image: '/images/services/ec-amazon.jpg',
```

---

### 2. 会社概要ページ (/about)

#### CEO プロフィール画像
**ファイル**: `src/app/about/page.tsx`
**行数**: 152-156
**現在の画像**: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d...`

```tsx
<img
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d..."
  alt="代表取締役CEO 田形康貴"
  className="w-full h-auto object-cover"
/>
```

**推奨画像**:
- 内容: CEO 田形康貴様のプロフィール写真
- サイズ: 800x1000px（縦長推奨）
- フォーマット: JPG, WebP
- 配置先: `/public/images/team/ceo-profile.jpg`

**差し替え方法**:
```tsx
<img
  src="/images/team/ceo-profile.jpg"
  alt="代表取締役CEO 田形康貴"
  className="w-full h-auto object-cover"
/>
```

---

### 3. サービス詳細ページ (/services/ai, /services/ec)

#### ヒーローセクション背景
**ファイル**: `src/components/sections/ServiceHero.tsx`
**行数**: 41-45
**現在の画像**: `https://images.unsplash.com/photo-1551434678-e076c223a692...`

```tsx
<img
  src="https://images.unsplash.com/photo-1551434678-e076c223a692..."
  alt="サービス背景"
  className="w-full h-full object-cover opacity-10"
/>
```

**推奨画像**:
- 内容: ビジネスチーム、オフィス環境
- サイズ: 1920x1080px
- 配置先: `/public/images/services/hero-background.jpg`

**差し替え方法**:
```tsx
<img
  src="/images/services/hero-background.jpg"
  alt="サービス背景"
  className="w-full h-full object-cover opacity-10"
/>
```

---

## 📁 推奨フォルダ構成

```
public/
├── images/
│   ├── hero-background.jpg          # トップページヒーロー背景
│   ├── team/
│   │   ├── ceo-profile.jpg          # CEO プロフィール
│   │   ├── team-photo.jpg           # チーム集合写真
│   │   └── office-*.jpg             # オフィス写真
│   ├── services/
│   │   ├── hero-background.jpg      # サービスページ背景
│   │   ├── web-design.jpg           # Web制作カード
│   │   ├── ai-chatbot.jpg           # AIカード
│   │   ├── ec-amazon.jpg            # ECカード
│   │   └── demo-*.png               # デモ画面
│   └── portfolio/
│       ├── project1-desktop.png     # 制作実績
│       ├── project1-mobile.png
│       └── ...
```

---

## 🎨 画像最適化のヒント

### 推奨フォーマット
- **写真**: WebP > JPG
- **スクリーンショット**: PNG
- **アイコン・図**: SVG

### サイズ最適化
1. **圧縮ツール**:
   - TinyPNG: https://tinypng.com/
   - Squoosh: https://squoosh.app/

2. **Next.js Image コンポーネント化**（オプション）:
```tsx
import Image from 'next/image'

<Image
  src="/images/team/ceo-profile.jpg"
  alt="代表取締役CEO 田形康貴"
  width={800}
  height={1000}
  className="w-full h-auto"
  priority // 最初に表示される画像の場合
/>
```

### レスポンシブ対応
- スマホ: 800px幅推奨
- タブレット: 1200px幅推奨
- デスクトップ: 1920px幅推奨

---

## ✅ 画像差し替えチェックリスト

### Phase 1: 最優先
- [ ] CEO プロフィール写真 (`/public/images/team/ceo-profile.jpg`)
- [ ] トップページヒーロー背景 (`/public/images/hero-background.jpg`)
- [ ] Web制作カード (`/public/images/services/web-design.jpg`)
- [ ] AIカード (`/public/images/services/ai-chatbot.jpg`)
- [ ] ECカード (`/public/images/services/ec-amazon.jpg`)

### Phase 2: 優先
- [ ] サービスページ背景 (`/public/images/services/hero-background.jpg`)
- [ ] チーム写真 (`/public/images/team/team-photo.jpg`)
- [ ] オフィス写真 (複数)

### Phase 3: 推奨
- [ ] 制作実績スクリーンショット (複数)
- [ ] デモ画面 (複数)
- [ ] その他補助画像

---

## 🚀 画像配置後の確認

1. **ローカルでテスト**:
```bash
npm run dev
```

2. **確認項目**:
- [ ] 画像が正しく表示されている
- [ ] レスポンシブ対応が機能している
- [ ] 読み込み速度が適切
- [ ] alt属性が設定されている

3. **本番デプロイ前**:
```bash
npm run build
npm run start
```

---

## 📝 注意事項

### 著作権
- 使用する画像の著作権・使用許諾を確認してください
- 社員の肖像権に配慮してください

### パフォーマンス
- 画像サイズは1MB以下を推奨
- WebP形式を優先的に使用
- 必要に応じて遅延読み込みを実装

### アクセシビリティ
- すべての画像に適切なalt属性を設定
- 装飾的な画像は alt="" に設定

---

**画像差し替えで困ったことがあれば、このドキュメントを参照してください！**
