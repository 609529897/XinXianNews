import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'
import PCNewsDetails from './components/pc_news_details'
import { createBrowserHistory } from 'history'
import './styles/App.css'
import MediaQuery from 'react-responsive'
const history = createBrowserHistory()

const App = () => {
  return (
    <div>
      <MediaQuery minDeviceWidth={1224}>
        <BrowserRouter history={history}>
          <Switch>
            <Route exact path="/" component={PCIndex} />
            <Route path="/datails/:uniquekey" component={PCNewsDetails} />
          </Switch>
        </BrowserRouter>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <MobileIndex />
      </MediaQuery>
    </div>
  )
}

export default App