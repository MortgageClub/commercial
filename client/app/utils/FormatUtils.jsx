import { FormattedDate } from 'react-intl';
import React from 'react';

export function formatDate(value) {
  return (<FormattedDate value={value} />);
}

export function formatCurrency(value) {
  return value;
}