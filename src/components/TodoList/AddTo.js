import React, { createRef } from "react";

export default function AddTo(props) {
  const element = createRef();
  return (
    <div>
      <input type="text" ref={element} />
      <button onClick={
        () => {
          // 要用箭头函数的原因是onClick中要写函数名而非函数调用
          // 这里的箭头函数相当于一个匿名函数
          props.addTo(element.current.value)
        }
      }>add</button>
    </div>
  )
} 