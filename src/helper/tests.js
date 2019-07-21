import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';
import messagesPl from 'l10n/pl.json';

export const renderWithIntl = (component, props) => {
  return render(
    <IntlProvider locale="pl" messages={messagesPl}>
      {React.createElement(component, props)}
    </IntlProvider>);
};
