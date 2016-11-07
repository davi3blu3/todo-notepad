const React = require('react')
const ListItem = require('./ListItem')

const Paper = (props) => (
    <div className="container paper">
        <div className="lines lines-left"></div>
        <div className="lines lines-right"></div>
        <h2 className="title">To-Do List</h2>
        <ul className="list">
            {props.list.map(function(todo, index){
                return (
                    <ListItem key={todo._id.$oid} item={todo.item} deleteToDo={props.deleteToDo} />
                )
            })}
        </ul>
    </div>
)

module.exports = Paper