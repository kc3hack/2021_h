# KC3Hack 2021 Template

[![KC3Hack](https://kc3.me/hack/wp-content/uploads/2021/01/kc3hack2021ogp@2x.png)](https://kc3.me/hack)

## プロダクト名
- **Chatree**

## プロダクト説明
このプロダクトは、コメントに対して返信をつなげていくという形で会話を進める会員制(無料)の新しいチャットプラットフォームです  
環境構築は次項を参考にしてください

### 紹介スライド
<iframe src="https://onedrive.live.com/embed?cid=CB7CDDB7894A28C5&resid=CB7CDDB7894A28C5%21120029&authkey=AD_gR6GWT3CtV9Q&em=2" width="402" height="327" frameborder="0" scrolling="no"></iframe>

### 動作イメージ
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/62094392/111894320-4f26f480-8a4d-11eb-8d41-de82740e9d56.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/62094392/111894271-eb9cc700-8a4c-11eb-9cae-8c3b351cfab2.png">


## 使い方
1. こちら ( https://zenn.dev/kotokaze/articles/virtual-env-setup ) の Zenn の記事を参考にして DB 等の環境構築をする
2. `chat_app` という名前の DB を生成する  
3. GitHub OAuth の認証コードを取得し、 `config.js` を修正する
4. webapp ディレクトリ内で `PORT=8000 yarn start`

## 使用技術
- フロントエンド
    - [Two.js](https://two.js.org/)
    - [UIkit3](https://getuikit.com/)
- バックエンド
    - [Express](expressjs.com/)
    - DB - [PostgreSQL](https://www.postgresql.org/)
    - 認証 - [Passport](http://www.passportjs.org/) & [Passport-github](http://www.passportjs.org/packages/passport-github/)
