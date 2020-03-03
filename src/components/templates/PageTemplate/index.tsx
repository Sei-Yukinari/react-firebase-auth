import React from 'react';
import styled from 'styled-components';
import Title from 'components/molecules/Title';
import Footer from 'components/organisms/Footer';
import EmailAuth from '../../../containers/organisms/EmailAuth';

export interface PageTemplateProps {
  title: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, children }) => (
  <Wrapper>
    <Header>
      <Title title={title} />
    </Header>
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  // position: fixed;
  // top: 0;
  // width: 100%;
  // z-index: 999;
`;

const Content = styled.section``;

export default PageTemplate;
