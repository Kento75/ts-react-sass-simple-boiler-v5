const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extTextPlugin = require('extract-text-webpack-plugin');

const rules = [
  /* TypeScript用の設定 */
  {
    // 対象とする拡張子を指定
    test: /\.tsx?/,
    // 対象から外すディレクトリを指定
    exclude: /node_modules/,
    // babelを使用する
    loader: 'babel-loader',
  },
  /* Sass用設定 */
  {
    // 対象とする拡張子を指定
    test: /\.scss$/,
    use: extTextPlugin.extract([
      // CSSのバンドル設定
      {
        loader: 'css-loader',
        options: {
          // css内のurl()メソッドを取り込む設定
          url: true,
          // // ソースマップの有効化 development と production で勝手に切り替わるのでコメントアウト
          // sourceMap: true,

          // sass-loader と postcss-loader を使用するので 2 を設定
          // ここを参考に設定 https://github.com/webpack-contrib/css-loader#importloaders
          importLoaders: 2,
        },
      },
      'postcss-loader',
      {
        loader: 'sass-loader',
        // options: {
        // // ソースマップの有効化 development と production で勝手に切り替わるのでコメントアウト
        //   sourceMap: true,
        // }
      },
    ]),
  },
  /* 画像ファイル用設定 */
  {
    // 対象となるファイルの拡張子を設定
    test: /\.(gif|png|jpg|jpeg|svg|ttf|eot|wof|woff|woff2)$/,
    // 画像をBase64で取り込み
    loader: 'url-loader',
    // 画像ファイルに関するオプション
    options: {
      // 20KB以上を対象とする（バイナリ換算）
      // https://www.gbmb.org/kb-to-bytes で正確な値を調べる
      limit: 20480,
      // 256KB以上を対象とする（バイナリ換算）
      // limit: 262144,
      // ファイルのアウトプット場所 名前は保持
      name: './images/[name].[ext]',
    },
  },
];

module.exports = {
  // ブラウザ環境で使用するためwebをtargetとする
  target: 'web',
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  // 起点となるTSXファイル（エントリーポイント）
  entry: './src/index.tsx',
  // ビルド後の出力先設定
  output: {
    // 出力先パス
    path: path.resolve(__dirname, 'build'),
    // ファイル名
    filename: 'bundle.js',
  },
  module: {
    // ビルド時に使用するルール（上で設定）を設定
    rules,
  },
  // 各種プラグイン
  plugins: [
    // filenameで指定したJSを読み込むHTMLファイルをbuildディレクトリに生成
    new htmlWebpackPlugin(),
    // 出力ファイル名を指定
    new extTextPlugin('[name].css'),
  ],
  resolve: {
    // 対象とする拡張子を指定
    extensions: ['.ts', '.tsx', '.js'],
  },
  // ソースマップの設定（オリジナルのソースコードを出力）
  devtool: 'eval-source-map',
  // webpack-dev-serverの設定
  devServer: {
    // 起点となるパス
    contentBase: './',
    // ポート番号
    port: 5000,
  },
};
