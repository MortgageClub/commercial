import { FormattedDate } from 'react-intl';
import React from 'react';

export function formatDate(value) {
  if(value){
    return (<FormattedDate value={value} />);
  }
  return "";
}

export function formatCurrency(value) {
  return value;
}