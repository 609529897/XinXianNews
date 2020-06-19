import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PCNewsBlock = ({ type }) => {
  const [news, setNews] = useState([])
  useEffect(() => {
    Axios.get(`api/toutiao/index?type=${type}&key=f9867413f6c95afe5635532ee1e9846c`)
      .then(data => { setNews(data.data.result.data) })
      .catch(error => console.log(`pc_news_block: -> ${error}`))
  }, [type])

  const newsList = news.length
    ? news.map((newsItem, index) => (
      <li key={index} className="liList">
        <a href={`${newsItem.url}`} target="_blank">
        {newsItem.title}
        </a>
        {/* <Link to={`/datails/${newsItem.uniquekey}`} target="_blank">
          
        </Link> */}
      </li>
    ))
    : '没有加载到任何新闻, 可能是两种原因：第一种，免费 API 请求次数到达限制，第二种，您没有连接网络！'


  return (
    <div className="topNewsList">
      <Card>
        <ul className="ulList">
          {newsList}
        </ul>
      </Card>
    </div>
  )
}

PCNewsBlock.prototype = {
  type: PropTypes.string.isRequired
}

export default PCNewsBlock