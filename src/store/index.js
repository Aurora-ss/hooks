// 引入createStore创建数据存储仓库
import { createStore, applyMiddleware, compose } from 'redux'
//处理redux的异步任务的中间件
import thunk from 'redux-thunk'
import reducer from './reducer'

// 有了Redux-thunk之后，可以在action里写业务逻辑；之前是不可以的
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    // 配置Redux Dev Tools插件
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store