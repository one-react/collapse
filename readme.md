# One React Component: collapse

<p align="center"><img width="150" src="https://cdn.jsdelivr.net/gh/one-react/assets/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/collapse.svg)](https://travis-ci.org/one-react/collapse)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/collapse.svg)](https://circleci.com/gh/one-react/collapse)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/collapse.svg)](https://codecov.io/gh/one-react/collapse) 
[![Version](https://img.shields.io/npm/v/or-collapse.svg)](https://www.npmjs.com/package/or-collapse)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/collapse.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-collapse

// with yarn
yarn add or-collapse
```

## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

```jsx
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

class Example extends React.Component {
  state = {
    isOpen1: true,
    isOpen2: false
  }
  render() {
    return (
      <div className="wrapper">
        <Collapse
          className="hello"
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

```

## API

```ts
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
```

## Customize Theme
**Customize in webpack**

The following variables in or-collapse can be overridden:

```scss
$or-collapse-title-color: $or-gray7 !default;

```

Alternatively, you can override variables from [or-theme](https://github.com/one-react/theme/blob/master/src/variables.scss) to keep all or-components in a unified theme style.

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/collapse)

## License

MIT &copy; foryuki
