var path = require('path')

module.exports = {
    context: __dirname,
    entry: './ToDo.js',
    output: {
        path: path.join(__dirname, '/public/scripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
}