// Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。

// Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
const init = {
    number: 0,
    numberOne: 0
}

// 返回结果，是完全由传入的参数state和action决定，这就是一个纯函数
// state: 指的是原始仓库里的状态。
// action: 指的是action新传递的状态。
//eslint-disable-next-line
export default (state = init, action) => {
    // alert(JSON.stringify(action))
    const {type, count} = action
    switch (type) {
        case 'addCount':
            // alert(JSON.stringify(action.count))
            return {...state,number : count+10}
        case 'reduceCount':
            return {...state,number : count-5}
        case 'increment':
            // alert(JSON.stringify(action.count))
            return {...state,numberOne : count+1}
        case 'decrement':
            return {...state,numberOne : count-1}
        default:
            return state
    }
}

// Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。
// 由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。
// 但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象
// return {...state,number : action.count+10}