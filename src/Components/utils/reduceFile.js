export const initialState = {
  theme: "light",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE-THEME": {
      const estado = state.theme == "light" ? "dark" : "light"
      return {
        ...state,
        theme: estado
      };
    }

    case "LOAD-DATA": {
      return { ...state, data: action.payload };
    }

    case "ADD-FAV": {
      const itemFound = state.favs.find((item) => item.id == action.payload.id);
      if (itemFound) {
        alert("Ya está agregado a favoritos")
        return state;
      }

      const newFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(newFavs))
      return {
        ...state,
        favs: newFavs
      }
    }

    case "CLEAN-FAVS": {
      localStorage.removeItem("favs")
      return {
        ...state, favs: []
      }
    }

    default:
      throw new Error("Action not allowed");
  }
};
