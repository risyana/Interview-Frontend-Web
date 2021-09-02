import { Layout, Menu } from 'antd';
import Link from 'next/link'
import Image from 'next/image'

const { Header, Content, Footer, Sider } = Layout;

export default function MyLayout({children}) {
  return (
    <Layout>
      <Sider
        theme="light"
        style={{
          boxShadow: '1px 1px 10px 5px rgba(0, 0, 0, 0.1)',
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          borderRadius: '0 10px 10px 0',
          left: 0,
          width:500
        }}
      >
        <div className="logo" style={{marginTop: 30, marginLeft: 30, marginBottom:30}}>
          <Image 
            src="/logo/logo.svg" 
            alt="Vercel Logo" 
            width={120} 
            height={30} 
            />
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['0']}>
          <Menu.Item key="1" >
            <div style={{display:'flex', alignItems: 'center'}}>
              <Image 
                src="/icon/Q1.svg" 
                alt="q1" 
                width={30} 
                height={30} 
                />
              <Link passHref={true} href="/question-1" >
                <span style={{marginBottom:7 , marginLeft: 4}}>
                  Question 1
                </span>
              </Link>
            </div>
          </Menu.Item>
          <Menu.Item key="2" >
            <div style={{display:'flex', alignItems: 'center'}}>
              <Image 
                src="/icon/Q2.svg" 
                alt="q2" 
                width={30} 
                height={30} 
                />
              <Link passHref={true} href="/question-2" >
                <span style={{marginBottom:7 , marginLeft: 4}}>
                  Question 2
                </span>
              </Link>
            </div>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright &copy; 2019 
          &nbsp;
          <a href="https://www.moduit.id/id/" target="_blank" rel="noreferrer">
            PT Moduit Digital Indonesia
          </a>
          &nbsp;
          All rights reserved
        </Footer>
      </Layout>
    </Layout>
  )
}