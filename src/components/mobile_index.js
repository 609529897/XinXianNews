import React, { Component, Fragment } from 'react'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'

export default class MobileIndex extends Component {
  render() {
    return (
      <Fragment>
        <MobileHeader />
        <MobileFooter />
      </Fragment>
    )
  }
}