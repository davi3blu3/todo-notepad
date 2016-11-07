const React = require('react')


const ListItem = React.createClass({
    getInitialState(){
        return {'done': ''}
    },
    handleCheck(){
        this.state.done === '' ? this.setState({'done': 'complete'}) : this.setState({'done': ''})
    },
    handleEx(){
        var id = this.props.id
        console.log(this.props)
        this.props.deleteToDo(id)
    },
    render() {
        return (
            <div>
                <li>
                    <img src="img/check.png" alt="check mark" className="check" onClick={this.handleCheck} />
                    <span className={this.state.done}> {this.props.item}</span>
                    <img src="img/delete.png" alt="delete x mark" className="delete" onClick={this.handleEx} />
                </li>
            </div>
        )
    }
})

module.exports = ListItem