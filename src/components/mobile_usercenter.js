import React from 'react';
import { Tabs, Row, Col } from 'antd'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
const { TabPane } = Tabs

const MobileserCenter = () => {
  return (
    <>
      <MobileHeader />
      <Row>
        <Col span={24}>
          <Tabs>
            <TabPane tab="收藏列表" key="1">

            </TabPane>
            <TabPane tab="评论列表" key="2">

            </TabPane>
            <TabPane tab="头像设置" key="3">

            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <MobileFooter />
    </>
  )
}

export default MobileserCenter