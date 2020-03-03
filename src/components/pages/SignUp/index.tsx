import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'components/templates/PageTemplate';
import EmailRegisterContainer from 'containers/organisms/EmailRegister';

const SingUp: React.FC = () => (
  <Wrapper>
    <PageTemplate title="Title">
      <EmailRegisterContainer />
    </PageTemplate>
  </Wrapper>
);
const Wrapper = styled.div``;

export default SingUp;
