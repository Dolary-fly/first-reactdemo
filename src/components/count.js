import React, { createRef } from 'react';
// import ReactDOM from 'react-dom';
export default class Count extends React.Component {
	state = {
		count: 0,
	}
	decrease = () => {
		this.setState({
			count: this.state.count - 1
		})
	}
	render() {
		const element = createRef();
		return (
			<div>
				<button onClick={this.decrease}>+1</button>
				<span>计数器：{this.state.count}</span>
				<button onClick={() => {
					this.setState({
						count: this.state.count + 1
					})
				}}>-1</button>
				<div>
					<input type="text" ref={element} onBlur={() => {
						this.setState({
							count: element.current.value,
						})
					}} />
				</div>
			</div>
		)

	}
}