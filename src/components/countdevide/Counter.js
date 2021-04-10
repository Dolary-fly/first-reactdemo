import React, { Component } from 'react';
/*组件拆分：
注意1：引入需要的组件*/
// 组件名称必须以大写字母开头
// 组件的propsk具有只读性
import SetCount from './SetCount';
import ShowCount from './ShowCount';
export default class Counter extends Component {
	//应该是实例属性的新写法，实例属性除了可以写在构造函数中也可以写在最顶层，此时不需要给属性前加this
	state = {
		count: 0
	}
	// react中添加事件时可以将箭头函数写在JSX中，类中的方法用普通函数
	// 或者将箭头函数卸载类中，JSX中调用onClick={this.fun}
	increase = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}
	decrease = () => {
		this.setState({
			count: this.state.count - 1,
		})
	}
	//react的事件名采用小驼峰式
	inputCount = newCount => {
		this.setState({
			count: newCount
		}
		)
	}
	render() {
		return (
			<>
				{/* 将数据通过props传给子组件 ，函数也可以直接传*/}
				<ShowCount count={this.state.count}></ShowCount>
				<SetCount
					increase={this.increase}
					decrease={this.decrease}
					inputCount={this.inputCount}
				>
				</SetCount>
			</>
		)

	}
}