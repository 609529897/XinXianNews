// React, Router
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// static
import logo from '../static/logo.png'
import '../styles/pc.css'

//Ant Design
import { AppstoreOutlined } from '@ant-design/icons'
import {
  Row,
  Col,
  Menu,
  Tabs,
  message,
  Form,
  Input,
  Button,
  Checkbox,
  Modal
} from 'antd'
const { Item: FormItem } = Form
const { TabPane } = Tabs

export default class PCHeader extends Component {
  state = {
    current: "top",
    modelVisible: false,
    action: 'login',
    hasLogined: false,
    userNickName: '',
    userid: '',
  }
  // 处理 Model 是否显示
  setModelVisible(val) {
    this.setState(() => ({ modelVisible: val, }))
  }
  // 点击相应按钮聚焦到相应按钮
  handleClick(e) {
    if (e.key === "register") {
      this.setState(() => ({ current: 'register' }))
      this.setModelVisible(true)
    } else {
      this.setState(() => ({ current: e.key }))
    }
  }
  handleSubmit(e) {
    //...
  }
  render() {
    // userShow: 登录/注册
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" className="register">
        <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
      &nbsp;&nbsp;
      <Link target="_blank">
          <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
      &nbsp;&nbsp;
      <Button type="ghost" htmlType="button">退出</Button>
      </Menu.Item>
      : <Menu.Item key="register" className="register">
        <AppstoreOutlined />注册/登录
      </Menu.Item>
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src={logo} alt="logo" />
              <span>新鲜新闻</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu onClick={e => this.handleClick(e)} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="top">
                <AppstoreOutlined /> 热门
               </Menu.Item>
              <Menu.Item key="tiyu">
                <AppstoreOutlined /> 体育
               </Menu.Item>
              <Menu.Item key="NBA">
                <AppstoreOutlined /> NBA
               </Menu.Item>
              <Menu.Item key="shehui">
                <AppstoreOutlined /> 社会
               </Menu.Item>
              <Menu.Item key="yule">
                <AppstoreOutlined /> 娱乐
               </Menu.Item>
              <Menu.Item key="caijing">
                <AppstoreOutlined /> 财经
               </Menu.Item>
              <Menu.Item key="keji">
                <AppstoreOutlined /> 科技
               </Menu.Item>
              <Menu.Item key="junshi">
                <AppstoreOutlined /> 军事
               </Menu.Item>
              {userShow}
            </Menu>
            {
              // 登录/注册表单页
              <Modal
                title="用户中心"
                wrapClassName="vertical-center-model"
                visible={this.state.modelVisible}
                onCancel={() => this.setModelVisible(false)}
                onOk={() => this.setModelVisible(false)}
                okText="关闭"
              >
                <Tabs defaultActiveKey="1" type="card">
                  <TabPane tab="注册" key="1">
                    <Form onSubmit={this.handleSubmit()}>
                      <FormItem label="账户">
                        <Input placeholder="请输入您的账号" ref={usernameNode => this.usernameNode = usernameNode} />
                      </FormItem>
                      <FormItem label="密码">
                        <Input type="password" placeholder="请输入您的密码" ref={passwordNode => this.passwordNode = passwordNode} />
                      </FormItem>
                      <FormItem label="确认密码">
                        <Input type="password" placeholder="请再次输入您的密码" ref={confirmPassNameNode => this.confirmPassNameNode = confirmPassNameNode} />
                      </FormItem>
                      <Button type="primary" htmlType="submit">注册</Button>
                    </Form>
                  </TabPane>
                </Tabs>
              </Modal>
            }
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}