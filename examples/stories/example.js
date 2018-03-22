import React from 'react'

import { Collapse } from '../../src'

const menu1 = (
  <div className='menu-wrapper'>
    <div className='item'>Dresses</div>
    <div className='item'>Tops & Tees</div>
    <div className='item'>Sweaters</div>
    <div className='item'>Tops and shirts</div>
    <div className='item'>Jeans</div>
  </div>
)
const menu2 = (
  <div className='menu-wrapper'>
    <div className='item'>Cotton and jersey</div>
    <div className='item'>Leather</div>
    <div className='item'>Silk</div>
    <div className='item'>Tops and shirts</div>
    <div className='item'>Others</div>
  </div>
)
class Example extends React.Component {
  state = {
    isOpen: false
  }
  render () {
    return (
      <div className='wrapper'>
        <Collapse maskClose overlay={menu1} isOpen={!this.state.isOpen} onChange={this.handleChange}>
          <div className='or-collapse-name'>
            <div>Category</div>
            <div className='collapse-icon'/>
          </div>
        </Collapse>
        <br />
        <Collapse overlay={menu2} isOpen={this.state.isOpen}>
          <div className='or-collapse-name'>
            <div>Material</div>
            <div className='collapse-icon'/>
          </div>
        </Collapse>
      </div>
    )
  }

  handleChange = (isOpen) => {
    console.log('onchange', isOpen)
    this.setState({
      isOpen: isOpen
    })
  }
}

export default Example
