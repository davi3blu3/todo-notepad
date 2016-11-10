const React = require('react')


const ListItem = React.createClass({
    handleCheck(){
        const id = this.props.data._id
        var status = this.props.data.complete
        status === "complete" ? "" : "complete"
        console.log(status)
        this.props.updateToDo(id, this.props.data)
    },
    handleEx(){
        const id = this.props.data._id
        this.props.deleteToDo(id)
    },
    render() {
        return (
            <div>
                <li>
                    <img src="img/check.png" alt="check mark" className="check" onClick={this.handleCheck} />
                    <span className={this.props.data.complete}> {this.props.data.item}</span>
                    <img src="img/delete.png" alt="delete x mark" className="delete" onClick={this.handleEx} />
                </li>
            </div>
        )
    }
})

module.exports = ListItem