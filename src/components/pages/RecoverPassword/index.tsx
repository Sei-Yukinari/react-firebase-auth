import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'components/templates/PageTemplate';
import RecoverPasswordContainer from 'containers/organisms/RecoverPassword';

const RecoverPassword: React.FC = () => (
  <Wrapper>
    <PageTemplate title="Title">
      <RecoverPasswordContainer />
    </PageTemplate>
  </Wrapper>
);
const Wrapper = styled.div``;

export default RecoverPassword;
