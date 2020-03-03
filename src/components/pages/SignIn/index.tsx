import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'components/templates/PageTemplate';
import EmailAuth from '../../../containers/organisms/EmailAuth';

const SingIn: React.FC = () => (
  <Wrapper>
    <PageTemplate title="Title">
      <EmailAuth />
    </PageTemplate>
  </Wrapper>
);
const Wrapper = styled.div``;

export default SingIn;
