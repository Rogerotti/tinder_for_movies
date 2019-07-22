import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'components/appContainer';
import { IntlProvider, addLocaleData } from 'react-intl';
import messagesPl from 'l10n/pl.json';
import messagesEn from 'l10n/en.json';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

addLocaleData([...en, ...pl]);

const messages = {
  'pl': messagesPl,
  'en': messagesEn
};

document.body.style.overflow = 'hidden';
ReactDOM.render(
  <IntlProvider locale="pl" messages={messages.pl}>
    <AppContainer />
  </IntlProvider>,
  document.getElementById('index')
);
