import React, { useState, useEffect } from 'react'
import { Card } from 'antd'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { Route, BrowserRouter, Link, Router } from 'react-router-dom'

const PCNewsBlock = props => {
  const { type } = props
  const [news, setNews] = useState([])
  useEffect(() => {
    Axios.get("http://v.juhe.cn/toutiao/index?type=top&key=f9867413f6c95afe5635532ee1e9846c").then(data => console.log(data))
    switch (type) {
      case "top":
        setNews([{
          title: "惊 Σ(っ °Д °;)っ 只有两个队伍在世界杯赛场上击败过中国！"
        }, {
          title: "密苏里狗屎不捡问题严重，为提升居民素质，警方屎上插标签，上书：“这是宁的屎吗？"
        }, {
          title: "迈阿密一仓库失窃，小偷狂抢数百顶假发逃之夭夭。"
        }, {
          title: "阿斯彭男子雇用毛绒猫头鹰作为辩护律师，猫头鹰未作出任何回应"
        }, {
          title: "父子三人打群架被拘留，因名字太像，导致警方审讯难度暴增"
        }, {
          title: "酒驾男子被警察叫住，坚决声称是狗在开车"
        }, {
          title: "子不满警方通缉照太丑，在社交网络发布帅气自拍。警方采纳了他的新照片，并将其捉拿归案。"
        }, {
          title: "佛罗里达男子试图偷窃警车被捕，车里包含一名警察。"
        }, {
          title: "德州强盗闯入百思买抢劫，因屁股兜揣手机误拨911被捕。"
        }, {
          title: "两男子酒后互相开枪测试防弹背心质量，双双送进医院。"
        },{
          title: "惊 Σ(っ °Д °;)っ 只有两个队伍在世界杯赛场上击败过中国！"
        }, {
          title: "密苏里狗屎不捡问题严重，为提升居民素质，警方屎上插标签，上书：“这是宁的屎吗？"
        }, {
          title: "迈阿密一仓库失窃，小偷狂抢数百顶假发逃之夭夭。"
        }, {
          title: "阿斯彭男子雇用毛绒猫头鹰作为辩护律师，猫头鹰未作出任何回应"
        }, {
          title: "父子三人打群架被拘留，因名字太像，导致警方审讯难度暴增"
        }, {
          title: "酒驾男子被警察叫住，坚决声称是狗在开车"
        }, {
          title: "子不满警方通缉照太丑，在社交网络发布帅气自拍。警方采纳了他的新照片，并将其捉拿归案。"
        }, {
          title: "佛罗里达男子试图偷窃警车被捕，车里包含一名警察。"
        }, {
          title: "德州强盗闯入百思买抢劫，因屁股兜揣手机误拨911被捕。"
        }, {
          title: "两男子酒后互相开枪测试防弹背心质量，双双送进医院。"
        }])
        break
      case "guoji":
        setNews([{ title: "中国决定对美国进行制裁！" }, { title: "51 区密码全揭秘！" }, {title: "韩国惊现 UFO"}])
        break
      default:
        return -1
    }
  }, [type])


  const newsList = news.length
    ? news.map((newsItem, index) => (
      <li className="liList">
        {/* <Link to={`detail/${newsItem.uniquekey}`} target="_blank"> */}
        {newsItem.title}
        {/* </Link> */}
      </li>
    ))
    : '没有加载到任何新闻'


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