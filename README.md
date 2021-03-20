# KC3Hack 2021 Template

[![KC3Hack](https://kc3.me/hack/wp-content/uploads/2021/01/kc3hack2021ogp@2x.png)](https://kc3.me/hack)

## プロダクト名
- **Chatree**

## プロダクト説明


## 使い方
1. こちら ( https://zenn.dev/kotokaze/articles/virtual-env-setup ) の Zenn の記事を参考にして DB 等の環境構築をする
2. `chat_app` という名前の DB を生成する  
webapp ディレクトリ内で `PORT=8000 yarn start`
3. GitHub OAuth の認証コードを取得し、 `config.js` を修正する

## 使用技術
- フロントエンド
    - [Two.js](https://two.js.org/)
    - [UIkit3](https://getuikit.com/)
- バックエンド
    - [Express](expressjs.com/)
    - DB - [PostgreSQL](https://www.postgresql.org/)
    - 認証 - [Passport](http://www.passportjs.org/) & [Passport-github](http://www.passportjs.org/packages/passport-github/)
