const React = require('react')

const AddNew = React.createClass({
    render() {
        return (
            <div className="container">
                <input type="text" className="new-to-do new-item" placeholder="Add New To-Do Item" />
                <button className="new-to-do add-new">+</button>
            </div>
        )
    }
})

module.exports = AddNew