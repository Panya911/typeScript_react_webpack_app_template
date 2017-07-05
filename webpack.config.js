
tsLoader = {
    loader: 'ts-loader'
}

babelLoader = {
    loader: 'babel-loader',
    options: {
        presets: ['react', 'es2017']
    }
}


module.exports = {
    context: __dirname,
    entry: "./src/index.tsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    babelLoader,
                    tsLoader
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: babelLoader
            }
        ]
    }
};