const React = require('react')


const ListItem = React.createClass({
    handleCheck(){
        const id = this.props.data._id
        let newData = this.props.data
        newData.complete = (this.props.data.complete ? false : true)
        console.log(this.props.data)
        console.log(newData)
        this.props.updateToDo(id, newData)
    },
    handleEx(){
        const id = this.props.data._id
        this.props.deleteToDo(id)
    },
    getClassNames(){
        return this.props.data.complete ? "complete" : ""
    },
    render() {
        return (
            <div>
                <li>
                    <img src="img/check.png" alt="check mark" className="check" onClick={this.handleCheck} />
                    <span className={this.getClassNames()}> {this.props.data.item}</span>
                    <img src="img/delete.png" alt="delete x mark" className="delete" onClick={this.handleEx} />
                </li>
            </div>
        )
    }
})

module.exports = ListItem