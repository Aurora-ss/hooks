const init = {
    number: 0
}

//eslint-disable-next-line
export default (state = init, action) => {
    switch (action.type) {
        case 'addCount':
            return {...state,number : action.count+10}
        case 'reduceCount':
            return {...state,number : action.count-5}
        default:
            return state
    }
}
