import { ADD_ITEM, CHECKED_ITEM, CLEAR_LIST } from "./todoTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
        const{id,data}=action.payload
      return {
        ...state,
        todos:[
            ...state.todos,
            {
                id,
                data,


        }]
      };
    case CHECKED_ITEM:
        let newList=state.todos.filter((todo)=>todo.id!==action.payload)
      return {
          ...state,
          todos:newList
      };
    case CLEAR_LIST:
      return {
          ...state,
          todos:[]
      };

    default:return state;
  }
};

export default todoReducer;
