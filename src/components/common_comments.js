import React, { useState } from 'react'
import { Row, Col, Form, Button, Card, Input, notification } from 'antd'

const CommonComments = (props) => {
  const [comments, setComments] = useState('')
  const commitList = comments.length
    ? comments.map((comment, index) => {
      return (
        <Card key={index} title={comment.UserName} extra={<a href="#"> 发布于 {comment.detatime}</a>}>
          <p>{comment.comments}</p>
        </Card>
      )
    })
    : "没有人评论，您是可以写第一个评论噢"
  let commentVale
  const handleSubmit = e => {
    e.preventDefault()
    setComments(commentVale)
  }
  const addUserCollection = () => {
    // post
    notification['success']({ message: '系统提醒', description: '收藏文章成功' })
  }
  return (
    <div className="comment">
      <Row>
        <Col span="24">
          <Form>
            <Form.Item label="您的评论">
              <Input type="textarea" placeholder="评论..." onChange={(e) => commentVale = e.target.value} />
            </Form.Item>
            <Button onClick={handleSubmit} type="primary" htmlType="button">提交评论</Button>
            &nbsp;&nbsp;
            <Button type="primary" htmlType="button" onClick={addUserCollection}>收藏该文章</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default CommonComments