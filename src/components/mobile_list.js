import React, { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MobileList = ({ channel, rows }) => {
  const [news, setNews] = useState([])
  useEffect(() => {
    // console.log(news)
    Axios.get(`bin/news/get?&channel=${channel}&num=${rows}&appkey=37f764932fa9274d`)
    .then(data => setNews(data.data.result.list))
      .catch(error => console.log(`pc_news_block: -> ${error}`))
  }, [channel, rows])


  const newsList = news
    ? news.map((newsItem, index) => (
      <section key={index} className="m_article list-item special_section clearFix">
        {/* <Link to={`details/${newsItem.uniquekey}`}> */}
          <div>
            <img style={{width:"100%", height:"100%"}} src={newsItem.pic} alt={newsItem.title} />
          </div>
          <div className="m_article_info">
            <div className="m_article">
              <span>
                {newsItem.title}
              </span>
            </div>
            <div className="m_articledesc">
              <div className="m_article_desc_l">
                <span className="m_article_channel">{newsItem.src}</span>
                <span className="m_article_time">{newsItem.time}</span>
              </div>
            </div>
          </div>
        {/* </Link> */}
      </section>
    ))
    : '没有加载到任何新闻, 可能是免费 API 请求次数到达限制了！'


  return (
    <>
      <Row>
        <Col span="24">
          {newsList}
        </Col>
      </Row>
    </>
  )
}

MobileList.prototype = {
  channel: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired
}

export default MobileList