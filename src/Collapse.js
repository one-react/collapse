import React from 'react'
import clx from 'classnames'

class Collapse extends React.Component {
  state = {
    isOpen: this.props.isOpen
  }
  render () {
    const { children, overlay } = this.props
    const collapseClass = clx({
      'or-collapse': true,
      active: this.state.isOpen
    })
    const overlayClass = clx({
      overlay: true
    })

    return (
      <div className={collapseClass}>
        {
          React.Children.map(children, (element) => {
            return React.cloneElement(element, {onClick: this.handleClick})
          })
        }
        <div className={overlayClass}>{overlay}</div>
      </div>
    )
  }

  handleClick = (e) => {
    this.setState({
      isOpen: !this.state.isOpen
    }, () => {
      const {onChange} = this.props
      if (onChange) {
        this.props.onChange(!this.state.isOpen)
      }
    })
  }
}

export default Collapse
