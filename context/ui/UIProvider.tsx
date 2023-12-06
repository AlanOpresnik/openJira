import { FC, useReducer } from "react";
import { UIContext } from "./UIContext";
import { UIReducer } from "./UIReducer";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry:boolean;
  isDragging:boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry:false,
  isDragging:false,
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);
  
  const openSideMenu = () => {
    dispatch({
      type: "UI - open sidebar",
    });
  };
  const closeSideMenu = () => {
    dispatch({
      type: "UI - Close sidebar",
    });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({
      type: "UI - settisAddingEntry",
      payload: isAdding,
    });
  };

  const startDragging = () => {
    dispatch({ type: "UI - Start Dragging" }); // Corregido aquí
  };
  const endDragging = () => {
    dispatch({ type: "UI - End Dragging" }); // Corregido aquí
  };

  return (
    <UIContext.Provider
    value={{
      sideMenuOpen: state.sidemenuOpen,
      openSideMenu,
      closeSideMenu,
      setIsAddingEntry,
      startDragging,
      endDragging,
      isAddingEntry: state.isAddingEntry,
      isDragging: state.isDragging, // Agregado aquí
    }}
  >
      {children}
    </UIContext.Provider>
  );
};
