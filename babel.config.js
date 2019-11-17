module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 4
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/transform-runtime',
    '@babel/plugin-transform-shorthand-properties',
    '@babel/plugin-proposal-export-default-from'
  ],
  env: {
    production: {
      plugins: [
        [
          'transform-react-remove-prop-types',
          {
            mode: 'wrap'
          }
        ]
      ]
    }
  }
}
