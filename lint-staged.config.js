module.exports = {
  '*.{ts,tsx}': [
    'eslint "{src,apps,libs,test}/**/*.ts" --fix',
    'prettier --write "src/**/*.ts" "test/**/*.ts"',
  ],
  '*.{md,mdx,yaml,yml}': ['prettier --write'],
};
