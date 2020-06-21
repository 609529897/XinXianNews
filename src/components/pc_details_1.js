import React,{ useState, useEffect } from 'react'
import Axios from 'axios'
import PCHeader from './pc_header'

const PCDetails_1 = props => {
  const [news, setNews] = useState([])
  let title = props.match.params.title
  let channel = props.match.params.channel
  let rows = props.match.params.channel
    useEffect(() => {
      Axios.get(`bin_1/news/get?&channel=${channel}&num=${rows}&appkey=37f764932fa9274d`)
        .then(data => setNews(data.data.result.list))
    }, [channel, rows])
  return(
    <>
      <PCHeader />
      <h1>{title}</h1>
      <p>{channel}</p>
    </>
  )
}

export default PCDetails_1