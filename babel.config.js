module.exports = (api) => {
  const isEsm = api.env('esm');

  return {
    presets: [
      [
        '@babel/preset-env',
        isEsm ? { targets: { esmodules: true }, modules: false } : { targets: { node: 18 }, modules: 'commonjs' },
      ],
      ['@babel/preset-typescript', { rewriteImportExtensions: !api.env('test') }],
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  };
};
