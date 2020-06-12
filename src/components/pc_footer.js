import React from 'react'
import {Row, Col} from 'antd'

const PCFooter = () =>{
    return(
      <footer>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="footer">
            &copy;&nbsp;2020 新鲜新闻. All Rights Reserved
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    )
  }

export default PCFooter