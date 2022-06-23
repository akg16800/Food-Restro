import React, {
  useContext,
  useEffect,
  createContext,
  useMemo,
  useState,
} from "react";
// import { useSafeAreaFrame } from "react-native-safe-area-context";
import { restaurantsRequest, restaurantsTransform } from "./Restaurant.service";
import { LocationContext } from "./location/location.context";

export const RestaurantContext = createContext();

export const RestarauntContextProvider = ({ children }) => {
  const [restaraunts, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaraunts = (loc) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setLoading(false);
          console.log(results);
          setRestaurants(results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaraunts(locationString);
    }
    // retrieveRestaraunts();
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaraunts,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
