const React = require('react')
const Axios = require('axios')
const ListItem = require('./ListItem')

const Paper = React.createClass({
    getInitialState: function() {
        return {
            toDoItems: []
        }
    },
    componentDidMount: function() {
        // var th = this
        this.serverRequest =
        Axios.get('../react/data.json')
            .then(function(result) {
                this.setState({
                    toDoItems: result.data.items
                })
            })
    },
    componentWillUnmount: function() {
        this.serverRequest.abort()
    },
    handleClick: function() {
        return 0
    },
    render() {
        return (
            <div className="container paper">
                <div className="lines lines-left"></div>
                <div className="lines lines-right"></div>
                <h2 className="title">To-Do List</h2>
                <ul className="list">
                    {this.state.toDoItems.map(function(item, index){
                        return (
                            <ListItem key={index} item={item} />
                        )
                    })}
                </ul>
            </div>
        )
    }
})

module.exports = Paper