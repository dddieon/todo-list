import React from 'react'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md'
import './TodoListItem.scss'
import cn from 'classnames'

export default function TodoListItem({ todo, onRemove }) {
    const { id, text, checked } = todo
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })}>
                <MdCheckBoxOutlineBlank />
                <div className="text">{todo.text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}
