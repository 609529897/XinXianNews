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
    Axios.get(`api/toutiao/index?&key=f9867413f6c95afe5635532ee1e9846c`)
    .then(data => { console.log(data)
      // if(data.data.result.data.uniquekey === props.params.uniquekey) {
      //   console.log(data.data.result.data.uniquekey)
      //   setNewsItem(data.data.result.data)
      //   alert(666)
      // }
      // return
      document.title = newsItem.title + " - 新鲜日报"
    })
  },[])
  return (
    <>
    <PCHeader />
    <Row>
      <Col span={2}></Col>
      <Col span={14} className="newsItem_container">
        <div className="article_container" dangerouslySetInnerHTML={createMarkup()}></div>
        <hr />
        <CommonComments />
      </Col>
      <Col span={6}>
      <PCNewsImageBlock rows={6} channel={'头条'} propWidth="100%" propsImageWidth="140px" />
      </Col>
      <Col span={2}></Col>
    </Row>
    <PCFooter />
    <BackTop />
    </>
  )
}

export default PCNewsDetails