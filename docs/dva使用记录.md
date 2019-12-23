# 

## 编写 model

```javascript
import { listStatus } from '../constants/todoList'

export const todoList = 'todoList'
export default {
  namespace:todoList,
  state: [
    {
      id: 0.186864004695098,
      status: listStatus.WILLDO,
      text: "sbfynhjum1111"
    },
    {
      id: 0.186866666695098,
      status: listStatus.WILLDO,
      text: "vxbgym666"
    },
    {
      id: 0.186865004695778,
      status: listStatus.DONE,
      text: "5555555"
    },
    {
      id: 0.1861115004695778,
      status: listStatus.DONE,
      text: "fffff9999999999"
    }
  ],
  reducers: {
    ADD (state, action) {
      // console.log(state,action)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          status: action.status
        }
      ]
    },
    DONE (state,action) {
      return state.map(item => {
        if (item.id === action.id) {
          item.status = listStatus.DONE
        }
        return item
      })
    },
    WILLDO (state,action) {
      return state.map(item => {
        if (item.id === action.id) {
          item.status = listStatus.WILLDO
        }
        return item
      })
    },
    DEL (state,action) {
      return state.filter(item => item.id !== action.id)
    }
  },
};
```

## 编写 action

```javascript
import {actionType,listStatus}  from '../constants/todoList'
import {todoList} from '../models/todoList'
/**
 * @desc 将列表状态修改为已完成
 *
*/
export const willToDone = (id) => {
  return {
      type: `${todoList}/${actionType.DONE}`,
      id,
  }
}

/**
* @desc 将列表状态修改为 已完成
*
*/
export const doneToWill = (id) => {
  return {
      type: `${todoList}/${actionType.WILLDO}`,
      id,
  }
}
/**
* @desc 将列表状态修改为 已完成
*
*/
export const add = (text) => {
  return {
      type: `${todoList}/${actionType.ADD}`,
      id: Math.random(),
      text,
      status: listStatus.WILLDO
  }
}
/**
* @desc 将列表状态修改为 已完成
*
*/
export const del = (id) => {
  return {
      type: `${todoList}/${actionType.DEL}`,
      id,
  }
}
```
##  关于 action 的 type

对应 action 中的 type 值应该为 `对应 model 的 namespace 属性值 / reducer.x`

即 如果想触发 reducers 中的 ADD (reducers.ADD)

```javascript
export default {
  reducers: {
    ADD (state, action) {
      // console.log(state,action)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          status: action.status
        }
      ]
    }
  }
};
```

应该

```javascript
import {actionType,listStatus}  from '../constants/todoList'
import {todoList} from '../models/todoList'

const action = {
      type: `${todoList}/${actionType.ADD}`, // 'todoList/ADD'
      id: Math.random(),
      text,
      status: listStatus.WILLDO
}
dispatch(action)
```
