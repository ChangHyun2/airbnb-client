export const toCamelCase = (str) =>
  str
    .split('-')
    .map((sub, i) =>
      i !== 0 ? sub.slice(0, 1).toUpperCase() + sub.slice(1).toLowerCase() : sub
    )
    .join('');
