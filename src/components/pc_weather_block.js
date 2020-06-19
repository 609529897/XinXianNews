import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, message } from 'antd'
import { CloudOutlined } from '@ant-design/icons'
import "../styles/pc.css"

const PCWeatherBlock = () => {
  const [cityname, setCityname] = useState("北京")
  const [cityWeather, setCityWeather] = useState()
  useEffect(() => {
    searchCityWeather()
  }, [])
  const searchCityWeather = () => {
    axios.get(`hefeng/s6/weather/now?location=${cityname}&key=5372983018b94446a345169af1769414`)
    .then(data => {
      setCityWeather(data.data.HeWeather6[0].now)
    }).catch(error => console.log(`pc_weather error -> : ${error}`))
  }
  const showCityWeather = cityWeather
    ?
    <ul className="wheatherUlList">
      <Card title="今日天气">
        <CloudOutlined className="cloudIcon" style={{ color: "SkyBlue", fontSize: 0.5 + "rem" }} />
        <li key="1">城市：{cityname}</li>
        <li key="2">温度：{cityWeather.tmp}°C</li>
        <li key="3">天气：{cityWeather.cond_txt}</li>
        <li key="4">风向：{cityWeather.wind_dir}</li>
        <li key="5">风力：{cityWeather.wind_sc}</li>
        <li key="6">相对湿度：{cityWeather.hum}</li>
        <li key="7">1小时降水量：{cityWeather.pcpn}</li>
        <li key="8">10分钟降水量：{cityWeather.pcpn_10m}</li>
        <li key="9">大气压强：{cityWeather.pres}</li>
      </Card>
    </ul>
    : "没有获取到任何天气相关信息！"
  return (
    <>
      <form className="searchWeatherForm">
        <input type="text" defaultValue={cityname} onChange={(e) => setCityname(e.target.value)}></input>
        <input type="button" value="查询" onClick={() => {searchCityWeather(); message.success("天气信息更新成功！")}}></input>
      </form>
      {showCityWeather}
    </>
  )
}

export default PCWeatherBlock


// <Timeline>
// <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
// <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
// <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
// <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
// <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
// <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
// </Timeline>