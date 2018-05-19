import Path from 'path'
import test from 'ava'
import execa from 'execa'

import { IntlProvider, intlReducer, updateIntl } from '..'

test.before(() =>
  execa('npm', ['run', 'build'], {
    cwd: Path.dirname(require.resolve('../package.json'))
  })
)

test('exports', t => {
  t.truthy(IntlProvider)
  t.truthy(intlReducer)
  t.truthy(updateIntl)
})
