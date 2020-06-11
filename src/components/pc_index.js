import React, { Component, Fragment } from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'

export default class PCIndex extends Component {
  render() {
    return (
      <Fragment>
        <PCHeader />
        <PCFooter />
      </Fragment>
    )
  }
}