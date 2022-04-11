const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-useless-escape': 0,
    'no-empty': 0
  }
})
