import React from 'react';
import styled from 'styled-components';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { ProgressBar, Question } from './components';
import { Div } from '../../primitives/Layout';
import Icon from '../../primitives/Icon';
import icons from '../../primitives/Icon/icons';
import { Heading } from '../../primitives/Text';
import Transition from 'react-transition-group/Transition';
import { Button } from '../../primitives/Button';
import space from '../../design-system/spacing';

function FadeAndSlideTransition({ children, duration, in: inProp }) {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: 'opacity, transform',
  };
  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: 'translateX(-10%)',
    },
    entered: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    exiting: {
      opacity: 0,
    },
  };
  return (
    <Transition
      in={inProp}
      timeout={{
        enter: 0,
        exit: duration,
      }}
    >
      {status => {
        if (status === 'exited') {
          return null;
        }

        const currentStyles = transitionStyles[status];
        return React.cloneElement(children, {
          style: Object.assign({}, defaultStyle, currentStyles),
        });
      }}
    </Transition>
  );
}

function SlideDownTransition({ children, duration, in: inProp }) {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: 'opacity, transform',
  };
  const transitionStyles = {
    entering: {
      opacity: 0,
      transform: 'translateY(10%)',
    },
    entered: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    exiting: {
      opacity: 0,
      transform: 'translateY(10%)',
    },
  };
  return (
    <Transition
      in={inProp}
      timeout={{
        enter: 0,
        exit: duration,
      }}
    >
      {status => {
        if (status === 'exited') {
          return null;
        }

        const currentStyles = transitionStyles[status];
        return React.cloneElement(children, {
          style: Object.assign({}, defaultStyle, currentStyles),
        });
      }}
    </Transition>
  );
}

const FinancialCheckupStyle = styled.div`
  .header {
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 2px 10px rgba(0, 0, 0, 0.06);
    padding: 24px;
    z-index: 10;

    h1 {
      padding-right: 32px;
    }
    a {
      padding-left: 64px;
      display: inline-block;
      color: #aaa;
      text-decoration: none;
      svg {
        fill: currentColor;
      }
    }
  }
  .questions-sections {
    max-width: 640px;
    margin: 240px auto;
  }
  .footer-section {
    position: fixed;
    height: 95px;
    width: 100%;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 32px 0;
    button {
      display: flex;
      align-items: center;
    }
    button:first-of-type {
      &:hover {
        color: #aaa;
      }
      svg {
        fill: #ddd;
      }
    }
    button:last-of-type {
      svg {
        fill: #ffffff;
      }
    }
  }
`;

class FinancialCheckupPage extends React.Component {
  render() {
    const {
      state: {
        questions,
        count,
        prevStep,
        nextStep,
        updateQuestions,
        progressBarWidth,
      },
    } = this.props;
    return <FinancialCheckupStyle>
        <Div className="header">
          <Heading>Simpu</Heading>
          <ProgressBar width={progressBarWidth} />
          {/* <a href="#"> */}
            <Icon icon={icons.ANDROID_CLOSE} height="32" width="32" />
          {/* </a> */}
        </Div>
        <Div className="questions-sections">
          <TransitionGroup>
            {questions.map((value, index) => {
              if (count === value.id) {
                return <FadeAndSlideTransition duration={150} key={index}>
                    <Question question={value.question} onChange={updateQuestions} options={value.options} name={value.name} value={value.answer} isChecked={val => val === value.answer} />
                  </FadeAndSlideTransition>;
              }
            })}
          </TransitionGroup>
        </Div>

        <Div className="footer-section">
          <Button kind="ghost" color={`#ddd`} onClick={prevStep}>
            <Icon icon={icons.IOS_ARROW_BACK} />
            Go back
          </Button>

          <Button size="lg" onClick={nextStep} background={`linear-gradient(to bottom, #759BE7 0%, #8989F6 100%) !important`} boxShadow={`0 2px 2px 0 rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(0, 0, 0, 0.1)`}>
            Next Question <Icon icon={icons.IOS_ARROW_FORWARD} />
          </Button>
        </Div>
      </FinancialCheckupStyle>;
  }
}

export default FinancialCheckupPage;
