const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./assets/src/ts/script.ts'],
    styles: './assets/src/scss/style.scss'
  },
  
  output: {
    path: path.resolve(__dirname, 'assets/dist'), 
    filename: 'js/[name].bundle.js' 
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/, // Add rule for TypeScript files
        exclude: /node_modules/,
        use: 'ts-loader' // Use ts-loader to handle TypeScript
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader', 
      },
      {
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader,  
          'css-loader', 
          {
            loader: 'postcss-loader', 
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer') 
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true, 
              },
            },
          }, 
        ]
      }
    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css' 
    })
  ],
};
