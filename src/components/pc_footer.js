import React from 'react'
import {Row, Col} from 'antd'

const PCFooter = () =>{
    return(
      <footer className="footer">
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="footer">
            <div className="footer-top">
              <div>新鲜日报是一个聚焦科技与创新的资讯平台，致力于为一切热爱思考与发现的用户，提供有效率的信息服务。</div>
              <div>24小时：全天不间断的商业科技资讯和热点报道，及时为你推送。</div>
              <div>实时、准确、真实永远是新鲜日报追求的方向。</div>
            </div>
            <div className="footer-main">
              <span>关于我们</span>
              <span>加入我们</span>
              <span>合作伙伴</span>
              <span>友情链接</span>
            </div>
            <div className="footer-botton">&copy;&nbsp;2020 新鲜新闻. All Rights Reserved</div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    )
  }

export default PCFooter