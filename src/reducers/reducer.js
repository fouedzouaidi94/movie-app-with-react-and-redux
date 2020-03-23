import {ADD_TASK,DELETE_TASK,COMPLETE_TASK, EDIT_TASK, CHANGE_TASK} from "../constants/actiontypes";


const initialeState = []

const Reducer = (state = initialeState, action) => {

  switch (action.type) {
    case ADD_TASK:
        return state.concat(action.payload)

    case DELETE_TASK:
        return state.filter((task,i)=>i!==action.payload) 

    case COMPLETE_TASK : 
        return state.map((task,i)=> i===action.payload? {...task,done:!task.done}:task) 
    case EDIT_TASK : 
        return state.map((task,i)=> i===action.payload?{...task,edit:!task.edit}:task)
    case CHANGE_TASK:
        return state.map((task,i)=> i===action.index?{...task,txt:action.payload}:task)


        default:
        return state;
  }
};
export default Reducer;
