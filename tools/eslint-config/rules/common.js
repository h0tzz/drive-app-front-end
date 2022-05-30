module.exports = {
  rules: {
    'default-param-last': ['warn'],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // require all requires be top-level
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',
  },
};
