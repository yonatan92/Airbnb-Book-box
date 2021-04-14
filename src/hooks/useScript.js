import React, { useState, useEffect, useRef } from 'react';

const useScript = (url) => {
  const scriptCache = useRef([]);
  const [state, setState] = useState({
    loaded: false,
    error: false,
  });

  useEffect(() => {
    if (scriptCache.current.includes(url)) {
      setState({ loaded: true, error: false });
    } else {
      scriptCache.current.push(url);
      let script = document.createElement('script');
      script.src = url;
      script.async = true;

      const onGetError = () => {
        setState({ loaded: true, error: true });
        const index = scriptCache.current.indexOf(url);
        if (index >= 0) scriptCache.current.splice(index, 1);
        script.remove();
      };

      const onGetLoadedSucces = () => {
        setState({ loaded: true, error: false });
      };

      script.addEventListener('load', onGetLoadedSucces);
      script.addEventListener('error', onGetError);

      document.body.appendChild(script);
    }
  }, [url]);
  return state;
};

export default useScript;
