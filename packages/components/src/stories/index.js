import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import { injectGlobal } from 'styled-components';

injectGlobal`
*, html, body {
    padding: 0;
    margin: 0;
}
`

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

import './FinancialCheckup';