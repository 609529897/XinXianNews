import React from 'react'
import { Tabs, Carousel } from 'antd'
import MobileList from './mobile_list'
import imgA from '../static/a.jpg'
import imgC from '../static/c.jpg'
const TabPane = Tabs.TabPane

const MobileTabs = () => {
  return (
    <Tabs>
      <TabPane tab="头条" key="1">
      <Carousel className="mobile-carousel"  autoplay>
        <div>
          <img src={imgA} alt="summer" />
        </div>
        <div>
          <img src={imgC} alt="summer" />
        </div>
      </Carousel>
        <MobileList channel="头条" rows={8} />
      </TabPane>
      <TabPane tab="体育" key="2">
        <MobileList channel="体育" rows={8} />
      </TabPane>
      <TabPane tab="NBA" key="3">
        <MobileList channel="NBA" rows={8} />
      </TabPane>
      <TabPane tab="教育" key="4">
        <MobileList channel="教育" rows={8} />
      </TabPane>
      <TabPane tab="娱乐" key="5">
        <MobileList channel="娱乐" rows={8} />
      </TabPane>
      <TabPane tab="财经" key="6">
        <MobileList channel="财经" rows={8} />
      </TabPane>
      <TabPane tab="科技" key="7">
        <MobileList channel="科技" rows={8} />
      </TabPane>
      <TabPane tab="军事" key="8">
        <MobileList type="军事" rows={8} />
      </TabPane>
    </Tabs>
  )
}

export default MobileTabs