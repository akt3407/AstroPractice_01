# 🚀 AstroPractice_01

## 📖 概要

このプロジェクトは、**Tomoya.Okada** さんのデザインを [Astro](https://astro.build/) で実装する練習用プロジェクトです。  
Astro・TypeScript・Tailwind CSS を使った Web サイト構築の基礎を学ぶことを目的としています。

---

## 🛠️ 主要技術

| 技術 | バージョン | 役割 |
| --- | --- | --- |
| [Astro](https://astro.build/) | 6.1.6 | 静的サイトジェネレーター（SSG）。HTML を高速に生成するフレームワーク |
| [TypeScript](https://www.typescriptlang.org/) | 5.9.3 | JavaScript に「型」を追加した言語。バグを事前に防げる |
| [Tailwind CSS](https://tailwindcss.com/) | 4.2.2 | ユーティリティファーストの CSS フレームワーク。クラス名だけでスタイリングできる |

### 🔧 開発ツール（devDependencies）

| ツール | 役割 |
| --- | --- |
| [ESLint](https://eslint.org/) | コードの書き方をチェックしてくれるツール（リンター） |
| [Prettier](https://prettier.io/) | コードのフォーマット（見た目）を自動で揃えてくれるツール |
| [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro) | `.astro` ファイルに対応した ESLint プラグイン |
| [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) | `import` 文の順番やルールをチェックしてくれるプラグイン |
| [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports) | 使っていない `import` を自動で検出・削除してくれるプラグイン |
| [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) | ESLint と Prettier のルールが競合しないようにする設定 |
| [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro) | Prettier で `.astro` ファイルをフォーマットできるようにするプラグイン |

> 💡 **初学者向けメモ：ESLint と Prettier の違い**
>
> - **ESLint** → コードの「**品質**」をチェック（未使用変数、import 順序など）
> - **Prettier** → コードの「**見た目**」を揃える（インデント、改行、クォートの統一など）
>
> この 2 つを組み合わせることで、きれいで正しいコードが書けるようになります。

---

## 📁 ディレクトリ構成

```
Tomoya.Okada Part.1/
├── .git/                    # Git の管理情報（触らない）
├── .gitignore               # Git で追跡しないファイルの一覧
├── .prettierignore           # Prettier でフォーマットしないファイルの一覧
├── .vscode/                 # VS Code の設定ファイル
│   ├── extensions.json      #   └ おすすめ拡張機能の定義
│   ├── launch.json          #   └ デバッグ実行の設定
│   └── setting.json         #   └ エディタの動作設定（保存時フォーマットなど）
│
├── public/                  # 静的ファイル置き場（そのまま配信される）
│   ├── favicon.ico          #   └ ブラウザのタブに表示されるアイコン（.ico 形式）
│   └── favicon.svg          #   └ ブラウザのタブに表示されるアイコン（SVG 形式）
│
├── src/                     # ★ ソースコード本体（ここがメイン！）
│   ├── assets/              #   └ 画像・SVG などの素材ファイル
│   │   ├── astro.svg        #       Astro ロゴの SVG
│   │   └── background.svg   #       背景用の SVG
│   ├── components/          #   └ 再利用可能な UI パーツ（コンポーネント）
│   │   └── Welcome.astro    #       ウェルカム画面のコンポーネント
│   ├── layouts/             #   └ ページの共通レイアウト（HTML の骨格）
│   │   └── Layout.astro     #       <html>・<head>・<body> を定義するベースレイアウト
│   ├── pages/               #   └ ページファイル（ファイル名 = URL パス）
│   │   └── index.astro      #       トップページ（ / でアクセス）
│   ├── styles/              #   └ グローバルな CSS ファイル
│   │   └── global.css       #       Tailwind CSS のインポート
│   ├── svgs/                #   └ SVG コンポーネント用（現在は空）
│   └── utils/               #   └ ユーティリティ関数用（現在は空）
│
├── astro.config.mjs         # Astro の設定ファイル
├── eslint.config.mjs        # ESLint の設定ファイル
├── prettier.config.cjs      # Prettier の設定ファイル
├── tsconfig.json            # TypeScript の設定ファイル
├── package.json             # プロジェクトの依存関係・スクリプト定義
├── pnpm-lock.yaml           # 依存パッケージのバージョン固定ファイル
└── README.md                # ← このファイル
```

> 💡 **初学者向けメモ：`public/` と `src/assets/` の違い**
>
> | | `public/` | `src/assets/` |
> | --- | --- | --- |
> | **処理** | そのままコピーされる | Astro がビルド時に最適化する |
> | **用途** | favicon、robots.txt など | 画像、フォント、SVG など |
> | **参照方法** | `/favicon.svg` のように直接パス指定 | `import` 文で読み込む |
>
> 基本的に、**最適化してほしい画像は `src/assets/`** に、**そのまま使いたいファイルは `public/`** に置きます。

---

## ⚙️ 設定ファイルの解説

### `astro.config.mjs`

Astro の設定ファイルです。Tailwind CSS を Vite プラグインとして組み込んでいます。

```js
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()], // ← Tailwind CSS v4 はViteプラグインとして動く
  },
});
```

### `tsconfig.json`

TypeScript の設定ファイルです。Astro が用意している **strict**（厳格な型チェック）設定を継承しています。

```json
{
  "extends": "astro/tsconfigs/strict", // Astro推奨の厳格な型チェック設定
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"] // ビルド出力は型チェック対象外
}
```

> 💡 **`strict` モードにするメリット**：型の間違いをコンパイル時に見つけてくれるので、実行時のバグが大幅に減ります。初学者こそ strict モードで練習するのがおすすめです。

### `eslint.config.mjs`

コードの品質チェック設定です。主に以下をチェックしています：

- **未使用の import 文の検出**（`eslint-plugin-unused-imports`）
- **import 文の並び順ルール**（`eslint-plugin-import`）
- **Astro ファイルの構文チェック**（`eslint-plugin-astro`）
- **Prettier との競合回避**（`eslint-config-prettier`）

### `prettier.config.cjs`

コードフォーマットの設定です。チーム内でコードの見た目を統一するために使います。

| 設定項目 | 値 | 意味 |
| --- | --- | --- |
| `trailingComma` | `'all'` | 配列やオブジェクトの最後の要素にもカンマを付ける |
| `tabWidth` | `2` | インデントはスペース 2 つ分 |
| `printWidth` | `80` | 1 行あたり最大 80 文字で折り返す |
| `singleQuote` | `false` | 文字列はダブルクォート `"` で囲む |
| `semi` | `true` | 文末にセミコロン `;` を付ける |
| `endOfLine` | `'lf'` | 改行コードは LF（Mac/Linux 標準） |

---

## 🧩 Astro の基本構造（初学者向け）

Astro のファイル（`.astro`）は **3 つのパート** で構成されています：

```astro
---
// ① フロントマター（JavaScript / TypeScript のロジック）
// ここで import・変数定義・データ取得などを行う
import Layout from "../layouts/Layout.astro";
---

<!-- ② テンプレート（HTML の構造） -->
<!-- フロントマターで定義した変数を {} で埋め込める -->
<Layout>
  <h1>Hello, Astro!</h1>
</Layout>

<style>
  /* ③ スタイル（CSS） */
  /* デフォルトでスコープされる（このコンポーネントにしか影響しない） */
  h1 {
    color: blue;
  }
</style>
```

### ファイルベースルーティング

Astro では `src/pages/` 内のファイル名がそのまま URL になります：

| ファイルパス | URL |
| --- | --- |
| `src/pages/index.astro` | `/` |
| `src/pages/about.astro` | `/about` |
| `src/pages/blog/post-1.astro` | `/blog/post-1` |

---

## 🚀 開発コマンド

すべてのコマンドはプロジェクトのルートディレクトリで実行します。  
パッケージマネージャーには **pnpm** を使用しています。

| コマンド | 説明 |
| --- | --- |
| `pnpm install` | 依存パッケージをインストール（初回のみ or `package.json` 更新時） |
| `pnpm run dev` | 開発サーバーを起動。ブラウザで `http://localhost:4321` を開く |
| `pnpm run build` | 本番用の静的ファイルを `dist/` に生成 |
| `pnpm run preview` | ビルド済みサイトをローカルでプレビュー |
| `pnpm run lint` | ESLint でコードの問題を検出 |
| `pnpm run lint:fix` | ESLint の自動修正可能な問題を修正 |
| `pnpm run format` | Prettier でコードフォーマット → ESLint 自動修正を実行 |

> 💡 **初学者向けメモ：開発の流れ**
>
> 1. `pnpm install` で依存パッケージをインストール
> 2. `pnpm run dev` で開発サーバーを起動
> 3. `src/` 内のファイルを編集すると、ブラウザが自動でリロードされる（ホットリロード）
> 4. 作業が終わったら `pnpm run format` でコードを整える
> 5. `pnpm run build` で本番用ファイルを生成

---

## 📝 VS Code の推奨設定

このプロジェクトでは `.vscode/` に VS Code の設定が含まれています：

- **保存時に自動フォーマット**（Prettier）が有効
- **保存時に ESLint の自動修正**が有効
- **推奨拡張機能**: [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

必要に応じて、以下の拡張機能もインストールすると便利です：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

## 📚 参考リンク

- [Astro 公式ドキュメント](https://docs.astro.build/)
- [Tailwind CSS 公式ドキュメント](https://tailwindcss.com/docs)
- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/docs/)
- [ESLint 公式ドキュメント](https://eslint.org/docs/latest/)
- [Prettier 公式ドキュメント](https://prettier.io/docs/en/)

---

## 🔰 動作環境

| 項目 | 要件 |
| --- | --- |
| Node.js | `>= 22.12.0` |
| パッケージマネージャー | pnpm |
