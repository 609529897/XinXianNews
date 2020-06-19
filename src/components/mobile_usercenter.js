import React, { useState } from 'react'
import { Tabs, Row, Col, Upload, Button, Modal, message, Card } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import MobileHeader from './mobile_header'
// import MobileFooter from './mobile_footer'
import profile from '../static/d.jpg'
const { TabPane } = Tabs


const MobileUserCenter = () => {
  const [usercollection, setUsercollection] = useState([])
  const usercollectionList = usercollection.length
    ? usercollection.map((uc, index) => (
      <Card key={uc.uniquekey} title={uc.uniquekey} target="_blank" extra={<a href={`/detail/${uc.uniquekey}`}>查看</a>}>
        <p>{uc.title}</p>
      </Card>
    ))
    : "收藏列表为空，请多多收藏文章吧！"
  return (
    <>
      <MobileHeader />
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Tabs>
            <TabPane tab="收藏列表" key="1">
              <Row>
                <Col span={24}>
                  {usercollectionList}
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="评论列表" key="2">

            </TabPane>
          </Tabs>
        </Col>
        <Col span={2}></Col>
      </Row>
      {/* <MobileFooter /> */}
    </>
  )
}

export default MobileUserCenter