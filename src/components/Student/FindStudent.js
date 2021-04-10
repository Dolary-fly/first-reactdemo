import React from 'react';
export default class FindStudent extends React.Component {
  state = {
    type: 'id',
    value: ''
  }
  render() {
    const { type, value } = this.state;
    return (
      <div>
        <h3>查询学生</h3>
        <p>
          查询类型：
          <select value={type} onChange={(event) => {
            this.setState({
              type: event.target.value
            })
          }}>
            <option value="id">编号</option>
            <option value="age">年龄</option>
            <option value="name">姓名</option>
            <option value="sex">性别</option>
          </select>
          <input type="text"
            onChange={(event) => {
              this.setState({
                value: event.target.value
              })
            }}
            onBlur={() => {
              this.props.findStu(type, value)
            }} />
        </p>
      </div>
    )

  }
}