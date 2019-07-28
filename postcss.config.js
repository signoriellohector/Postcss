module.exports = {
    plugins: [
        // require('postcss-custom-media'),
        require('postcss-apply'),
        require('postcss-preset-env')({
            stage: 0,
            autoprefixer:{
                grid:true,
                flexbox: false,
            },
            preserve:false,
            calc: false,
        })
    ]
}