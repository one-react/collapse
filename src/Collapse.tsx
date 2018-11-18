import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * customer className for modal
   */
  className?: string
  /**
   * whether the ovelay of collapse should be shown or not
   **/
  isOpen: boolean

  /**
   * children of the collapse
   */
  children: React.ReactNode

  /**
   *  shows when the collapse is open
   */
  overlay: React.ReactNode

  /**
   * callback triggered by click
   **/
  onChange: (isOpen) => void
}
export class Collapse extends PureComponent<Props, {}> {
  render() {
    const { children, overlay, isOpen, className } = this.props
    const collapseClass = clx(
      {
        'or-collapse-open': isOpen
      },
      'or-collapse',
      className
    )
    const overlayClass = clx('or-overlay')

    return (
      <div className={collapseClass}>
        {React.Children.map(children, (element: any) => {
          return React.cloneElement(element, { onClick: this.handleClick })
        })}
        <div className={overlayClass}>{overlay}</div>
      </div>
    )
  }

  handleClick = () => {
    const { onChange, isOpen } = this.props
    /* istanbul ignore next */
    if (typeof onChange === 'function') {
      onChange(!isOpen)
    }
  }
}
