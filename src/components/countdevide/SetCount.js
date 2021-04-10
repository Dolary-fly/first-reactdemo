import React, { createRef } from 'react';
export default function SetCount(props) {
	const element = createRef();
	return (
		<>
			<button onClick={props.decrease}>+1</button>
			<button onClick={props.increase}>-1</button>
			<input type="text" ref={element} onBlur={() => {
				props.inputCount(~~element.current.value)
			}} />
			{/* ~~将字符串转为数字 */}
		</>
	)
}
//可以设置默认值 ：
// SetCount.defaultProps={
// 	decrease:()=>{},
// 	increase:()=>{},
// 	inputCount:
// }