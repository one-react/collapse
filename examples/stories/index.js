import React from 'react'
import { storiesOf } from '@storybook/react'

import './example.scss'

import {Collapse} from '../../src'
import Example from './example'

storiesOf('Collapse', module)
  .add('example', () => (
    <Example />
  ))
