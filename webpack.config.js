const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app/app.ts",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/public/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "product-list.html",
      template: "src/public/product-list.html",
    }),
    new HtmlWebpackPlugin({
      filename: "product-details.html",
      template: "src/public/product-details.html",
    }),
    new HtmlWebpackPlugin({
      filename: "signup.html",
      template: "src/public/signup.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
