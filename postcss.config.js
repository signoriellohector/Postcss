module.exports = {
    plugins: [
        // require('autoprefixer')({
        //     grid:true
        // }),
        require('postcss-cssnext')({
            feature:{
                autoprefixer:{
                    grid:true,
                    flexbox:false,
                }
            }
        })
    ]
}