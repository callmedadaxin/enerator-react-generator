import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import UserComp from './components'

@connect(state => state.User)
export default class User extends PureComponent {
  static propTypes = {

  }

  render () {
    return (
      <UserComp {...this.props}/>
    )
  }
}
