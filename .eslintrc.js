module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',// ++ vue代码相关配置
  extends: [
    'plugin:plugin:vue/vue3-recommended',// --> vue3代码相关配置
    'standard', 
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue', 
    '@typescript-eslint',
    '@vue/prettier'// ++ vue代码相关配置
  ],
  rules: {
    'vue/multi-word-component-names': 0,// ++ 关闭.vue文件必须是大驼峰命名的校验
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
  },
}