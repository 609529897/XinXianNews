import React, { useState, useEffect } from 'react'
import { Tabs, Row, Col, Upload, Button, Modal, message, Card } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import PCHeader from './pc_header'
// import PCFooter from './pc_footer'
import profile from '../static/d.jpg'
import Axios from 'axios'
const { TabPane } = Tabs

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
}


const PCUserCenter = () => {
  const [usercollection, setUsercollection] = useState([])
  const [userComment, setUserComment] = useState([])
  useEffect(() => {
    // Axios.get()
  }, [])
  const usercollectionList = usercollection.length
    ? usercollection.map((uc, index) => (
      <Card key={uc.uniquekey} title={uc.uniquekey} target="_blank" extra={<a href={`/detail/${uc.uniquekey}`}>查看</a>}>
        <p>{uc.title}</p>
      </Card>
    ))
    : "收藏列表为空，请多多收藏文章吧！"
  const userCommentList = userComment.length
    ? userComment.map((comment, index) => (
      <Card key={comment.uniquekey} title={`于${comment.datetime}评论了文章`} target="_blank" extra={<a href={`/detail/${comment.uniquekey}`}>查看</a>}>
        <p>{comment.Comments}</p>
      </Card>
    ))
    : "评论列表为空，请多多评论文章吧！"
  return (
    <>
      <PCHeader />
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
          <Tabs>
            <TabPane tab="收藏列表" key="1">
              <div className="comment">
                <Row>
                  <Col span={24}>
                    {usercollectionList}
                  </Col>
                </Row>
              </div>
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
            <TabPane tab="头像设置" key="3">
              <div>尽情期待...</div>
              <hr />
              <div className="clearfix">
                <Upload {...props}>
                  <Button>
                    <UploadOutlined /> 上传头像</Button>
                </Upload>
                {/* <Modal visible={true} footer={null} onCancel={handleCancel}>
                  <img alt="预览" src={profile} />
                </Modal> */}
              </div>
            </TabPane>
          </Tabs>
        </Col>
        <Col span={2}></Col>
      </Row>
      {/* <PCFooter /> */}
    </>
  )
}

export default PCUserCenter