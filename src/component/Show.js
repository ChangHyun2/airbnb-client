import { useMQContext } from '@context/global';

const Show = {
  onlySm: ({ children }) => (useMQContext()['isOnlyXs'] ? children : null),
  overSm: ({ children }) => (useMQContext()['isOverSm'] ? children : null),
  smToMd: ({ children }) => (useMQContext()['isSmToMd'] ? children : null),
  overMd: ({ children }) => (useMQContext()['isOverMd'] ? children : null),
  underMd: ({ children }) => (useMQContext()['isUnderMd'] ? children : null),
};

export default Show;
