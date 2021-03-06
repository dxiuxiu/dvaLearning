import {actionType,listStatus}  from '../constants/todoList'

import {todoList} from '../models/todoList'
/**
 * @desc 将列表状态修改为已完成
 *
*/
export const willToDone = (id) => {
  return {
      // type: actionType.DONE,
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
      // type: actionType.WILLDO,
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
      // type: actionType.ADD,
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
      // type: actionType.DEL,
      type: `${todoList}/${actionType.DEL}`,
      id,
  }
}

export const addAsync = (text) =>{
  return {
    // type: 'todoList/addAsync',
    type: `${todoList}/${actionType.addAsync}`,
    id: Math.random(),
    text,
    status: listStatus.WILLDO

  }
}
