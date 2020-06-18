import React from 'react';
import { Tabs, Row, Col, Upload } from 'antd'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
const { TabPane } = Tabs

const PCUserCenter = () => {
  return (
    <>
      <PCHeader />
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Tabs>
            <TabPane tab="收藏列表" key="1">

            </TabPane>
            <TabPane tab="评论列表" key="2">

            </TabPane>
            <TabPane tab="头像设置" key="3">
              <div className="clearfix">
                <Upload>
1       1 1
                </Upload>
              </div>
            </TabPane>
          </Tabs>
        </Col>
        <Col span={2}></Col>
      </Row>
      <PCFooter />
    </>
  )
}

export default PCUserCenter