import React, { useState } from 'react'
import { Tabs, Row, Col, Upload, Button, Modal, message, Card } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import MobileHeader from './mobile_header'
// import MobileFooter from './mobile_footer'
import profile from '../static/d.jpg'
const { TabPane } = Tabs


const MobileUserCenter = () => {
  const [usercollection, setUsercollection] = useState([])
  const [userComment, setUserComment] = useState([])

  const usercollectionList = usercollection.length
    ? usercollection.map((uc, index) => (
      <Card key={uc.uniquekey} title={uc.uniquekey} extra={<a href={`/detail/${uc.uniquekey}`}>查看</a>}>
        <p>{uc.title}</p>
      </Card>
    ))
    : "收藏列表为空，请多多收藏文章吧！"
  const userCommentList = userComment.length
    ? userComment.map((comment, index) => (
      <Card key={comment.uniquekey} title={`于${comment.datetime}评论了${comment.uniquekey}文章`} extra={<a href={`/detail/${comment.uniquekey}`}>查看</a>}>
        <p>{comment.Comments}</p>
      </Card>
    ))
    : "评论列表为空，请多多评论文章吧！"
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
              <div className="comment">
                <Row>
                  <Col span={24}>
                    {userCommentList}
                  </Col>
                </Row>
              </div>
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