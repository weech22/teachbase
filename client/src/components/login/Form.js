import React from 'react';
import styled from 'styled-components';
import {
  Field,
  reduxForm,
  getFormSubmitErrors,
  clearSubmitErrors,
} from 'redux-form';
import * as R from 'ramda';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { FORMS } from '../../constants';
import { required, minLength6 } from './utils';
import _TextInput from './TextInput';
import _Checkbox from './Checkbox';
import Button from './Button';
import assets from '../../assets';
import { sendLogin as _sendLogin } from '../../modules/login';

const TextInput = styled(_TextInput)`
  margin-top: 10px;
`;

const Checkbox = styled(_Checkbox)`
  margin: 20px 0;
`;

const Wrapper = styled.div`
  width: 400px;
  background-image: url(${assets.img.formBackground});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
  box-shadow: 0px 33px 15px -20px rgba(0, 0, 0, 0.52);
  font-family: 'Alata', sans-serif;
`;

const OpacityLayer = styled.div`
  border-radius: 25px;
  background: linear-gradient(
    to left,
    rgba(15, 12, 41, 0.9),
    rgba(48, 43, 99, 0.8),
    rgba(36, 36, 62, 0.9)
  );
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 60px 40px 60px;
`;

const Divider = styled.hr.attrs({ size: '2' })`
  margin-top: 30px;
  width: 100%;
  opacity: 0.4;
`;

const RestorePasswordText = styled.span`
  margin-top: 30px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
  text-align: center;
  cursor: pointer;
`;

const Logo = styled.img.attrs({ src: assets.img.logo })`
  width: 240px;
  height: 100%;
  margin: 0 auto 20px auto;
`;

const ErrorText = styled.div`
  text-align: center;
  margin-top: 16px;
  color: ${({ error }) => (error ? '#f55555' : 'transparent')};
`;

const FormDumb = ({ submitting, handleSubmit, sendLogin, errors }) => {
  const handleForgotPassword = () => {
    const message = 'login: admin; password: qwerty';
    // eslint-disable-next-line no-alert
    alert(message);
  };
  return (
    <Wrapper>
      <OpacityLayer>
        <ContentContainer>
          <Logo />
          <Field
            name="login"
            component={TextInput}
            label="Login"
            type="text"
            validate={[required]}
          />
          <Field
            name="password"
            component={TextInput}
            label="Password"
            type="password"
            validate={[required, minLength6]}
          />
          <Field
            name="keepLoggedIn"
            component={Checkbox}
            label="Keep me Signed in"
          />
          <Button onClick={handleSubmit(sendLogin)} disabled={submitting}>
            {submitting ? (
              <Loader
                type="TailSpin"
                color="#fff"
                height={10}
                width={10}
                timeout={3000}
              />
            ) : (
              'Sign In'
            )}
          </Button>
          <ErrorText error={errors.description}>
            {errors.description || 'Ooops!'}
          </ErrorText>
          <Divider />
          <RestorePasswordText onClick={handleForgotPassword}>
            Forgot Password?
          </RestorePasswordText>
        </ContentContainer>
      </OpacityLayer>
    </Wrapper>
  );
};

const Form = R.compose(
  connect(R.applySpec({ errors: getFormSubmitErrors(FORMS.LOGIN) }), {
    sendLogin: _sendLogin,
  }),
  reduxForm({
    form: FORMS.LOGIN,
    onChange: (_, dispatch, { errors }) => {
      if (errors) dispatch(clearSubmitErrors(FORMS.LOGIN));
    },
  }),
)(FormDumb);

export default Form;
