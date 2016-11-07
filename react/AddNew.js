const React = require('react')
const Axios = require('axios')

const AddNew = React.createClass({
    handleAddClick: function() {
        var newToDo = this.refs.toDoInput.value
        this.refs.toDoInput.value = ""
        this.props.submitNewToDo(newToDo)
    },
    render() {
        return (
            <div className="container">
                <input ref="toDoInput" type="text" className="new-to-do new-item" placeholder="Add New To-Do Item" />
                <button className="new-to-do add-new" onClick={this.handleAddClick}>+</button>
            </div>
        )
    }
})

module.exports = AddNew