import React from 'react';
import usePizzaDataManager from './pizzaDataManager';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const {
    isLoading,
    pizzaList,
    togglePizzaFavorite,
    modifyPizza,
  } = usePizzaDataManager();

  const provider = {
    isLoading,
    pizzaList,
    togglePizzaFavorite,
    modifyPizza,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
