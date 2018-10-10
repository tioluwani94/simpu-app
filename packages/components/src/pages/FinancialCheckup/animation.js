import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const ShowAnimationContainer = styled.div`
  .animated-enter {
    transform: translateX(-100%);
  }

  .animated-enter-active {
    transform: translateX(0);
    transition: transform 220ms cubic-bezier(0.2, 0, 0, 1);
  }

  .animated-exit {
    transform: translateX(0);
  }

  .animated-exit-active {
    transform: translateX(-100%);
    transition: transform 220ms cubic-bezier(0.2, 0, 0, 1);
  }
`;

export class ShowAnimation extends React.Component {
  state = {
    show: false,
  };
  toggleShow = () => {
    this.setState(({ show }) => ({ show: !show }));
  };
  render() {
    const { show } = this.state;
    return (
      <ShowAnimationContainer>
        <button onClick={this.toggleShow}>Show me</button>
        <CSSTransition
          in={show}
          classNames="animated"
          unmountOnExit
          timeout={300}
        >
          <p>Animated</p>
        </CSSTransition>
      </ShowAnimationContainer>
    );
  }
}
