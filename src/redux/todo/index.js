import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const todoAction = createAsyncThunk('todo/todo', async ()=>{
    const req = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todojson = req.json();
    return todojson;
})

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        data:[],
        loading:false,
        error:null,
    },
    reducers:{
        addTodo:(state,action)=>{
            state.data.push(action.payload);
        }
    },
    extraReducers: (build)=>{
        build.addCase(todoAction.pending,(state)=>{
            state.loading =true;
            state.error='';
        });
        build.addCase(todoAction.fulfilled,(state,action)=>{
            state.data =action.payload;
            state.loading=false;
        });
        build.addCase(todoAction.rejected, (state)=>{
            state.loading=false;
            state.error="Error fetching user data"
        })

    }
})

export const {addTodo}=todoSlice.actions;
export default todoSlice.reducer;