import { listStatus,actionType } from '../constants/todoList'
import { asyncAdd } from '../services/todoList'
// import {actionType}  from '../constants/todoList'

export const todoList = 'todoList'

export default {
  namespace: todoList,
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
    ADD(state, action) {
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
    DONE(state, action) {
      return state.map(item => {
        if (item.id === action.id) {
          item.status = listStatus.DONE
        }
        return item
      })
    },
    WILLDO(state, action) {
      return state.map(item => {
        if (item.id === action.id) {
          item.status = listStatus.WILLDO
        }
        return item
      })
    },
    DEL(state, action) {
      return state.filter(item => item.id !== action.id)
    }
  },
  effects: {
    /**
     * *(action, effects) => void
     * 或
     * [*(action, effects) => void, { type }]
     */
    *addAsync(action, effects) {
      // console.log(action)
      const result = yield effects.call(asyncAdd, action.text)
      // console.log(result)
      yield effects.put({
        type:`${todoList}/${actionType.ADD}`,
        id: action.id,
        text: result,
        status: action.status
      })
    }
  },
  subscriptions: {

  }
};
