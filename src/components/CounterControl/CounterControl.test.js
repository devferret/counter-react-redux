import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CounterControl from './CounterControl'

configure({ adapter: new Adapter() })

describe('<CounterControl />', () => {
  let warpper
  beforeEach(() => {
    warpper = shallow(<CounterControl />)
  })

  it('should render label when props is Subtract 5', () => {
    warpper.setProps({ label: 'Subtract 5' })
    expect(warpper.text()).toEqual('Subtract 5')
  })
})
