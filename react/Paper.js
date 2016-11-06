const React = require('react')
const ListItem = require('./ListItem')

const Paper = (props) => (
    <div className="container paper">
        <div className="lines lines-left"></div>
        <div className="lines lines-right"></div>
        <h2 className="title">To-Do List</h2>
        <ul className="list">
            {this.props.list.map(function(item, index){
                return (
                    <ListItem key={index} item={item.item} />
                )
            })}
        </ul>
    </div>
)

module.exports = Paper