import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import Header from '../../components/Header/index'
import ZCYMenus from '../../components/Menus/index'
const { Content, Sider } = Layout;
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <Layout>
    <Header/>
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <ZCYMenus/>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          { children }
        </Content>
      </Layout>
    </Layout>
  </Layout>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
