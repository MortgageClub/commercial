import { FormattedNumber, FormattedDate } from 'react-intl';
import React from 'react';

export function formatDate(value) {
  if(value){
    return (<FormattedDate value={value} />);
  }
  return "";
}

export function formatCurrency(value) {
  console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value));
  return value;
}