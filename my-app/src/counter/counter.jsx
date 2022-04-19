import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = props => {
    //access redux reducer state
    //appState.reducer.reducerState
   const value= useSelector(state=>state.counter.value)
   const dispatch = useDispatch();
   const onIncrement = evt => {
      //dispatch action to Redux
       dispatch({type:'counter/increment'})
   }
    return <div>
        <h1>Counter App {value}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}

export {Counter}