const React = require('react')

const AddNew = (props) => {
    const handleAddClick = () => {
        const newToDo = this.refs.toDoInput.value
        this.refs.toDoInput.value = ""
        this.props.submitNewToDo(newToDo)
    }
    const handleKeyboad = (event) => {
        if (event.keyCode == 13) {
            const newToDo = this.refs.toDoInput.value
            this.refs.toDoInput.value = ""
            this.props.submitNewToDo(newToDo)
        }
    }
    
    return (
        <div className="container">
            <input ref="toDoInput" type="text" className="new-to-do new-item" placeholder="Add New ToDo" />
            <button className="new-to-do add-new" onClick={this.handleAddClick} onKeyDown={this.handleKeyboad}>+</button>
        </div>
    )
}

module.exports = AddNew