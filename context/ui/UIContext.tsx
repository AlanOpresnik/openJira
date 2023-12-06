import { createContext } from "react";

interface ContextProps {
    sideMenuOpen: boolean;
    isDragging: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void;
    endDragging: () => void;
    startDragging: () => void;
    isAddingEntry: boolean;
  }

export const UIContext = createContext({} as ContextProps);
