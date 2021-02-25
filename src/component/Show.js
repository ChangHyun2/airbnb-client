import { useMQContext } from '@context/global';

const Show = {
  onlyXs: ({ children }) => (useMQContext()['isOnlyXs'] ? children : null),
  overSm: ({ children }) => (useMQContext()['isOverSm'] ? children : null),
  underSm: ({ children }) => (useMQContext()['isUnderSm'] ? children : null),
  smToMd: ({ children }) => (useMQContext()['isSmToMd'] ? children : null),
  overMd: ({ children }) => (useMQContext()['isOverMd'] ? children : null),
  underMd: ({ children }) => (useMQContext()['isUnderMd'] ? children : null),
  overXl: ({ children }) => (useMQContext()['isOverXl'] ? children : null),
  underXl: ({ children }) => (useMQContext()['isUnderXl'] ? children : null),
};

export default Show;
