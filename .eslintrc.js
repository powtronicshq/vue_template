//https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  //https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: ['standard', 'prettier'],
  // required to lint *.vue files
  plugins: [
    'vuefix', 'html'
  ],
  // add your custom rules here
  rules: {
    //'prettier/prettier': 'error',
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vuefix/vuefix': [2, {
      'auto': true
    }]
  }
}
