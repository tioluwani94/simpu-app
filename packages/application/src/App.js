import React, { Component } from 'react';
import { AppProvider, AppContext } from 'components/src/pages/FinancialCheckup/components';
import FinancialCheckupPage from 'components/src/pages/FinancialCheckup';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <AppContext.Consumer>
          {state => {
            return <FinancialCheckupPage state={state} />;
          }}
        </AppContext.Consumer>
      </AppProvider>
    );
  }
}

export default App;
