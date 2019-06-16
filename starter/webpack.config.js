const path = require('path');
const path_public = path.resolve(__dirname,'public')
module.exports = {
    entry: ['@babel/polyfill','./src/main.js'],    
    output: {
        path: path_public,
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path_public,
    },
    module: {
        rules: [
            {
                test: /\.js$/,   // Regular expression
                exclude: [/node_modules/,/src/],
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};