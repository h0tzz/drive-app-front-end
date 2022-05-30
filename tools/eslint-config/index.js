module.exports = {
  extends: [
    'eslint-config-airbnb-typescript',
    'plugin:import/typescript',
    './rules/react',
    './rules/react-hooks',
    './rules/react-a11y',
    './rules/import',
    './rules/common',
    'prettier',
  ],

  plugins: ['prettier', 'react', 'import', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    project: ['tsconfig.json'],
    createDefaultProgram: true,
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
    react: {
      version: 'detect',
    },
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
      },
    ],
  },
};
