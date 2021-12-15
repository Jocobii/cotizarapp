module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    parser: "babel-eslint",
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
      'indent': ['error', 4, { "SwitchCase": 1 } ],
      "react/jsx-indent": ["error", 4],
      "react/jsx-indent-props": ["error", 4],
      "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
      'global-require': 'off',
      'import/no-unresolved': 'off',
      'camelcase': 'off',
      'linebreak-style': 0,
      'import/prefer-default-export': 0,
    }
  };
  