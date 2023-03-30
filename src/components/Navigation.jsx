import React from 'react';
import {Breadcrumb, Layout, Menu, theme} from 'antd';
import {Image} from 'antd';

const {Header, Content, Footer} = Layout;

const Navigation = () => {
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }}
      >

          <Image
            style={{
              float: 'left',
              width: 200,
              height: 31,
              margin: '16px 24px 16px 0',
            }}
            src="https://brterminal.ru/brtp/img/logo_w.png"
          />

      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          Здесь чего нибудь можно прикрутить, например форму для ввода каких-то данных
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        RAST NUMBER 1 =)
      </Footer>
    </Layout>
  );
};

export default Navigation;