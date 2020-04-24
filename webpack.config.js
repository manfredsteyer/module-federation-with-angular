const AotPlugin = require("@ngtools/webpack").AngularCompilerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ContainerReferencePlugin = require("webpack/lib/container/ContainerReferencePlugin");
const ContainerPlugin = require("webpack/lib/container/ContainerPlugin");

const shellConfig = {
  entry: ["./projects/shell/src/polyfills.ts", "./projects/shell/src/main.ts"],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/shell"),
    port: 5000
  },  
  module: {
    rules: [
      { test: /\.ts$/, loader: "@ngtools/webpack" }
    ]
  },
  plugins: [
    new ContainerReferencePlugin({
      remoteType: 'var',
      remotes: {
        mfe1: "mfe1"
      },
      overrides: ["@angular/core", "@angular/common"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/shell/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/shell/src/app/app.module#AppModule"
      )
    }),
    new HtmlWebpackPlugin({
      template: "./projects/shell/src/index.html"
    })
  ],
  output: {
    filename: "[id].[name].js",
    path: __dirname + "/dist/shell",
    chunkFilename: "[id].[chunkhash].js"
  },
  mode: "none"
};

const mfe1Config = {
  entry: ["./projects/mfe1/src/polyfills.ts", "./projects/mfe1/src/main.ts"],
  resolve: {
    mainFields: ["browser", "module", "main"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/mfe1"),
    port: 3000
  },  
  module: {
    rules: [
      { test: /\.ts$/, loader: "@ngtools/webpack" }
    ]
  },
  plugins: [
    new ContainerPlugin({
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        Component: './projects/mfe1/src/app/app.component.ts'
      },
      library: { type: "var", name: "mfe1" },
      overridables: ["@angular/core", "@angular/common"]
    }),
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: "./projects/mfe1/tsconfig.app.json",
      directTemplateLoading: true,
      entryModule: path.resolve(
        __dirname,
        "./projects/mfe1/src/app/app.module#AppModule"
      )
    }),
    new HtmlWebpackPlugin({
      template: "./projects/mfe1/src/index.html"
    })
  ],
  output: {
    publicPath: "http://localhost:3000/",
    filename: "[name].js",
    path: __dirname + "/dist/mfe1",
    chunkFilename: "[id].[chunkhash].js"
  },
  mode: "none"
};

module.exports = [shellConfig, mfe1Config];
