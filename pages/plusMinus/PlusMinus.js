import React from "react";
import { useSelector, useDispatch } from "react-redux";

function MainPage(){
    const title = useSelector(state => state.title)
    const dispatch = useDispatch()
    const changePlus = () => {
        dispatch({
            type: 'CHANGE_PLUS'
        })
    }
    const changeMinus = () => {
        dispatch({
            type: 'CHANGE_MINUS'
        })
    }
    return(
        <div>
            <h1>{title}</h1>
            <button onClick={changePlus}>+</button>
            <button onClick={changeMinus}>-</button>
        </div>
    )
}

export default MainPage