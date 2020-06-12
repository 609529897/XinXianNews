import React from 'react'
import { Row, Col, Tabs, Carousel } from 'antd'
import imgA from '../static/a.jpg'
import imgC from '../static/c.jpg'
import PCNewsBlock from './pc_news_block'

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
                  <img src={imgA} alt="summer" />
                </div>
                <div>
                  <img src={imgC} alt="summer" />
                </div>
              </Carousel>
            </div>
          </div>
          <Tabs className="tabs_news">
            <TabPane tab="头条" key="1">
            <PCNewsBlock count={5} type="top" width="100%" bordered="false"/>
            </TabPane>
            <TabPane tab="国际" key="2">
            <PCNewsBlock count={5} type="guoji" width="100%" bordered="false"/>
            </TabPane>
          </Tabs>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  )
}

export default PCNewContainer