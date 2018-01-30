// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    mocha: true,
    node: true
  },
  globals: {
    expect: true,
    sinon: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'linebreak-style': 0,
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 0, // process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': 0,
    'jsx-a11y/href-no-hash': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'spaced-comment': 0,
    'no-restricted-syntax': 0,
    'object-curly-newline': 0,
  }
};

