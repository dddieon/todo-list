import React, { useCallback, useState, useRef } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링 해보기',
            checked: true,
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어보기',
            checked: false,
        },
    ])
    // useState 대신 useRef로 id를 담자
    const nextId = useRef(4)
    // 변수 남는 함수
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                // onInsert(value)를 하면 input의 값이 text속성으로 들어온다
                checked: false,
            }
            setTodos(todos.concat(todo))
            nextId.current += 1
            // ref는 1씩 올라간다
        },
        [todos],
    )
    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id))
        },
        [todos],
    )
    return (
        <>
            <TodoTemplate>
                <TodoInsert onInsert={onInsert} />
                <TodoList todos={todos} onRemove={onRemove} />
            </TodoTemplate>
        </>
    )
}

export default App
