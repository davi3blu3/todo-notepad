const React = require('react')
const ReactDOM = require('react-dom')
const Paper = require('./Paper')

const ToDoApp = (
    <div>
        <Paper />
        <div className="container">
            <input type="text" className="new-to-do new-item" placeholder="Add New To-Do" />
            <button className="new-to-do add-new">+</button>
        </div>
    </div>
)

ReactDOM.render(ToDoApp, document.getElementById('app'))
