import React from "react";
export default class AddStudent extends React.Component {
  state = {
    student: {
      name: '',
      age: '',
      sex: '男'
    }

  }


  render() {
    const { student } = this.state;
    return (
      <div>
        <h3>新增学生</h3>
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
          学生性别：男<input name="studentSex" type="radio" checked={student.sex === '男'} onChange={() => {
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
            this.props.addStu(this.state.student)
          }}>确认新增</button>
        </p>
      </div>
    )
  }
}