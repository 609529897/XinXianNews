import React, { useState, useRef } from 'react'
// import axios from 'axios'
import { CloudOutlined } from '@ant-design/icons'
import "../styles/pc.css"

const data = {
  "today": {
    "temperature": "22℃~33℃",
    "weather": "晴天",
    "weather_id": {
      "fa": "04",
      "fb": "01"
    },
    "wind": "西北风3-5级",
    "week": "星期六",
    "city": "北京",
    "date_y": "2020年06月13日",
    "dressing_index": "炎热",
    "dressing_advice": "天气炎热，建议着短衫、短裙、短裤、薄型T恤衫等清凉夏季服装。",
    "uv_index": "弱",
    "comfort_index": "",
    "wash_index": "较适宜",
    "travel_index": "较适宜",
    "exercise_index": "较适宜",
    "drying_index": ""
  }
}

const PCWeatherBlock = () => {
  const [cityWeather, setCityWeather] = useState([data])
  const searchCityWeather = () => {
    // axios.get("../api/cityWeather.json").then(data => {
    setCityWeather()
    // })
  }
  const showCityWeather = cityWeather.length
    ? cityWeather.map((wheatherItem, index) => {
      return (
        <ul className="wheatherUlList" key={index}>
          <CloudOutlined className="cloudIcon" style={{color:"SkyBlue", fontSize:0.5 + "rem"}}/>
          <li>
          温度：{wheatherItem.today.temperature}
         </li>
         <li>
           天气：{wheatherItem.today.weather}
         </li>
         <li>
          风向：{wheatherItem.today.wind}
         </li>
         <li>
           衣着：{wheatherItem.today.dressing_advice}
         </li>
        </ul>
      )
    })
    : "没有获取到任何天气相关信息！"
  return (
    <>
      <form>
        <input type="text" defaultValue="北京"></input>
        <input type="button" value="查询" onClick={searchCityWeather}></input>
      </form>
      {showCityWeather}
    </>
  )
}

export default PCWeatherBlock