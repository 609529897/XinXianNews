import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MediaQuery from 'react-responsive'
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'
import PCNewsDetails from './components/pc_news_details'
import MobileNewsDetails from './components/mobile_news_details'
import PCUserCenter from './components/pc_usercenter'
import MobileserCenter from './components/mobile_usercenter'
import PCDetails_1 from './components/pc_details_1'
import './styles/App.css'
const history = createBrowserHistory()

const App = () => {
  return (
    <div>
      <MediaQuery minDeviceWidth={1224}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={PCIndex} />
            <Route path="/datails/:aid" component={PCNewsDetails} />
            <Route path="/usercenter" component={PCUserCenter} />
            <Route path="/details_1/:title/:channel/:rows" component={PCDetails_1} />
          </Switch>
        </Router>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={MobileIndex} />
            <Route path="/datails/:aid" component={MobileNewsDetails} />
            <Route path="/usercenter" component={MobileserCenter} />
          </Switch>
        </Router>
      </MediaQuery>
    </div>
  )
}

export default App