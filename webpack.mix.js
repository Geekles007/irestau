const mix = require('laravel-mix');
require('laravel-mix-tailwind');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public')
  .sass('resources/assets/sass/app.scss', 'css')
  .react('resources/assets/ts/app.tsx', 'js')
  .copy('resources/assets/ts/assets/images', 'public/images')
  .copy('resources/assets/ts/assets/icons', 'public/icons')
  .options({ processCssUrls: false })
  .tailwind("./tailwind.config.js")
  .webpackConfig({
    output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
      alias: {
        '@': path.resolve('resources/assets/ts'),
      },
    },
  })
  .sourceMaps();
