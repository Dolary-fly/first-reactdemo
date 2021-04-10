import React from "react";
import AddStudent from './AddStudent';
import ModifyStudent from "./ModifyStudent";
import ShowStudent from "./ShowStudent";
import FindStudent from "./FindStudent";
/*
新增学生组件：<AddStudent></AddStudent>
修改学生组件：<ModifyStudent></ModifyStudent>
查询学生组件：<FindStudent></FindStudent>
学生列表组件：<ShowStudent></ShowStudent>
*/
export default class Student extends React.Component {
  state = {
    student: [
      { id: 0, name: '张三', age: 20, sex: '男' },
      { id: 1, name: '小兰', age: 20, sex: '女' },
    ],
    newId: 3
  }
  //增加学生
  addStu = (studentData) => {
    this.setState({
      student: [
        ...this.state.student,
        {
          id: this.state.newId,
          ...studentData
        }
      ],
      newId: this.state.newId + 1
    })
  }
  //修改学生
  modiStu = (studentData) => {
    this.setState({
      student: this.state.student.map((item) => {
        if (item.name === studentData.name) {
          item.name = studentData.name;
          item.age = studentData.age;
          item.sex = studentData.sex;
        }
        return item;
      })

    })
  }
  //删除学生
  delStu = (id) => {
    this.setState({
      student: this.state.student.filter((item) =>
        item.id !== id
      )
    })
  }
  //查找学生
  findStu = (type, value) => {
    console.log(type, value);
    this.setState({
      student: this.state.student.filter((item) =>
        item[type] === value
      )
    })
  }

  render() {
    return (
      <div>
        <AddStudent addStu={this.addStu}></AddStudent>
        <ModifyStudent modiStu={this.modiStu}></ModifyStudent>
        <FindStudent findStu={this.findStu}></FindStudent>
        <ShowStudent student={this.state.student} delStu={this.delStu}></ShowStudent>
      </div>
    )
  }
}
