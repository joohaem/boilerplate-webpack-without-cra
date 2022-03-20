const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 8080;

module.exports = {
  // development 모드는 개발자 경험에 초점이 맞춰진 모드
  // production모드는 배포에 초점이 맞춰진 모드
  mode: "development",

  // filename의 [hash]는 어플리케이션이 수정되어
  // 다시 컴파일될 때마다 Webpack(웹팩)에서 생성된 해시로 변경해 캐싱
  // entry:'./src/index.js', 설정 기본값
  output: {
    path: __dirname + "/dist",
    filename: "bundle.[hash].js",
    // Hot reloading은 중첩된 경로에서 동작하지 않아
    // 설정해주지 않을 경우 Hot reloading이 작동이 안 됨
    publicPath: "/",
  },

  module: {
    rules: [
      // 첫 번째 룰
      // .babelrc를 babel-loader를 이용해 규칙에 적용
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // 두 번째 룰
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    // HtmlWebpackPlugin은 html파일이나 favicon을 번들링과정에 포함
    // 예를들어 번들된 파일 bundle.[hash].js를 index.html에 자동 삽입
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],

  // 개발 서버 정의
  devServer: {
    host: "localhost",
    port: port,
    // 서버 실행 시 자동으로 브라우저 열어주는 옵션
    open: true,
    // 브라우저에서 URL 변경하도록 도와주는 옵션
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
};
