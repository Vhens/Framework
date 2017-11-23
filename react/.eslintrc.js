// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
    node: true
  },
  globals: {
    expect: true,
    sinon: true
  },
  extends: 'airbnb',
  // extends: [
  //     // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  //     'standard',
  //     // https://github.com/feross/eslint-config-standard-react
  //     'standard-react',
  // ],
  // https://github.com/yannickcr/eslint-plugin-react
  plugins: [
    'react',
    'babel',
    'promise',
    'jsx-a11y'
  ],
  // add your custom rules here
  'rules': {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'jsx': 'never'
    }],
    "no-empty": 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-console': 0,
    'comma-dangle': 0,
    'jsx-a11y/href-no-hash': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'max-len': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'accessor-pairs': 2,
    "eqeqeq": 2,
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "constructor-super": 2,
      "new-cap": [2, {
      "newIsCap": true,
      "capIsNew": false
    }],
    "no-unused-vars": 0,
    "no-array-constructor": 2,
    'space-before-function-paren': 0,
    'func-names': 0,
    'spaced-comment': 0,
    'no-param-reassign': 0,
    "semi": [2, "always"],
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/href-no-hash": 2,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "react/jsx-indent": [
      2,
      "tab"
    ],
    "react/jsx-indent-props": [
      2,
      "tab"
    ],
    "react/prefer-stateless-function": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
