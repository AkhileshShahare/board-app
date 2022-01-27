import { v4 as uuid } from "uuid";
import * as actionTypes from "./actionTypes";
import { cloneDeep } from "lodash";

const initialState: CardsState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ taskId: "c0", text: "Developing new UI" }]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ taskId: "c2", text: "Unit Tests" }]
    },
    {
      id: "2",
      text: "Done",
      tasks: []
    }
  ]
};

interface Item {
  id: string;
}

const findItemIndexById = (items: Item[], id: string) =>
  items.findIndex((item) => item.id === id);

const reducer = (
  state: CardsState = initialState,
  action: CardAction
): CardsState => {
  switch (action.type) {
    case actionTypes.ADD_CARD:
      let updatedState = cloneDeep(state.lists);
      const targetColumnIndex = findItemIndexById(
        state.lists,
        action.payload.taskId
      );
      updatedState[targetColumnIndex].tasks.unshift({
        taskId: uuid(),
        text: action.payload.text
      });
      return {
        ...state,
        lists: updatedState
      };
    case actionTypes.CHANGE_CARD_TEXT: {
      let updatedState = cloneDeep(state.lists);

      const targetColumnIndex = findItemIndexById(
        state.lists,
        action.payload.listId?.toString() || ""
      );
      const task = updatedState[targetColumnIndex].tasks.find(
        (x) => x.taskId === action.payload.taskId
      );
      if (task) task.text = action.payload.text;

      return {
        ...state,
        lists: updatedState
      };
    }
    case actionTypes.REMOVE_CARD: {
      let updatedState = cloneDeep(state.lists);

      const targetColumnIndex = findItemIndexById(
        state.lists,
        action.payload.listId?.toString() || ""
      );
      updatedState[targetColumnIndex].tasks = updatedState[targetColumnIndex].tasks.filter(
        function (el) {
          return el.taskId != action.payload.taskId;
        }
        // (x) => x.taskId !== action.payload.taskId
      );
      return {
        ...state,
        lists: updatedState
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
