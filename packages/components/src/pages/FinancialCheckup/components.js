import React from 'react';
import PropTypes from 'prop-types';
import { Div, UL } from '../../primitives/Layout';
import { Radio } from '../../primitives/Radio';
import { Heading } from '../../primitives/Text';

export const ProgressBar = ({ width, bgColor, progressBg }) => {
  return (
    <Div
      cssProp={`
        height: 8px;
        background: ${bgColor};
        border-radius: 8px;
        transition: .4s;
        width: 100%;
    `}
    >
      <Div
        cssProp={`
        width: ${width}%;
        background: ${progressBg};
        height: 8px;
        border-radius: 8px;
        transition: width .4s;
      `}
      />
    </Div>
  );
};
ProgressBar.defaultProps = {
  width: 4,
  bgColor: '#f9f9f9',
  progressBg: '#2358da',
};

ProgressBar.propTypes = {
  width: PropTypes.number,
  bgColor: PropTypes.string,
  progressBg: PropTypes.string,
};

const QuestionStyle = `
  .question-text {
    padding-bottom: 32px;
    text-align:center;
    font-size: 24px;
    font-weight: normal;
  }
  .options-list {
    text-align: left;
    border-radius: 8px;
    border: 1px solid #e1e1e1;
    overflow: hidden;
    li {
      border-bottom: 1px solid #e1e1e1;
      margin: 0;

      &:last-of-type {
        border-bottom: none;
      }
    }
  }
`;

export class Question extends React.Component {
  state = { value: this.props.value };
  componentWillReceiveProps(nextProps) {
    if (!!nextProps.value === false) {
      if (Boolean(this.state.value) === true) {
        this.props.onChange(this.state.value, true);
      }
    }
  }
  onChange = (value, name) => {
    this.setState({ value });
    this.props.onChange(value, name);
  };
  isChecked = value => {
    const { isChecked } = this.props;
    if (!!isChecked) {
      return isChecked(value);
    }
    return this.state.value === value;
  };
  render() {
    const { question, options, onChange, name, style } = this.props;
    return (
      <Div style={style} cssProp={QuestionStyle}>
        <Heading className="question-text">{question}</Heading>
        <UL className="options-list">
          {options.map((option, i) => (
            <li key={i.toString()}>
              <Radio
                label={option.label}
                id={option.value}
                input={{
                  name,
                  value: option.value,
                  onChange: e => this.onChange(e.target.value, name),
                }}
                meta={{ touched: 'false' }}
                autocomplete={name}
                checked={this.isChecked(option.value)}
              />
            </li>
          ))}
        </UL>
      </Div>
    );
  }
}

