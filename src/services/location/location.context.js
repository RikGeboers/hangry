import react, { useState, createContext, useEffect, useMemo } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext();
export const LocationContextProvider = ({ children }) => {
  const [keyWord, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyWord) => {
    setIsLoading(true);
    setKeyword(searchKeyWord);
  };
  useEffect(() => {
    if (!keyWord.length) {
      //don't do anything
      return;
    }
    locationRequest(keyWord.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyWord]);
  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyWord }}
    >
      {children}
    </LocationContext.Provider>
  );
};
