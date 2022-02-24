new webpack.NormalModuleReplacementPlugin( /node_modules\/antd\/lib\/style\/index\.less/, path.resolve(rootDir, 'src/myStylesReplacement.less') )


// const { getThemeVariables } = require('antd/dist/theme');

//   // webpack.config.js
// module.exports = {
//     rules: [{
//       test: /\.less$/,
//       use: [{
//         loader: 'style-loader',
//         options: {           
//             // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
//               modules: { auto: false },
//             }
//       }, {
//         loader: 'css-loader', // translates CSS into CommonJS
//         options: {           
//             // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
//               modules: { auto: false },
//             }
//       }, {
//         loader: 'less-loader', // compiles Less to CSS
//         options: {           
//             // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
//               modules: { auto: false },
//             }
//       }],
//       // ...other rules
//     }],
//     // ...other config
//   }