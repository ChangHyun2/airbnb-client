import { toCamelCase } from '@utils';

const palleteScheme = [
  'black',
  'black-1',
  'black-2',
  'black-3',
  'black-4',
  'black-5',
  'white',
  'white-grey-0',
  'white-grey-1',
  'grey-0',
  'grey-1',
  'grey-2',
  'grey-3',
  'grey-4',
  'grey-5',
  'grey-6',
  'grey-7',
  'grey-8',
  'primary',
  'primary-dark',
  'secondary',
  'secondary-dark',
  'facebook',
  'facebook-dark',
];

export const pallete = {};

palleteScheme.forEach((variable) => {
  pallete[variable.split('-').map(toCamelCase).join('')] = `var(--${variable})`;
});
