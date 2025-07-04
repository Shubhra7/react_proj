import { createSlice, nanoid } from "@reduxjs/toolkit";
//  nanoid ==> for generating the unique id 


// At intital the Store will have inital values so
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}
 
// Slice is the big version of reducer
export const todoSlice = createSlice({
    name: 'todo', // this name will show in chrome extension 
    initialState,  
    // in Context api we can do the definition later but in redux we have to do it in the time of declaration

    reducers: {
        
        // state=> give inital value  action=> given by us, like to remove Todo we need to give the id 
        addTodo: (state, action)=> {
            const todo = {
                id: nanoid(),
                text: action.payload // payload is a object which can contain anything
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload )
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer

