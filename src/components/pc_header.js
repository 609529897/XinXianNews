// React, Router
import React, { useState, useRef, Fragment } from 'react'
import { Link } from 'react-router-dom'

// static
import logo from '../static/logo.png'
import '../styles/pc.css'

// Http Request
// import Axions from 'axios'

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

const PCHeader = () => {
  const [current, setCurrent] = useState("top")
  const [modelVisible, setModelVisible] = useState(false)
  const [hasLogined, setHasLogined] = useState(false)
  const usernameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const loginUsernameRef = useRef()
  const loginPasswordRef = useRef()

  const [{ userNickName, userId }, setUserState] = useState({
    userNickName: '',
    userId: '',
  })
  // state = {
  //   action: 'login',
  // }

  // 点击相应按钮聚焦到相应按钮
  const handleClick = e => {
    if (e.key === "register") {
      setCurrent("register")
      setModelVisible(true)
    } else {
      setCurrent(e.key)
    }
  }
  const handleSubmit = e => {
    e.preventDefault()

    let username = usernameRef.current.state.value
    let password = passwordRef.current.state.value
    let confirmPassword = confirmPasswordRef.current.state.value
    // Axions.get(`https://....com?username=${username}&password=${password}&confirmPassword=${confirmPassword}`)
    // .then(response => response.json())
    // .then(data => {
    setUserState({ userNickName: "jack", userId: "1" })
    message.success("注册成功！")
    setModelVisible(false)
    // })
  }
  const handleLoginSubmit = e => {
    e.preventDefault()
    let username = loginUsernameRef.current.state.value
    let password = loginPasswordRef.current.state.value
    // Axions.get(`https://....com?username=${username}&password=${password}`)
    // .then(response => response.json())
    // .then(data => {
    // setUserState({userNickName:"jack", userId:"1"})
    message.success("登录成功！")
    setModelVisible(false)
    // })
  }
  const renderError = (field) => {
    if (field.touched && field.error) {
      return (
        <span className="SignInForm__error-text">
          {field.error}
        </span>
      );
    }
  }
  // userShow: 登录/注册
  const userShow = hasLogined
    ? <Menu.Item key="logout" className="register">
      <Button type="primary" htmlType="button">{userNickName}</Button>
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
            <span>新鲜日报</span>
          </a>
        </Col>
        <Col span={16}>
          <Menu onClick={e => handleClick(e)} selectedKeys={[current]} mode="horizontal">
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
              visible={modelVisible}
              onCancel={() => setModelVisible(false)}
              onOk={() => setModelVisible(false)}
              okText="关闭"
            >
              <Tabs defaultActiveKey="1" type="card">
                <TabPane tab="登录" key="1">
                  <Form>
                    <FormItem label="账户">
                      <Input placeholder="请输入您的账号" ref={loginUsernameRef} />
                    </FormItem>
                    <FormItem label="密码">
                      <Input type="password" placeholder="请输入您的密码" ref={loginPasswordRef} />
                    </FormItem>
                    <Button onClick={e => handleLoginSubmit(e)} type="primary" htmlType="submit">登录</Button>
                  </Form>
                </TabPane>
                <TabPane tab="注册" key="2">
                  <Form>
                    <FormItem label="账户">
                      <Input placeholder="请输入您的账号" ref={usernameRef} />
                    </FormItem>
                    <FormItem label="密码">
                      <Input type="password" placeholder="请输入您的密码" ref={passwordRef} />
                    </FormItem>
                    <FormItem label="确认密码">
                      <Input type="password" placeholder="请再次输入您的密码" ref={confirmPasswordRef} />
                    </FormItem>
                    <Button onClick={e => handleSubmit(e)} type="primary" htmlType="submit">注册</Button>
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

export default PCHeader