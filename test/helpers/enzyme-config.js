import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IntlPolyfill from 'intl'

global.Intl = IntlPolyfill

Enzyme.configure({ adapter: new Adapter() })
