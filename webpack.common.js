const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: [".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: require.resolve("ts-loader"),
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.png|svg|jpg|gif$/,
                exclude: /node_modules/,
                use: ["file-loader"],
            },
        ],
    },
}