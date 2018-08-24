import React from 'react';
import { Div } from './Layout';

export class Radio extends React.Component {
  state = {
    value: '',
  };
  componentDidMount() {
    const { value } = this.props;
    if (value) {
      this.setState({
        value,
      });
    }
  }
  onChange = e => {
    const value = e.target.value;
    console.log(value)
  };

  render() {
    const { value, checked } = this.state;
    const { label } = this.props;

    return <Div cssProp={`
        position: relative;
        input[type="radio"] {
            cursor: pointer;
            opacity: 0;
            width: 22px;
            height: 22px;
            position: absolute;
            margin: 0;
            z-index: 1;
            left: 0;
            top: 32px;
        }
        input[type="radio"] + .radio--label {
            font-size: 20px;
            padding: 32px;
            cursor: pointer;
            width: 100%;
            box-sizing: border-box;
            display: inline-block;
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
            left: 0;
            border: 1px solid #ddd;
            border-radius: 22px;
            box-sizing: border-box;
            visibility: visible;
            transition: border .15s ease-in-out;
            cursor: pointer;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
        }
    `}>
        <input type="radio" />
        <label className="radio--label">{label}</label>
      </Div>;
  }
}
