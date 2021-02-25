import { useEffect, useState, useRef } from 'react';

const useMQ = (query) => {
  const mqlRef = useRef(window.matchMedia(query));
  const [state, setState] = useState(mqlRef.current.matches);

  const handleOnChange = () => setState(!!mqlRef.current.matches);

  useEffect(() => {
    mqlRef.current.addEventListener('change', handleOnChange);

    return () => {
      mqlRef.current.removeEventListener('change', handleOnChange);
    };
  }, [query]);

  return state;
};

export default useMQ;
