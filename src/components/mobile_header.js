import React, { useState, useRef } from 'react'
import logo from '../static/logo.png'
import '../styles/mobile.css'
import { SettingOutlined } from '@ant-design/icons'
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

const MobileHeader = () => {
  const [modelVisible, setModelVisible] = useState(false)
  const [hasLogined, setHasLogined] = useState(true)
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

  const handleSubmit = e => {
    e.preventDefault()
    let username = usernameRef.current.state.value
    let password = passwordRef.current.state.value
    let confirmPassword = confirmPasswordRef.current.state.value
    // Axions.get(`https://....com?username=${username}&password=${password}&confirmPassword=${confirmPassword}`)
    // .then(response => response.json())
    // .then(data => {
    setUserState({ userNickName: "jack", userId: "1" })
    message.success("请求成功！")
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
  const userShow = hasLogined
    ?
    <SettingOutlined className="settingIcon" onClick={() => setModelVisible(true)} />
    : ""
  return (
    <div id="mobileheader">
      <header>
        <img src={logo} alt="logo" />
        <span>新鲜日报</span>
        {userShow}
      </header>
      {     // 登录/注册表单页
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
    </div>
  )
}

export default MobileHeader