export const AppContext = React.createContext({ state: {} });

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {
        count: 1,
        progressBarWidth: 4.5,
        questions: [
          {
            id: 1,
            question: 'Do you live in Nigeria?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'country',
            answer: '',
          },
          {
            id: 2,
            question: 'How old are you?',
            options: [
              { value: '1', label: '18-24' },
              { value: '2', label: '25-34' },
              { value: '3', label: '35-45' },
            ],
            name: 'age',
            answer: '',
          },
          {
            id: 3,
            question: 'What is your relationship status?',
            name: 'relationshipStatus',
            answer: '',
            options: [
              { value: 'single', label: 'Single' },
              { value: 'in-a-relationship', label: 'In a relationship' },
              { value: 'married', label: 'Married' },
              { value: 'other', label: "Other or I'd prefer not to say" },
            ],
          },
          {
            id: 4,
            question: 'Do you have any children?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'children',
            answer: '',
          },
          {
            id: 5,
            question: 'Do you own your home?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'hasHome',
            answer: '',
          },
          {
            id: 6,
            question: 'What kind of accommodations do you have?',
            options: [
              { value: 'shared', label: 'Shared apartment' },
              { value: 'rented', label: 'Rented flat' },
              { value: 'family', label: 'Live with family' },
            ],
            name: 'accommodationType',
            answer: '',
          },
          {
            id: 7,
            question: 'Do you set aside savings every month?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'some', label: 'Only some months' },
              { value: 'no', label: 'No' },
            ],
            name: 'monthlySavings',
            answer: '',
          },
          {
            id: 8,
            question: 'Do you struggle to pay your monthly bills?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'most', label: 'Most of the time' },
              { value: 'no', label: 'No' },
            ],
            name: 'monthlyBills',
            answer: '',
          },
          {
            id: 9,
            question:
              'Do you save three or more times your monthly expenses for a dedicated emergency fund?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'emergencyFund',
            answer: '',
          },
          {
            id: 10,
            question:
              'Do you have personal loans that have an interest rate above 8%?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'personalLoans',
            answer: '',
          },
          {
            id: 11,
            question: 'Do you have money in a savings account?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'savings',
            answer: '',
          },
          {
            id: 12,
            question:
              'Do you have a separate account (current or savings) for your expenses?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'expenses',
            answer: '',
          },
          {
            id: 13,
            question: 'Do you have a Retirement Savings Account (RSA)?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'not sure', label: 'Not sure' },
            ],
            name: 'rsa',
            answer: '',
          },
          {
            id: 14,
            question:
              'Does your current employer contribute to your retirement savings account?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'not sure', label: 'Not sure' },
            ],
            name: 'rsa2',
            answer: '',
          },
          {
            id: 15,
            question: 'Do you contribute to the retirement savings account?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'not sure', label: 'Not sure' },
            ],
            name: 'rsa3',
            answer: '',
          },
          {
            id: 16,
            question:
              'Do you hold any mutual funds or stocks in your investment portfolio?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'investmentPortfolio',
            answer: '',
          },
          {
            id: 17,
            question:
              'Do you take full advantage of the retirement contribution match program?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'not sure', label: 'Not sure' },
            ],
            name: 'rsa4',
            answer: '',
          },
          {
            id: 18,
            question: 'Do you have a health management policy?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'not sure', label: 'Not sure' },
              { value: 'employer', label: 'Only through my employer' },
            ],
            name: 'hmo',
            answer: '',
          },
          {
            id: 19,
            question: 'Do you have any insurance policies?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'insurance',
            answer: '',
          },
          {
            id: 20,
            question:
              'Do you have an estate plan in place including a will, a financial power of attorney, and an advance health care directive?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'estatePlan',
            answer: '',
          },
          {
            id: 21,
            question:
              'For any future major expenses (for example, buying a home or having a child), have you identified the amount of money needed and over what timeframe?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
            name: 'futureExpenses',
            answer: '',
          },
          {
            id: 22,
            question:
              'Are you on track to meet your goals for future major expenses and retirement?',
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
              { value: 'not sure', label: 'Not sure' },
            ],
            name: 'retirementGoals',
            answer: '',
          },
        ],
        prevStep: this.prevStep,
        nextStep: this.nextStep,
        updateQuestions: this.updateQuestions,
      },
    };
  }
  prevStep = () => {
    const state = this.state.context;
    if (state.count > 1) {
      this.setState({
        context: {
          ...state,
          progressBarWidth: state.progressBarWidth - 4.5,
          count: state.count - 1,
        },
      });
    }
  };
  nextStep = () => {
    const state = this.state.context;
    if (state.count >= 1 && state.count < 22) {
      this.setState({
        context: {
          ...state,
          progressBarWidth: state.progressBarWidth + 4.5,
          count: state.count + 1,
        },
      });
    }
  };
  updateQuestions = (value, name) => {
    const state = this.state.context;
    let { questions } = state;
    const selectedQuestion = questions.find(question => question.name === name);
    const selectedQuestionId = questions.findIndex(
      question => question.name === name
    );
    selectedQuestion.answer = value;
    questions = [
      ...questions.slice(0, selectedQuestionId),
      selectedQuestion,
      ...questions.slice(selectedQuestionId + 1),
    ];
    this.setState({
      context: {
        ...state,
        questions,
      },
    });
  };
  render() {
    return (
      <AppContext.Provider value={this.state.context}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
