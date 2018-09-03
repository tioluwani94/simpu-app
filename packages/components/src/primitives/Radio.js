import React from 'react';
import { Div } from './Layout';

export const Radio = props => {
  const {
    input: { name, onChange, onFocus, onBlur, value },
    meta: { touched, error },
    autocomplete,
    onClick,
    id,
    checked,
    label,
  } = props;
  return (
    <Div
      cssProp={`
        position: relative;
        input[type="radio"] {
            cursor: pointer;
            opacity: 0;
            width: 100%;
            height: 100%;
            position: absolute;
            margin: 0;
            z-index: 1;
            left: 0;
            top: 0;
            &:hover, &:focus {
              background: #FBFBFC;
            }
        }
        input[type="radio"] + .radio--label {
            font-size: 20px;
            padding: 25px 20px 25px 50px;
            cursor: pointer;
            width: 100%;
            box-sizing: border-box;
            display: inline-block;
            color: #777;

            &:hover, &:focus {
              background: #FBFBFC; 
            }
        }
        input[type="radio"]:checked + .radio--label {
          background: #FBFBFC;
        }
        input[type="radio"]:checked ~ .radio--label:before {
            border: 7px solid #2358da;
        }
        input[type="radio"] + .radio--label:before {
            content: "";
            background: linear-gradient(to bottom, #ffffff 0%, #fefefe 100%);
            width: 22px;
            height: 22px;
            position: absolute;
            left: 20px;
            border: 1px solid #ddd;
            border-radius: 22px;
            box-sizing: border-box;
            visibility: visible;
            transition: border .15s ease-in-out;
            cursor: pointer;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
        }
    `}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        touched={touched}
        error={error}
        onClick={onClick}
        autoComplete={autocomplete}
      />
      <label className="radio--label">{label}</label>
    </Div>
  );
};
