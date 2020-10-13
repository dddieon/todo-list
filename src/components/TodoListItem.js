import React from 'react'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md'
import './TodoListItem.scss'
import cn from 'classnames'

export default function TodoListItem({ todo }) {
    const { text, checked } = todo
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })}>
                <MdCheckBoxOutlineBlank />
                <div className="text">{todo.text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
