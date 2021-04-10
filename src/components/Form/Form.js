import React from 'react';
export default class Form extends React.Component {
  state = {
    name: 'zhangsan',
    age: 20
  }

  render() {
    return (
      <div>
        <h3>非受控组件 name:{this.state.name}</h3>
        <input type="text" defaultValue={this.state.name} />
        <h3>受控组件 age:{this.state.age}</h3>
        <input type="text" value={this.state.age} onChange={(event) => {
          this.setState({
            age: event.target.value
          })
        }} />
      </div>
    )
  }
}