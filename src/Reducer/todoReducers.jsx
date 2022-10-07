
const initialState = {
    list : []
}

const todoReducers = (state = initialState , action) =>{
    switch(action.type){
        case "Add_Todo" :
            const {id , data} = action.payload;
        return{                                             // to return the data already stored in the initialState *important*
            ...state ,
            list : [
                ...state.list,
                {
                    id : id,
                    data : data
                }
            ]
        }
        case "Delete_Todo" :
            const newlist = state.list.filter((elem)=> (elem.id !== action.id))
        return{                                             // id recieved from delete btn will be filtered here and will return the newList as well the old state
            ...state , 
        
            list : newlist
        }
        case 'Edit_Todo':

            const updatedTodos = state.list.map((elem)=>{
                if(elem.id === action.payload.id){
                    return {...elem , data : action.payload.data}
                }
                return elem
            })
            return {
                ...state , 
                list : updatedTodos
            }

            
        default: return state;
    }
}

export default todoReducers                         //will be called from index.jsx in reducer