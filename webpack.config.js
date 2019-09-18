module.exports = {
    // entry: __dirname + 'app/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                enforce: 'pre',
                use:{
                    loader: 'eslint-loader',
                },
            },
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    }
};