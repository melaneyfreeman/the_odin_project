var path = require("path");

//directory where i want to copy all my transpiled/prepared/bundled files
//the directory that will serve my app
//goes into dist folder, which will be created automatically
var DIST_DIR = path.resolve(__dirname, "dist");
//where the src files come from
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    //while file to start transpiling from
    entry: SRC_DIR + "/app/index.js",
    //tells webpack where to put everything
    output: {
        path: DIST_DIR + "/app",
        //everything will be bundled
        filename: "bundle.js",
        //important for webpack dev server
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                //babel takes some presets to work correctly
                //so we are setting them here:
                query: {
                    //can find them in the package.json file
                    //under "devdependences, last part of the name"
                    presets: ["react", "webpack-cli", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;