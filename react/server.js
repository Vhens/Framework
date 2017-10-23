const webpack= require('webpack');
const WebpackServer= require('webpack-dev-server');
const config = require('./webpack.config.js');
new WebpackServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true,
    stats: {
        colors: true
    }
}).listen(8088, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:8088');
});
