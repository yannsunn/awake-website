import React from 'react';
import { createRoot } from 'react-dom/client';
import AwakeWebsite from './components/AwakeWebsite';
import './styles/index.css';

// Reactアプリケーションのルートを作成
const container = document.getElementById('root');
const root = createRoot(container);

// AwakeWebsiteコンポーネントをレンダリング
root.render(
  <React.StrictMode>
    <AwakeWebsite />
  </React.StrictMode>
); 