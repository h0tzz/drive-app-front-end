module.exports = {
  rules: {
    // require onClick be accompanied by onKeyUp/onKeyDown/onKeyPress
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/click-events-have-key-events': 'error',

    // Enforce that DOM elements without semantic behavior not have interaction handlers
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    // ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
