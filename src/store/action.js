// Action就是一个对象，这个对象一般有两个属性，
// 第一个是对Action的描述，第二个是要改变的值
export const add = (count) => {
    // 改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。
    // dispatch是View 发出 Action 的唯一方法
    return (dispatch) => {
        (() => {
            // console.log('123',count)
            dispatch({
                type : 'addCount',
                count 
            })
        })()
    }
}

export const reduce = (count) => {
    return (dispatch) => {
        (() => {
            dispatch({
                type : 'reduceCount',
                count 
            })
        })()
    }
}

export const  increment = (count) => {
    // 改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。
    // dispatch是View 发出 Action 的唯一方法
    return (dispatch) => {
        (() => {
            // console.log('123',count)
            dispatch({
                type : 'increment',
                count 
            })
        })()
    }
}

export const decrement = (count) => {
    return (dispatch) => {
        (() => {
            dispatch({
                type : 'decrement',
                count 
            })
        })()
    }
}