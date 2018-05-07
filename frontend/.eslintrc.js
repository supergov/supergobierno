module.exports = {
  plugins: [
    "prettier",
    "react",
    "unicorn",
    "no-use-extend-native",
    "promise",
    "import",
    "node"
  ],
  extends: [
    "xo",

    // xo-react has priority over react rules, but some useful rules of react
    // are still being used because xo ignores them
    "plugin:react/recommended",
    "xo-react",

    "plugin:unicorn/recommended",

    "prettier",
    "prettier/react"
  ],
  parser: "babel-eslint",
  globals: {
    window: false,
    document: false
  },
  rules: {
    "prettier/prettier": "error",

    /**
     * These rules are rarely useful
     */
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/jsx-handler-names": "off",
    "react/destructuring-assignment": "off",
    "react/display-name": "error",

    /**
     * Differences with recommended rules of unicorn
     */
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-fn-reference-in-iterator": "off",

    /**
     * Differences with recommended rules of XO
     */
    "capitalized-comments": "off",
    "lines-between-class-members": "off",
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    // Prettier is taking care of this
    "no-return-assign": ["off", "except-parens"],

    /**
     * Rules added by XO that are not shared with its eslint package
     * https://github.com/sindresorhus/xo/blob/master/config/plugins.js
     */
    "no-use-extend-native/no-use-extend-native": "error",
    "promise/param-names": "error",
    "promise/no-return-wrap": ["error", { allowReject: true }],
    "promise/no-return-in-finally": "error",
    "import/default": "error",
    "import/export": "error",
    "import/extensions": [
      "error",
      {
        js: "never",
        json: "never",
        jsx: "never"
      }
    ],
    "import/first": "error",
    "import/named": "error",
    "import/namespace": ["error", { allowComputed: true }],
    "import/no-absolute-path": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/newline-after-import": "error",
    "import/no-amd": "error",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-as-default": "error",
    "import/no-unresolved": ["error", { commonjs: true }],
    "import/order": "error",
    // Annoying
    // "import/prefer-default-export": "error",
    "import/no-unassigned-import": "error",
    "node/no-unpublished-bin": "error",
    "node/no-unpublished-import": "error",
    "node/no-unpublished-require": "error",
    "node/process-exit-as-throw": "error",
    "node/no-deprecated-api": "error",
    "node/exports-style": ["error", "module.exports"]
  }
};
