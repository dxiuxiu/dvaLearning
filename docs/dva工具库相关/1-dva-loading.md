# dva-loading

[dva-loading](https://www.jianshu.com/p/fd41c3383978)

## 安装依赖

```shell
yarn add dva-loading
# or
npm install dev-loading
```

## dva-loading 引入

```javascript
import createLoading from 'dva-loading'
app.use(createLoading())
```

## dva-loading 使用 - 利用 dva-loading 实现 loading

### 使用 app.use(createLoading()) 之后 reducer 的 state 中会增加一个 loading 属性


### 在需要使用 loading 的组件中获取到它

我这里是通过容器组件中将这个 loading 属性传递给需要使用它的组件中的

```javascript

function mapStateToProps(state, ownProps) {
  // console.log(state)
  return {
    loading:state.loading
  }
}
```

### 组件拿到 loading 属性后通过它可以检测指定的异步请求的状态以此来判断对应组件的 loading 状态

这里以异步请求 `addAsync` 为例

#### model 代码

```javascript
import { listStatus,actionType } from '../constants/todoList'
import { asyncAdd } from '../services/todoList'
export const todoList = 'todoList'
export default {
  namespace: todoList,
  reducers: {
    ADD(state, action) {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          status: action.status
        }
      ]
    }
  },
  effects: {
    *addAsync(action, effects) {
      const result = yield effects.call(asyncAdd, action.text)
      // console.log(result)
      yield effects.put({
        type:`${todoList}/ADD`,
        id: action.id,
        text: result,
        status: action.status
      })
    }
  }
};
```

#### 需要使用 loading 属性的组件

```javascript
import { Spin } from 'antd'
export default class TodoList extends React.Component {
  render() {
    const loading = this.props.loading.effects['todoList/addAsync']
    return (
      <Spin spinning={!!loading}>
        <div>
          <h1>todoList</h1>
        </div>
      </Spin>
    )
  }
}
```

`注意点`: `loading.effects['todoList/addAsync']` 的 key 值

这里 loading.effects['todoList/addAsync'] 就会拿到 namespace 为 'todoList' 的 model 中的名称为 addAsync 的异步请求的状态(true/false),当指定的异步请求不存在就会返回 undefined
