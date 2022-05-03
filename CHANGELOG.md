## Next

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
