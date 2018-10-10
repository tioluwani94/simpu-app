import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  ProgressBar,
  Question,
  AppContext,
  AppProvider,
} from '../pages/FinancialCheckup/components';
import { Radio } from '../primitives/Radio';
import { Div } from '../primitives/Layout';
import FinancialCheckupPage from '../pages/FinancialCheckup';
import { ShowAnimation } from '../pages/FinancialCheckup/animation';

storiesOf('Financial checkup page', module)
  .add('Progress bar', () => <ProgressBar />)
  .add('Radio button', () => (
    <Div>
      <Radio
        label="Yes"
        input={{
          name: 'age',
          value: 'yes',
          onChange: e => {
            console.log(e.target.value);
          },
        }}
        meta={{ touched: 'false' }}
        autocomplete="age"
        id="yes"
      />
      <Radio
        label="No"
        input={{
          name: 'age',
          value: 'no',
          onChange: e => {
            console.log(e.target.value);
          },
        }}
        meta={{ touched: 'false' }}
        autocomplete="age"
        id="no"
      />
    </Div>
  ))
  .add('Question type', () => (
    <Question
      question="Do you live in Nigeria?"
      onChange={val => console.log(val)}
      options={[{ value: 'Yes', label: 'Yes' }, { value: 'No', label: 'No' }]}
      name="country"
    />
  ))
  .add('Financial Checkup Page', () => (
    <AppProvider>
      <AppContext.Consumer>
        {state => {
          return <FinancialCheckupPage state={state} />;
        }}
      </AppContext.Consumer>
    </AppProvider>
  ))
  .add('Animation test', () => (
    <ShowAnimation/>
  ));
