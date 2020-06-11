import React from 'react'
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'
import './styles/App.css'
import MediaQuery from 'react-responsive'

const App = () => {
  return (
    <div>
      <MediaQuery minDeviceWidth={1224}>
        <PCIndex />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <MobileIndex />
      </MediaQuery>
    </div>
  )
}

export default App