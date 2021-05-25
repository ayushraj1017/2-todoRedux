import React from 'react'
import { useDispatch } from 'react-redux'
import { checkedItem } from '../redux';


const Todo = ({...todo}) => {
    const dispatch=useDispatch();
    return (
        <div className="m-1">
            <div key={todo.id}>
                <li className="capitalize bg-yellow-500 p-2 text-yellow-100 flex justify-between items-center ">{todo.data}
                <div className="m-2 ml-2">
                    <button onClick={()=>dispatch(checkedItem(todo.id))}
                    className="bg-blue-500 text-blue-100 p-2">Delete</button>
                </div>
                </li>
                
            
            </div>
        </div>
    )
}

export default Todo
