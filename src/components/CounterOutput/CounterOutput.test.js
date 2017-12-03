import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CounterOutput from './CounterOutput'

configure({ adapter: new Adapter() })

describe('<CounterOutput />', () => {
  let warpper
  beforeEach(() => {
    warpper = shallow(<CounterOutput />)
  })

  it('should current counter is 3 when props is 3', () => {
    warpper.setProps({ value: 3 })
    expect(warpper.text()).toEqual('Current Counter: 3')
  })

  it('should current counter is null when no props', () => {
    expect(warpper.text()).toEqual('Current Counter: ')
  })
})
