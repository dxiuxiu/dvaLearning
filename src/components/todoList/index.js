
import React from 'react'
import PropTypes from 'prop-types'
import WillDo from '../../components/todoList/willDo'
import Done from '../../components/todoList/done'
import { listStatus } from '../../constants/todoList'
import { Spin } from 'antd'


export default class TodoList extends React.Component {
  input // 输入框
  // constructor(props: IProps) {
  //     super(props)
  // }

  componentDidMount() {
    /** 组件挂载成功后让 input 获取焦点 */
    this.input.focus();
  }

  /**
   * @desc 回车事件监听
   *
   * @memberof App
   */
  handleEnterKey = (e) => {
    const keyCode = e.nativeEvent.keyCode
    if (keyCode === 13) {
      this.add(this.input.value)
      this.input.value = ''
    }
  }


  /**
   * @desc 添加 todoList 项
   *
   * @memberof App
   */
  add = (text) => {
    this.props.add(text)
  }


  /**
   * @desc 创建已完成项列表
   *
   * @memberof App
   */
  createDone = () => {
    return this.props.todoList.map((item) => {
      let result
      if (item.status === listStatus.DONE) {
        result = <Done key={item.id} list={item} doneEvent={this.doneToWill} del={this.del} />
      }
      return result
    })
  }


  /**
   * @desc 创建待完成项列表
   *
   * @memberof App
   */
  createWillDo = () => {
    return this.props.todoList.map((item) => {
      let result
      if (item.status === listStatus.WILLDO) {
        result = <WillDo key={item.id} list={item} willDoneEvent={this.willToDone} del={this.del} />
      }
      return result
    })
  }


  /**
  * @desc 已完成项 -> 待完成项
  *
  * @memberof App
  */
  doneToWill = (id) => {
    this.props.doneToWill(id)
  }


  /**
   * @desc 待完成项 -> 已完成项
   *
   * @memberof App
   */
  willToDone = (id) => {
    this.props.willToDone(id)
  }

  /**
   * @desc 删除指定项
   *
   * @memberof App
   */
  del = (id) => {
    this.props.del(id)
  }

  render() {
    // console.log(this.props.loading)
    // console.log(this.props.loading.effects['todoList/addAsync'])

    const loading = this.props.loading.effects['todoList/addAsync']
    // console.log(loading)
    return (
      <Spin spinning={!!loading}>
        <div>
          <h1>todoList</h1>
          <input type="text" placeholder="请输入"
            ref={input => this.input = input}
            // onChange={() => { console.log(this.input.value) }}
            onKeyPress={this.handleEnterKey} />
          <section>
            <h3>待完成</h3>
            {this.createWillDo()}
          </section>
          <section>
            <h3>已完成</h3>
            {this.createDone()}
          </section>
        </div>
      </Spin>
    )
  }
}


TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  doneToWill: PropTypes.func.isRequired,
  willToDone: PropTypes.func.isRequired,
};
