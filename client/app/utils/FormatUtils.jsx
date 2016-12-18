import { FormattedNumber, FormattedDate, FormattedTime } from 'react-intl';
import React from 'react';

export function formatCurrency(value, currency) {
  value = Math.round(value);
  return (<FormattedNumber value={value || 0} style="currency" currency={currency || "USD"} />);
}

export function formatDate(value) {
  return (<FormattedDate value={value} />);
}

export function formatTime(value) {
  return (<FormattedTime value={value} />);
}