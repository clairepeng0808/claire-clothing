import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import color from '../../style/color';
import styled from 'styled-components';

const FormInput = React.forwardRef((props, ref) => {
  const { errors, label, content, helptext } = props;

  return (
    <StyledFormInput errors={errors}>
      <Form.Control {...props} ref={ref} />
      {label && (
        <Form.Label errors={errors} className={content?.length && 'shrink'}>
          {label}
        </Form.Label>
      )}
      {helptext && !errors?.message && (
        <Form.Text className="help-text">{helptext}</Form.Text>
      )}
      {errors?.message && (
        <Form.Text className="error-text">{errors.message}</Form.Text>
      )}
    </StyledFormInput>
  );
});

const StyledFormInput = styled(Form.Group)`
  position: relative;
  margin: 28px 0;

  .form-control {
    color: ${color.secondary};
    border: none;
    border-bottom: 1px solid
      ${(props) => (props.errors ? color.danger : color.dark)};
    border-radius: 0;
    padding: 2px 6px;

    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
      border-color: ${(props) => (props.errors ? color.danger : color.primary)};
      color: ${color.dark};
    }
    &:focus ~ .form-label {
      top: -14px;
      font-size: 14px;
      color: ${(props) => (props.errors ? color.danger : color.primary)};
    }
  }
  .form-label {
    color: ${color.secondary};
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 5px;
    transition: 300ms ease all;

    &.shrink {
      color: ${(props) => (props.errors ? color.danger : color.secondary)};
      top: -14px;
      font-size: 14px;
    }
  }
  .error-text {
    color: ${color.danger};
    margin-left: 5px;
  }

  .help-text {
    color: ${color.secondary};
    margin-left: 5px;
  }
`;
FormInput.defaultProps = {
  errors: null,
  content: null,
  helptext: null,
};

FormInput.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  content: PropTypes.string,
  helptext: PropTypes.string,
};

export default React.memo(FormInput);
