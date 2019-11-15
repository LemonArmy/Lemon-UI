module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@vue/babel-preset-jsx',
      '@babel/preset-typescript'
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-syntax-dynamic-import'],
        ['@babel/plugin-proposal-optional-chaining']
    ]
  }
  