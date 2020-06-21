import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PCNewsImageBlock = ({ rows, channel, propWidth, propsImageWidth }) => {
  const [news, setNews] = useState([])
  useEffect(() => {
    Axios.get(`bin/news/get?&channel=${channel}&num=${rows}&appkey=37f764932fa9274d`)
      .then(data => setNews(data.data.result.list))
  }, [channel, rows])
  const styleImage = {
    display: "block",
    width: propsImageWidth,
    height: "90px"
  }

  const styleH3 = {
    width: propsImageWidth,
    fontSize: "0.2rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // whiteSpace: "nowrap",
  }
  const newsList = news
    ? news.map((newsItem, index) => (
      <div key={index} className="imageBlock">
        <a href={`${newsItem.url}`} target="_blank">
        <div className="custom-image">
          <img style={styleImage} alt="新闻" src={newsItem.pic} />
        </div>
        <div className="custom-card">
          <h3 style={styleH3}>{newsItem.title}</h3>
          <p key="1">{newsItem.category}</p>
          <p key="2">{newsItem.src}</p>
          <p key="3">{newsItem.time}</p>
        </div>
        </a>
      </div>
    ))
    : '没有加载到任何新闻'

  return (
    <div>
      <Card title={channel} bordered={true} style={{ width: `${propWidth}` }}>
        {newsList}
      </Card>
    </div>
  )
}

PCNewsImageBlock.prototype = {
  rows: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  propWidth: PropTypes.number.isRequired,
  propsImageWidth: PropTypes.number.isRequired,
}

export default PCNewsImageBlock