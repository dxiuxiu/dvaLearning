import { connect } from 'dva'

import { willToDone, doneToWill, del, add } from '../../actions/todoList'
import  TodoList from '../../components/todoList'

function mapStateToProps(state, ownProps) {
  return {
    todoList: state.todoList
  }
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    willToDone: (id) => {
      dispatch(willToDone(id))
    },
    del: (id) => {
      dispatch(del(id))
    },
    doneToWill: (id) => {
      dispatch(doneToWill(id))
    },
    add: (text) => {
      // console.log('dispatch', text)
      dispatch(add(text))
      // dispatch({
      //   type: 'todoList/ADD',
      //   text,
      // })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
