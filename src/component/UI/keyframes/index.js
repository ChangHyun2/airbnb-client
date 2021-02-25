import { keyframes } from '@emotion/react';

const slideInUp = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutDown = keyframes`
from {
  transform: translate3d(0, 0, 0);
}

to {
  transform: translate3d(0, -100%, 0);
}
`;

export { slideInUp, slideOutDown };
