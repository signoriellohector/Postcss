module.exports = {
    plugins: [
        require('postcss-color-function'),
        require('postcss-color-mod-function'),
        require('postcss-color-hwb'),
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