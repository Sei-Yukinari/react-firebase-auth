react-firebase-auth
====

## Overview
reactとfirebase auth

## Requirement
- React
- React Router
- Redux
- Redux-Saga
- styled-components
- TypeScript
- Webpack
- firebase

## Install

```bash
yarn
```

## Start
```bash
yarn start
```

## build

```bash
yarn build
```

distフォルダにバンドルされたファイルが作成されます

## lint
```bash
yarn lint
```

コミット前にlintが実行されます

## test
```bash
yarn test
```

プッシュ前にtestが実行されます

## Deploy
Netlifyと連携してます

### staging
```bash
git push origin staging
```

URL

### production
```bash
git push origin master
```

## Folder
```
.
├── package.json                      // プロジェクトのライブラリマネージャー
├── src
│   ├── App.tsx                       // Reactの起点
│   ├── __tests__                     // testファイル
│   ├── components                    // 純粋なReactコンポーネント
│   ├── config                        // API等のURLなどの環境変数
│   │   ├── development.ts
│   │   ├── index.tsx
│   │   ├── production.ts
│   │   └── staging.ts
│   ├── const                         // constant値
│   ├── containers                    // componentsとReduxをつなぐ
│   │   ├── hoc                       // 初期化処理
│   │   │   └── withInitialize.tsx
│   │   └── routes                    // routingの起点
│   ├── hooks                         // React Hooksのモジュール
│   ├── index.html                    // SPAのHTML起点
│   ├── index.tsx                     // redux,saga,styled-componentとのProvider
│   ├── modules                       // redux,saga,selectorのコードをdomainごとに置く
│   ├── paths.ts                      // routerのpassのconstant
│   ├── reset.css
│   ├── services
│   │   ├── api                       // バックエンドとのAPI通信
│   │   ├── mocks                     // テスト用モックデータ
│   │   ├── models                    // domainの型
│   │   └── validation                // 入力フォームのチェック
│   └── utils                         // api、日付処理等のutility関数
├── tsconfig.json                     // typescriptのコンパイルオプション
├── types                             // サードパーティの型
├── webpack.common.js                 // モジュールバンドラの共通設定
├── webpack.dev.js                    // モジュールバンドラの開発環境設定
├── webpack.prod.js                   // モジュールバンドラの本番環境設定
```
