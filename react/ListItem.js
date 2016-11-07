const React = require('react')


const ListItem = React.createClass({
    handleCheck(){
        const data = {
            _id: {
                $oid: this.props.id
            },
            item: this.props.item,
        }
        data.complete = this.props.done ? false : true
        console.log(data)
        this.props.updateToDo(this.props.id, data)
    },
    handleEx(){
        const id = this.props.id
        this.props.deleteToDo(id)
    },
    render() {
        return (
            <div>
                <li>
                    <img src="img/check.png" alt="check mark" className="check" onClick={this.handleCheck} />
                    <span className={this.props.done ? "complete" : ""}> {this.props.item}</span>
                    <img src="img/delete.png" alt="delete x mark" className="delete" onClick={this.handleEx} />
                </li>
            </div>
        )
    }
})

module.exports = ListItem