import { padXs, padMd, padLg } from './values';
import { over } from './mediaQuery';
import * as alignChild from './alignChild';
import * as alignSelf from './alignSelf';
console.log(alignChild);

export const baseButton = `
  display: inline-block;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
  cursor: pointer;
  background: none;
  font-size: inherit;
`;

export const baseLink = `
  text-decoration:none;
  color:inherit;
`;

export const baseImageWrapper = `
  img{
    display:block;
    width: 100%;
    height: 100%;
  }
`;

const pad = [padXs, padMd, padLg];
export const baseContainer = (options = {}) => {
  const { align, xs = true, md = true, lg = true } = options;

  return `
    ${align ? alignChild[align] : ''}
    width: 100%;
    margin: 0 auto;
    ${Object.entries({ xs, md, lg })
      .map(([bp, isBp], i) =>
        isBp
          ? over[bp](`
            padding-right: ${pad[i]};
            padding-left: ${pad[i]};
          `)
          : ''
      )
      .join('')}
  `;
};

export const baseSection = (mb = 'mb4') => `
  ${baseContainer()}
  ${mb ? alignSelf[mb] : ''}  
`;

export const baseSnapScroller = ({
  padding = padXs,
  gap = '10px',
  offset = '100px',
  row = 1,
  col,
}) => {
  const styles = [
    `
      display: grid;
      scroll-snap-type: x mandatory;
      overflow-x: auto;
      scroll-behavior: smooth;

      & > li {
        scroll-snap-align: start;
      }
    `,
  ];

  if (padding) {
    styles.push(`
      padding: 0 ${padding};
      scroll-padding: 0 ${padding};
    `);
  }

  if (col) {
    styles.push(`
      --column-count: ${col};
      grid-template-rows: repeat(${row}, auto);
      grid-template-columns: repeat(calc(var(--column-count) - 1), calc(100% - ${offset})) 100%;
      grid-auto-flow: column;
    `);
  }

  if (gap) {
    styles.push(`
      gap: ${gap};
    `);
  }

  return styles.join('');
};
