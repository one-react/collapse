import { mount } from 'enzyme'
import React, { PureComponent } from 'react'

import Collapse from '../src'

const mockCallBack = jest.fn()
let wrapper
const menu = (
  <div className="menu-wrapper">
    <div className="item">Dresses</div>
    <div className="item">Tops & Tees</div>
    <div className="item">Sweaters</div>
    <div className="item">Tops and shirts</div>
    <div className="item">Jeans</div>
  </div>
)
describe('src/index', () => {
  describe('default open', () => {
    beforeEach(() => {
      wrapper = mount(<CollapseWrapper defaultOpen={true} />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('should render properly: open', () => {
      expect(wrapper.find('.or-collapse').length).toBe(1)
      expect(wrapper.find('.or-collapse').hasClass('or-collapse-open')).toBe(
        true
      )
    })

    it('simulates click events', () => {
      expect(wrapper.find('.or-collapse').hasClass('or-collapse-open')).toBe(
        true
      )
      wrapper.find('.or-collapse-name').simulate('click')
      expect(wrapper.find('.or-collapse').hasClass('or-collapse-open')).toBe(
        false
      )
    })
  })
})

interface Props {
  defaultOpen: boolean
}

class CollapseWrapper extends PureComponent<Props, {}> {
  state = {
    isOpen: this.props.defaultOpen
  }
  render() {
    return (
      <Collapse
        overlay={menu}
        isOpen={this.state.isOpen}
        onChange={this.handleChange}
      >
        <div className="or-collapse-name">
          <div>CLOTHING</div>
          <div className="collapse-icon" />
        </div>
      </Collapse>
    )
  }

  handleChange = value => {
    this.setState({
      isOpen: value
    })
  }
}
