import React from 'react';
import { format } from 'date-fns';

const DateDisplay = ({ date, formatString }) => {
  return <span>{format(date, formatString)}</span>;
};

export default DateDisplay;
