const React = require('react')
const ReactDOM = require('react-dom')
const Paper = require('./Paper')
const AddNew = require('./AddNew')

const ToDoApp = (
    <div>
        <Paper />
        <AddNew />
    </div>
)

ReactDOM.render(ToDoApp, document.getElementById('app'))
