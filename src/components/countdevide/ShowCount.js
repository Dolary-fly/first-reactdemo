import React, { Component } from 'react';
export default class ShowCount extends Component {
	render() {
		return (
			<h1>{this.props.count}</h1>
		)
	}
}
/*
函数组件的props写在小括号中，
class组件的props实际上在constructor中，
由于constructor可以省略不写，所以用this.props调用
两者写法均可
*/

// export default function ShowCount(props) {
// 	return (
// 		<h1>{props.count}</h1>
// 	)
// }