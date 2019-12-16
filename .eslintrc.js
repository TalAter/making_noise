module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'p5js'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    setup: 'writable',
    draw: 'writable',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {},
};
