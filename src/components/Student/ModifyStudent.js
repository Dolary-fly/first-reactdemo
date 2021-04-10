import React from 'react';
export default class ModifyStudent extends React.Component {
  state = {
    student: {
      name: 'lisi',
      age: '18',
      sex: ''
    }
  }
  render() {
    const { student } = this.state;
    return (
      <div>
        <h3>修改学生</h3>
        <p>
          学生姓名：<input type="text" value={student.name} onChange={(event) => {
            this.setState({
              student: {
                ...student,
                name: event.target.value
              }

            })
          }} /><br />
          学生年龄：<input type="text" value={student.age} onChange={(event) => {
            this.setState({
              student: {
                ...student,
                age: event.target.value
              }

            })
          }} /><br />
          学生性别：
          男<input name="studentSex" type="radio" checked={student.sex === '男'} onChange={() => {
            this.setState({
              student: {
                ...student,
                sex: '男'
              }

            })
          }} />
          女<input name="studentSex" type="radio" checked={student.sex === '女'} onChange={() => {
            this.setState({
              student: {
                ...student,
                sex: '女'
              }

            })
          }} /><br />
          <button onClick={() => {
            console.log(student);
            this.props.modiStu(student);
          }}>确认修改</button>
        </p>
      </div>
    )
  }
}