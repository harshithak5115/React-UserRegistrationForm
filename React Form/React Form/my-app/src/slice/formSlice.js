import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_FORM_STATE={
    name:'',
    age:'',
    email:'',
    phone:'',
    submitted:false,
    errors:{}
   
  }



export const form = createSlice({
  name: 'register',
  initialState: DEFAULT_FORM_STATE,
  reducers: {
    reset: state => DEFAULT_FORM_STATE ,
    submit: state => {
       if(state.name && state.age && state.email && state.phone) {
        state.submitted =true ;
        state.errors={}
        
       }
       else{
           if(state.name===''){
               state.errors['name']="Name cannot be empty"
           }
           if(state.age===''){
            state.errors['age']="Age cannot be empty"
        }
        if(state.email===''){
            state.errors['email']="Email cannot be empty"
        }
        if(state.phone===''){
            state.errors['phone']="Phone number cannot be empty"
        }
       }

        
      
    },
    updateForm: (state, action) => 
        ({...state, ...action.payload})
      
    
  },
});

export const { reset, submit, updateForm } = form.actions;

export default form.reducer;
