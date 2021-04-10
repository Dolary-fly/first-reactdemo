import React from 'react';
export default class List extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todo.map(item =>
            //{
            //return (
            // 这里的箭头函数代码块相当于只有一行，所以不用写大括号加return，也是返回的意思
            // 所以这里一共写了三种返回的方法
            <li
              // 这个key属性帮助react识别哪些元素改变了，比如添加和删除，key是一个在其兄弟节点中独一无二的值，不需要全局唯一
              key={item.id}
              className={item.done ? 'doneStyle' : ''}
              onClick={
                () => {
                  this.props.doneChange(item.id)
                }
              }>
              {item.text}
            </li>
            //)
            // 直接用小括号也可以
            //}
          )

        }
      </ul>
    )
  }
}