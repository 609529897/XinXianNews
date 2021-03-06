import React from 'react'
import { Row, Col } from 'antd'

const MobileFooter = () => {
  return (
    <footer>
      <Row>
        <Col span={2}></Col>
        <Col span={20} className="mobile-footer">
          &copy;&nbsp;2020 新鲜新闻. All Rights Reserved
          </Col>
        <Col span={2}></Col>
      </Row>
    </footer>
  )
}

export default MobileFooter