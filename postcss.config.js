module.exports = {
    plugins: [
        require('postcss-import')({
            plugins:[
                require('stylelint'),
            ]
        }),
        require('postcss-apply'),
        require('postcss-color-hwb'),
        require('postcss-color-function'),
        require('postcss-color-mod-function'),
        require('postcss-font-magician')({
            variants:{
                'Lato':{
                    '300': [],
                    '400': [],
                }
            }
        }),
        // require('postcss-custom-selectors'),
        require('postcss-preset-env')({
            stage: 0,
            autoprefixer:{
                grid:true,
                flexbox: false,
            },
            preserve:false,
            calc: false,
        }),
        require('css-mqpacker'),
        require('cssnano'),
    ]
}