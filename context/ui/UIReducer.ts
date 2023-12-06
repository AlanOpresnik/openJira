import { UIState } from './UIProvider';

type UIActionType =
  | { type: 'UI - Close sidebar' }
  | { type: 'UI - open sidebar' }
  | { type: 'UI - settisAddingEntry', payload:boolean }
  | { type: 'UI - Start Dragging',}
  | { type: 'UI - End Dragging',}

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - open sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
    case 'UI - Close sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
      case 'UI - settisAddingEntry':
        return{
            ...state,
            isAddingEntry: !state.isAddingEntry,
        }
        case 'UI - Start Dragging':
          return{
              ...state,
              isDragging: true,
          }
          case 'UI - End Dragging':
            return{
                ...state,
                isDragging: false,
            }
    default:
      return state;
  }
};