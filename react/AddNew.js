const React = require('react')

const AddNew = (props) => {
    const handleAddClick = () => {
        const newToDo = input.value
        input.value = ""
        props.submitNewToDo(newToDo)
    }
    const handleKeyboad = (event) => {
        if (event.keyCode == 13) {
            const newToDo = input.value
            input.value = ""
            this.props.submitNewToDo(newToDo)
        }
    }

    let input
    return (
        <div className="container">
            <input ref={(node) => {input = node}} type="text" className="new-to-do new-item" 
                placeholder="Add New ToDo" onKeyDown={handleKeyboad} />
            <button className="new-to-do add-new" onClick={handleAddClick}>Add It</button>
        </div>
    )
}

module.exports = AddNew