import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Row, Col, BackTop } from 'antd'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsImageBlock from './pc_news_image_block'
import CommonComments from './common_comments'

const PCNewsDetails = (props) => {
  const [newsItem, setNewsItem] = useState()
  const createMarkup = () => {
    // return {__html: newsItem.pageContent}
    console.log(newsItem)
  }
  useEffect(() => {
    Axios.get(`api/toutiao/index?type=top&key=f9867413f6c95afe5635532ee1e9846c`)
      .then(data => { console.log(data.data.result.data) })
      .catch(error => console.log(`pc_news_block: -> ${error}`))
  }, [])
  return (
    <>
    <PCHeader />
    <Row>
      <Col span={2}></Col>
      <Col span={14} className="newsItem_container">
        <div className="article_container" dangerouslySetInnerHTML={createMarkup()}></div>
        <CommonComments />
      </Col>
      <Col span={6}>
      <PCNewsImageBlock rows={2} channel={'头条'} propWidth="100%" propsImageWidth="140px" />
      </Col>
      <Col span={2}></Col>
    </Row>
    <PCFooter />
    <BackTop />
    </>
  )
}

export default PCNewsDetails