import React from 'react'
import Footer from './footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const ToDoApp = () => (
    <div className="text-center t-pad-60 b-pad-200">
        <div className="b-pad-40">
            <h4>ToDo Redux</h4>
            <div>Really! Another ToDo list!</div>
        </div>
        <AddTodo />
        <div className="todo-styling t-pad-30 b-pad-20">
            <VisibleTodoList />
        </div>
        <Footer />
    </div>
)

export default ToDoApp