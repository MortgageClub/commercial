import { FormattedNumber, FormattedDate } from 'react-intl';
import React from 'react';

export function formatCurrency(value, currency) {
  value = Math.round(value);
  return (<FormattedNumber value={value || 0} style="currency" currency={currency || "USD"} />);
}

export function formatDate(value) {
  return (<FormattedDate value={value} day="numeric" month="long" year="numeric" />);
}