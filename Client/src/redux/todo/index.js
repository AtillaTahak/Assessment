import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const defaultBaseUrl = 'http://0.0.0.0:5001/posts/';

export const todoAction = createAsyncThunk('todo/todo', async (baseUrl = defaultBaseUrl)=>{
    const req = await fetch(baseUrl);
    const todojson = req.json();
    return todojson;
})

export const todoPost = createAsyncThunk("todo/todoPost", async(getTitle)=>{
   
    const todoPosting = await fetch(defaultBaseUrl,{
        method: 'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({title:getTitle}),
    });
    return todoPosting;
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
        build.addCase(todoPost.pending,(state)=>{
            state.loading =true;
            state.error='';
        });
        build.addCase(todoPost.fulfilled,(state,action)=>{
            state.data.push(action.payload);
            state.loading=false;
        });
        build.addCase(todoPost.rejected, (state)=>{
            state.loading=false;
            state.error="Error fetching user data"
        })

    }
})

export const {addTodo}=todoSlice.actions;
export default todoSlice.reducer;