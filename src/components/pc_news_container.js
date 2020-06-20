import React from 'react'
import { Row, Col, Tabs, Carousel } from 'antd'
import imgA from '../static/a.jpg'
import imgC from '../static/c.jpg'
import PCNewsBlock from './pc_news_block'
import PCWeatherBlock from './pc_weather_block'
import PCNewsImageBlock from './pc_news_image_block'

const { TabPane } = Tabs

const PCNewContainer = () => {
  return (
    <>
      <Row>
        <Col span={3}></Col>
        <Col span={18}>
          <div className="rightContainer">
            <div className="carousel">
              <Carousel autoplay>
                <div>
                  <img src={imgA} alt="花" />
                </div>
                <div>
                  <img src={imgC} alt="花" />
                </div>
              </Carousel>
              <PCWeatherBlock />
            </div>
          </div>
          <Tabs className="tabs_news">
            <TabPane tab="头条" key="1">
              <PCNewsBlock type="top" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="国际" key="2">
              <PCNewsBlock type="guoji" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="国内" key="3">
              <PCNewsBlock type="guonei" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="社会" key="4">
              <PCNewsBlock type="shehui" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="娱乐" key="5">
              <PCNewsBlock type="yule" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="体育" key="6">
              <PCNewsBlock type="tiyu" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="军事" key="7">
              <PCNewsBlock type="junshi" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="科技" key="8">
              <PCNewsBlock type="keji" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="财经" key="9">
              <PCNewsBlock type="caijing" width="100%" bordered="false" />
            </TabPane>
            <TabPane tab="时尚" key="10">
              <PCNewsBlock type="shishang" width="100%" bordered="false" />
            </TabPane>
          </Tabs>
          <div>
            <PCNewsImageBlock rows={6} channel={'头条'} propWidth="100%" propsImageWidth="140px" />
            <PCNewsImageBlock rows={6} channel={'体育'} propWidth="100%" propsImageWidth="140px" />
            <PCNewsImageBlock rows={6} channel={'NBA'} propWidth="100%" propsImageWidth="140px" />
            <PCNewsImageBlock rows={6} channel={'娱乐'} propWidth="100%" propsImageWidth="140px" />
          </div>
        </Col>
        <Col span={3}>
        </Col>
      </Row>
    </>
  )
}

export default PCNewContainer