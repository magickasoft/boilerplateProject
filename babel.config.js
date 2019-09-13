module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-modules-commonjs',
    [
      'module-resolver',
      {
        extensions: ['.js', '.ios.js', '.android.js'],
        root: ['./'],
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          config: './src/config',
          containers: './src/containers',
          locales: './src/locales',
          modules: './src/modules',
          navigators: './src/navigators',
          screens: './src/screens',
          store: './src/store',
          utils: './src/utils',
        },
      },
    ],
  ],
  retainLines: true,
};
