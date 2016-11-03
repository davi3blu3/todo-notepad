const React = require('react')

const Paper = React.createClass({
    render() {
        var toDoItems = ["Get Up", "Shower", "Let Dexter Out", "Make Breakfast", "Go To Work", "Go To Gym", "Make Spaghetti", "Write Code!", "Brush Teeth", "Go To Sleep"]
        return (
            <div className="container paper">
                <div className="lines"></div>
                <h2 className="title">To-Do List</h2>
                <ul className="list">
                    {toDoItems.map(function(item, index){
                        return (
                            <div key={index}>
                                <img src="img/check.png" alt="check mark" className="done" /><li className="">{item}<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                            </div>
                        )
                    })}
                    
                </ul>
            </div>
        )
    }
})

module.exports = Paper