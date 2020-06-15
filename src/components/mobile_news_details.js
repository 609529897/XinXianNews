import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Row, Col, BackTop } from 'antd'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import CommonComments from './common_comments'

const MobileNewsDetails = (props) => {
  const [newsItem, setNewsItem] = useState()
  const createMarkup = () => {
    // return {__html: newsItem.pageContent}
    console.log(newsItem)
  }
  useEffect(() => {
    Axios.get(`api/toutiao/index?&key=f9867413f6c95afe5635532ee1e9846c`)
      .then(data => {
        console.log(data)
        // if(data.data.result.data.uniquekey === props.params.uniquekey) {
        //   console.log(data.data.result.data.uniquekey)
        //   setNewsItem(data.data.result.data)
        //   alert(666)
        // }
        // return
        document.title = newsItem.title + " - 新鲜日报"
      })
  }, [])
  return (
    <>
      <MobileHeader />
      <Row>
        <Col span={2}></Col>
        <Col span={20} className="newsItem_container">
          <div className="article_container" dangerouslySetInnerHTML={createMarkup()}></div>
          <CommonComments />
        </Col>
        <Col span={2}></Col>
      </Row>
      <MobileFooter />
      <BackTop />
    </>
  )
}

export default MobileNewsDetails