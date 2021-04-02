//  react-redux 7.1之后也可以使用useSelector、useDispatch等HooksApi替代connect，减少模板代码
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {add, reduce,increment,decrement} from './store/action'

const App = () => {
  // useSelector会根据接受的函数返回需要的状态值，如下面的number
  const number = useSelector(state => state.number)
  const numberOne = useSelector(state => state.numberOne)
  // useDispatch会返回一个操作函数，返回ES的操作函数可以接收一个action执行状态值的修改
  const dispatch = useDispatch()
  return (
      <div>
        <div>{ number }</div>
        <button onClick={() => { dispatch(add(number)) }}>增加10</button>
        <button onClick={() => { dispatch(reduce(number)) }}>减少5</button>

        <div>{ numberOne }</div>
        <button onClick={() => { dispatch(increment(numberOne)) }}>增加</button>
        <button onClick={() => { dispatch(decrement(numberOne)) }}>减少</button>
      </div>
    )
}

export default App