import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {add, reduce} from './store/action'

const App = () => {
  const number = useSelector(state => state.number)
  
  const dispatch = useDispatch()
  return (
      <div>
        <div>{ number }</div>
        <button onClick={() => { dispatch(add(number)) }}>增加10</button>
        <button onClick={() => { dispatch(reduce(number)) }}>减少5</button>
      </div>
    )
}

export default App