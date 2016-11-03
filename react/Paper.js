const React = require('react')
const Axios = require('axios')

const Paper = React.createClass({
    getInitialState: function() {
        return {
            toDoItems: []
        }
    },
    componentDidMount: function() {
        var th = this
        this.serverRequest =
        Axios.get('../react/data.json')
            .then(function(result) {
                th.setState({
                    toDoItems: result.data.items
                })
            })
    },
    componentWillUnmount: function() {
        this.serverRequest.abort()
    },
    render() {
        // var toDoItems = ["Monday", "Tuesday", "Wednesday", "Thursday"]
        return (
            <div className="container paper">
                <div className="lines"></div>
                <h2 className="title">To-Do List</h2>
                <ul className="list">
                    {this.state.toDoItems.map(function(item, index){
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