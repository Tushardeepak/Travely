const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const mode = "development";

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
