import React from 'react';
export default class ShowStudent extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>学生编号</th>
            <th>学生姓名</th>
            <th>学生年龄</th>
            <th>学生性别</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
          {
            this.props.student.map((item) => (

              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.sex}</td>
                <td>
                  <button>修改</button>
                  <button onClick={() => {
                    this.props.delStu(item.id)
                  }}>删除</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}