import React, { Component } from 'react'

export class TodoList extends Component {
    render() {
        return (
            <div className='todoListMain'>
                <div className='header'>
                    <form>
                    <input placeholder='enter item'>
                    </input>
                    <button type='submit'>add</button>
                    </form>    
                </div>        
            </div>
        )
    }
}

export default TodoList
