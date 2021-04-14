import React, { useRef, useEffect } from 'react';
import useScript from './useScript';
const key = 'AIzaSyCdtGPc2gg0Wh8UWRWDGDy8ChwLNyB5DnI';
const scriptUrl = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;

const useLocationGoogle = () => {
  const autoCompleteLocationService = useRef(null);
  const { loaded, error } = useScript(scriptUrl);

  useEffect(() => {
    if (loaded) {
      autoCompleteLocationService.current = new window.google.maps.places.AutocompleteService();
    }
  }, [loaded]);

  const suggest = (str, types = ['(cities)']) => {
    return new Promise((resolve, reject) => {
      const request = {
        input: str,
        types,
      };
      autoCompleteLocationService.current.getPlacePredictions(
        request,
        (response) => {
          if (response) {
            resolve(response);
          }
        }
      );
    });
  };
  return [suggest, loaded, error];
};

export default useLocationGoogle;
