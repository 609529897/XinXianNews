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
        <Col span={2}></Col>
        <Col span={20}>
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
          </Tabs>
          <div>
            <PCNewsImageBlock rows={6} channel={'头条'} propWidth="100%" propsImageWidth="112px" />
            <PCNewsImageBlock rows={6} channel={'体育'} propWidth="100%" propsImageWidth="112px" />
            <PCNewsImageBlock rows={6} channel={'NBA'} propWidth="100%" propsImageWidth="112px" />
            <PCNewsImageBlock rows={6} channel={'娱乐'} propWidth="100%" propsImageWidth="112px" />
          </div>
        </Col>
        <Col span={2}>
        </Col>
      </Row>
    </>
  )
}

export default PCNewContainer