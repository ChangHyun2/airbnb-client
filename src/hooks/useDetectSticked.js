import { useEffect, useState } from 'react';
import { useDetectOverThresholdOnScroll } from './useDetectOverThresholdOnScroll';

const getDistanceToViewport = (ref, offset) =>
  ref.current.getBoundingClientRect().top + window.scrollY + offset;

// detail!
export const useDetectSticked = (ref, offsetStickyTop = 0) => {
  const [refOffsetTop, setRefOffsetTop] = useState(0);

  useEffect(() => {
    var distanceToViewport = getDistanceToViewport(ref, offsetStickyTop);

    setRefOffsetTop(distanceToViewport);
  }, []);

  const sticked = useDetectOverThresholdOnScroll(refOffsetTop);

  return sticked;
};
