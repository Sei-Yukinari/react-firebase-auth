import moment from 'moment';

export const format = (date: Date | string) =>
  moment(date).format('YYYY/MM/DD HH:mm');
