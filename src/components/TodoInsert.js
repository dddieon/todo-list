import React, { useState, useCallback } from 'react'
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss'

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('')
    // 렌더될 때마다 함수를 다시 만들지 않을래 = useCallback
    const onChange = useCallback((e) => {
        setValue(e.target.value)
    }, [])
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault()
            onInsert(value)
            setValue('')
        },
        [onInsert, value],
    )
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" onChange={onChange} />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert
