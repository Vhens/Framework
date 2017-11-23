// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
     "ecmaVersion": 6,
     "sourceType": "module",
     "ecmaFeatures": {
       "jsx": true
     }
  },
  "globals": {
    "window": true,
    "document": true
  },
  "rules": {
    "object-shorthand": ["error", "consistent"],
    "arrow-parens": 0,
    "class-methods-use-this": 0,
    "compat/compat": 2,
    "comma-dangle": 0,
    "comma-style": ["error", "last"],
    "consistent-return": 2,
    "func-names": 2,
    "generator-star-spacing": [0],
    "import/no-extraneous-dependencies": ["off"],
    "import/extensions": 0,
    "import/no-unresolved": 2,
    "import/newline-after-import": 0,
    "new-cap": 0,
    "no-implicit-coercion": "error",
    "no-mixed-operators": 0,
    "no-plusplus": 0,
    "no-use-before-define": 0,
    "no-nested-ternary": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 0,
    "semi": ["error", "always"],
    "promise/param-names": 2,
    "promise/always-return": 2,
    "promise/catch-or-return": 2,
    "promise/no-native": 0,
    "react/display-name": 1,
    "react/jsx-boolean-value": 1,
    "react/jsx-quotes": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 1,
    "react/no-multi-comp": 1,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-unknown-property": 1,
    "react/prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 0,
    "react/jsx-curly-spacing": 0,
    "react/jsx-equals-spacing": 0
  },
  "plugins": [
    "compat",
    "import",
    "promise"
  ]
}
