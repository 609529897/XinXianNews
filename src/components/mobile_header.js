import React, { Component } from 'react'
import logo from '../static/logo.png'
import '../styles/mobile.css'

export default class MobileHeader extends Component {
  render() {
    return (
      <div id="mobileheader">
      <header>
        <img src={logo} alt="logo" />
        <span>新鲜新闻</span>
      </header> 
      </div>
    )
  }
}