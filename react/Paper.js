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
                    <ListItem key={index} id={todo._id} item={todo.item} done={todo.complete} 
                        deleteToDo={props.deleteToDo} updateToDo={props.updateToDo} />
                )
            })}
        </ul>
    </div>
)

module.exports = Paper