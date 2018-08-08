import React, { PureComponent } from 'react'
import styles from './index.scss' // eslint-disable-line

export default class Loading extends PureComponent {
  render () {
    return (
      <div styleName="loading">
        Loading...
      </div>
    )
  }
}
