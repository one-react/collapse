import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import Collapse from 'or-collapse'
import React from 'react'

import { previewCode } from './util'

import Example from './example'

import './styles.scss'

storiesOf('or-collapse', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [Collapse],
      propTablesExclude: [Example],
      styles: {
        jsxInfoContent: {
          borderTop: 'none',
          margin: 0
        }
      }
    })
  )
  .add('sample', () => <Example />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./example.tsx'))
    }
  })
