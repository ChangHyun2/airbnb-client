import { useEffect, useState } from 'react';
import useDetectOverThresholdOnScroll from './useDetectOverThresholdOnScroll';

const getDistanceToViewport = (ref, topOffset) =>
  ref.current &&
  ref.current.getBoundingClientRect().top + window.scrollY + topOffset;

const useDetectSticked = (ref, stickyTop = 0) => {
  const [refOffsetTop, setRefOffsetTop] = useState(0);

  useEffect(() => {
    var distanceToViewport = getDistanceToViewport(ref, stickyTop);

    setRefOffsetTop(distanceToViewport);
  }, []);

  const sticked = useDetectOverThresholdOnScroll(refOffsetTop);

  return sticked;
};

export default useDetectSticked;
