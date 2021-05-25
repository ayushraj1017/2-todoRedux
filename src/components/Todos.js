import React, { useState } from 'react'
import {connect, useDispatch} from 'react-redux'
import {addItem,clearList} from '../redux/index'
import Todo from './Todo'
import {useSelector} from 'react-redux'

const Todos = () => {

    const itemList = useSelector(state => state.todos)
    const [todo, setTodo] = useState('');
    const dispatch=useDispatch();

    const submitHandle=(e)=>{
        e.preventDefault();
        dispatch(addItem(todo))
        setTodo('')

    }

    const clearListItems=()=>{
        dispatch(clearList())
    }




    return (
        <div className="bg-blue-200 flex flex-col justify-center items-center h-screen">
        <div className="m-4">
            <form onSubmit={submitHandle}>
            <input className="p-2 "
            type="text" value={todo} onChange={e=>setTodo(e.target.value)} />
            <button className="p-2 bg-yellow-500 text-yellow-100">Add item</button>
            </form>
        </div>
        <ul className="mb-4">
        {itemList.map((todo)=>{
            return <Todo key={todo.id} {...todo}/>
        })}
        
        </ul>
        
            <button onClick={clearListItems}
            className="p-2 bg-red-500 text-red-100 mt-8">Clear List</button>
        </div>
    )
}



export default (Todos)
