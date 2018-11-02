import React from 'react'

import Collapse from 'or-collapse'

const menu1 = (
  <div className="menu-wrapper">
    <div className="item">Dresses</div>
    <div className="item">Tops & Tees</div>
    <div className="item">Sweaters</div>
    <div className="item">Tops and shirts</div>
    <div className="item">Jeans</div>
  </div>
)
const menu2 = (
  <div className="menu-wrapper">
    <div className="item">Flats</div>
    <div className="item">Slippers</div>
    <div className="item">Heels</div>
    <div className="item">Boots</div>
    <div className="item">Sneakers</div>
  </div>
)
const menu3 = (
  <div className="menu-wrapper">
    <div className="item">New Arrivals</div>
    <div className="item">Totes</div>
    <div className="item">Satchels</div>
    <div className="item">Mini Bags</div>
    <div className="item">Backpacks</div>
  </div>
)
class Example extends React.Component {
  state = {
    isOpen1: true,
    isOpen2: false,
    isOpen3: false
  }
  render() {
    return (
      <div className="wrapper">
        <Collapse
          overlay={menu1}
          isOpen={this.state.isOpen1}
          onChange={this.handleChange('isOpen1')}
        >
          <div className="or-collapse-name">
            <div>CLOTHING</div>
            <div className="collapse-icon" />
          </div>
        </Collapse>
        <br />
        <Collapse
          overlay={menu2}
          isOpen={this.state.isOpen2}
          onChange={this.handleChange('isOpen2')}
        >
          <div className="or-collapse-name">
            <div>SHOES</div>
            <div className="collapse-icon" />
          </div>
        </Collapse>
        <br />
        <Collapse
          overlay={menu3}
          isOpen={this.state.isOpen3}
          onChange={this.handleChange('isOpen3')}
        >
          <div className="or-collapse-name">
            <div>HANDBAGS</div>
            <div className="collapse-icon" />
          </div>
        </Collapse>
      </div>
    )
  }

  handleChange = key => {
    return isOpen => {
      this.setState({
        [`${key}`]: isOpen
      })
    }
  }
}

export default Example
