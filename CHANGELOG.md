## v3.2.0

- Added support for `react-intl@^11.0.0` and `react-intl@^12.0.0`
- Fixed the CommonJS build (`lib`), which has shipped ES module syntax since v3.1.0
- Fixed native Node ESM imports of the `esm` build: import paths now carry `.js` extensions and `esm/` is marked as `"type": "module"`
- Fixed the `sideEffects` field name so bundlers can tree-shake the package
- Fixed `prepublish` not running on `npm publish` by renaming it to `prepublishOnly`
- Updated `devDependencies` (`react-intl` v12, `del-cli` v8)
- Removed unused `devDependencies`: `@babel/register`, `jsdom`, `@babel/plugin-proposal-export-default-from`, `@babel/plugin-transform-shorthand-properties`, `cross-env` and `npm-run-all`
- Updated the examples to `react-intl@^12.0.0` and removed their unused `husky` dependency
- Removed the examples' `prepare` script, which deleted the root `node_modules` through the `file:../..` symlink; Vite's `dedupe` already covers it
- Denied dependency install scripts via `allowScripts`
- Added an `overrides` entry pointing jest's `babel-preset-current-node-syntax` at Babel 8, silencing `ERESOLVE` peer warnings
- Added `mise.toml` pinning Node and npm
- Kept `typescript` on v6, as `typescript-eslint` still does not support v7

## v3.1.1

- Updated `devDependencies`
- Updated the examples to `react-intl@^10.0.0`, Vite v8 and `@vitejs/plugin-react` v6
- Renamed the examples' Vite configs to `.mjs` for the Vite v8 config loader
- Kept `typescript` on v6, as `typescript-eslint` does not support v7 yet

## v3.1.0

- Added support for `react-intl@^9.0.0` and `react-intl@^10.0.0`
- Migrated to TypeScript v6 and Babel v8
- Removed the now-redundant `minimatch` override
- Updated `devDependencies`

## v3.0.1

- Updated examples to a more modern setup
- Added an esm build for the library
- Targeting node >= 18, as react 19 requires that anyway
- Added prettier
- Migrated to typescript for better types and decomissioned PropTypes as they are an outdated concept
- Updated README to match the new setup at `@nate-summercook/react-intl-redux`

## v3.0.0

- Added support for `react@^19.0.0`, `react-intl@^8.0.0` and `react-redux@^9.0.0`
- Updated all `dependencies`, `devDependencies` and `peerDependencies`
- Migrated tests to use `@reduxjs/toolkit`
- released under `@nate-summercook/react-intl-redux`

## v2.3.0

- Added support for `react-intl@^4.0.0` and `react-intl@^5.0.0`
- Updated `peerDependencies`

## v2.1.1

- Include `react-redux@^7.0.0"` in `peerDependencies`

## v2.1.0

- Include `react-redux@^6.0.0"` in `peerDependencies`

## v2.0.2

- Rebuild lib

## v2.0.1

- Use .babelrc, close [#50](https://github.com/ratson/react-intl-redux/issues/50)

## v2.0.0

##### Breaking Changes

- Use `locale` as `key` for `IntlProvider` by default.

## v1.0.0

##### Enhancements

- Set `sideEffects` to `false` for webpack

## v0.7.0

##### Breaking Changes

- Remove deprecated `update` action, `updateIntl` should always be used
- Remove `key` hack, see [#7](https://github.com/ratson/react-intl-redux/issues/7)

##### Documentation

- Add [multiple-languages](https://github.com/ratson/react-intl-redux/tree/master/examples/multiple-languages) example

## v0.6.0

##### Breaking Changes

- Add `formats` to reducer. ([@mewdriller](https://github.com/mewdriller) in [#35](https://github.com/ratson/react-intl-redux/pull/35))

##### Internal

- Change to use `ava` for testing
- Update example to use `create-react-app`

## v0.5.0

- React 15.5 compatibility

## v0.4.1

- Remove usage of `storeShape`

## v0.4.0

##### Breaking Changes

- Change `react-intl`, `react-redux`, `redux` to be `peerDependencies`

## v0.3.0

##### Breaking Changes

- Update `react-redux` from `^4.4.6` to `^5.0.1`
- Remove unnecessary React `propTypes` from the production build

##### Enhancements

- Export `initialState`

## v0.2.0

##### Breaking Changes

- Update `redux` from `^3.5.2` to `^3.6.0`

##### Enhancements

- `IntlProvider` accept optional `intlSelector` function

## v0.1.1

##### Deprecations

- Warn for usage of `update`

## v0.1.0

##### Breaking Changes

- Do not accept `props` for `Provider`

##### General

- Export `IntlProvider`

##### Deprecations

- Deprecate `update` in favor of `updateIntl`
