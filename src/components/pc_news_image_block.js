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
  }, [])


  const styleImage = {
    display: "block",
    width: propsImageWidth,
    height: "90px"
  }

  const styleH3 = {
    width: propsImageWidth,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }
  const newsList = news.length
    ? news.map((newsItem, index) => (
      <div key={index} className="imageBlock">
        {/* <Link to={`detail/${newsItem.uniquekey}`} target="_blank"> */}
          <div className="custom-image">
            <img style={styleImage} alt="新闻" src={newsItem.pic} />
          </div>
          <div className="custom-card">
            <h3 style={styleH3}>{newsItem.title}</h3>
            <p key="1">{newsItem.src}</p>
            <p key="2">{newsItem.time}</p>
          </div>
        {/* </Link> */}
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