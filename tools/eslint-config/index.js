module.exports = {
  extends: [
    'airbnb',
    './rules/react',
    './rules/react-hooks',
    './rules/react-a11y',
    './rules/import',
    './rules/common',
    'prettier',
  ],

  plugins: ['prettier'],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },

  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },

  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules'],
          },
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
  },
  overrides: [
    {
      files: [ "**/*.ts?(x)" ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
      },
      plugins: [
        "@typescript-eslint"
      ],
      rules: {
        "@typescript-eslint/no-array-constructor": "warn",
        "no-array-constructor": "off"
      }
    }
  ],
}