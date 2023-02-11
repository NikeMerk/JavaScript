import React, { useState } from 'react'

export default function Counter() {
	const [count, setCount] = useState(0)
	return (
	<div>
		<p>{count}</p>
		<button onClick={() => {
			setCount(count + 1)
		}}>top</button>
		<button onClick={() => {
			setCount(count - 1)
		}}>bottom</button>
	</div>
	)
}
