import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProgressBar } from '../pages/FinancialCheckup/components';
import { Radio } from '../primitives/Radio';
import { Div } from '../primitives/Layout';

storiesOf('Financial checkup page', module)
  .add('Progress bar', () => <ProgressBar />)
  .add('Radio button', () => (
    <Div>
      <Radio label="Yes" value="Yes" name="age" />
      <Radio label="No" value="No" name="age" />
    </Div>
  ));
