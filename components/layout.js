import { Layout, Menu } from 'antd';
import Link from 'next/link'
import {
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

export default function MyLayout({children}) {
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
          <Menu.Item key="0" icon={<HomeOutlined />}>
            <Link href="/" >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href="/question-1" >
              Question 1
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link href="/question-2" >
              Question 2
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}