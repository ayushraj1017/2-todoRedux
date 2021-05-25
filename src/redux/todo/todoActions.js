import { ADD_ITEM, CHECKED_ITEM, CLEAR_LIST } from "./todoTypes"




export const addItem=(data)=>{
    return{
        type:ADD_ITEM,
        payload:{
            id:Math.floor(Math.random()*10000),
            data:data
    }
}
}

export const checkedItem=(id)=>{
    return{
        type:CHECKED_ITEM,
        payload:id
    }
}

export const clearList=()=>{
    return{
        type:CLEAR_LIST,

    }
}

