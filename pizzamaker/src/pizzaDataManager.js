import { useEffect, useReducer } from 'react';
import axios from 'axios';
import pizzaReducer from './pizzaReducer';

function usePizzaDataManager() {
  const [{ isLoading, pizzaList }, dispatch] = useReducer(
    pizzaReducer,
    {
      isLoading: true,
      pizzaList: [],
    },
  );

  // eslint-disable-next-line
  const fetchData = async function () {
    const result = await axios.get('http://localhost:4000/pizzas');
    dispatch({ type: 'setPizzaList', data: result.data });
  };

  function togglePizzaFavorite(pizzaRec) {
    // eslint-disable-next-line
    const updateData = async function () {
      axios.put(`http://localhost:4000/pizzas/${pizzaRec.id}`, pizzaRec);
      if (pizzaRec.favorite === true) {
        dispatch({ type: 'unfavorite', id: pizzaRec.id });
      } else {
        dispatch({ type: 'favorite', id: pizzaRec.id });
      }
    };
    updateData();
  }

  function modifyPizza(pizzaRec) {
    // eslint-disable-next-line
    const updatePizza = async function () {
      await axios.put(`http://localhost:4000/pizzas/${pizzaRec.id}`, pizzaRec);
      dispatch({ type: 'modify', pizzaRec });
    };
    updatePizza();
  }

  useEffect(() => {
    fetchData();

    return () => {
      // eslint-disable-next-line
      console.log('cleanup');
    };
  }, []);

  return {
    isLoading,
    pizzaList,
    togglePizzaFavorite,
    modifyPizza,
  };
}

export default usePizzaDataManager;
