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
        var th = this
        this.serverRequest =
        Axios.get('https://fierce-wildwood-92925.herokuapp.com/list')
            .then(function(result) {
                th.setState({
                    toDoItems: result.data
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
                    {this.state.toDoItems.map(function(item){
                        return (
                            <ListItem key={item._id.$oid} item={item.item} />
                        )
                    })}
                </ul>
            </div>
        )
    }
})

module.exports = Paper