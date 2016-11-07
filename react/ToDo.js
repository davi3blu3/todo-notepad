const React = require('react')
const ReactDOM = require('react-dom')
const Axios = require('axios')
const Paper = require('./Paper')
const AddNew = require('./AddNew')

const ToDoApp = React.createClass({
    getInitialState: function () {
        return {
            toDoList: []
        }
    },
    componentDidMount: function() {
        var th = this

        // GET REQUEST
        this.serverRequest = Axios
            .get('https://fierce-wildwood-92925.herokuapp.com/list')
            .then(function(result) {
                th.setState({
                    toDoList: result.data
                })
                console.log("get request result", result.data)
            })
            
    },
    componentWillUnmount: function() {
        this.serverRequest.abort()
    },
    handleSubmit: function(newToDo) {
        var th = this
        
        if (!(newToDo === "")) {
        // POST REQUEST
        Axios.post('https://fierce-wildwood-92925.herokuapp.com/list', {
            "item": newToDo
        })
            .then(function() {
                th.setState({
                    toDoList: th.state.toDoList.push({
                        "_id": "581fe51a527a8e0011e1OMFG",
                        "item": newToDo,
                        "complete": false
                    }) 
                })
                console.log("Post Request", th.state.toDoList)
            })
        }
    },    
    render() {
        return (
            <div>
                <AddNew handleSubmit={this.handleSubmit} />
                <Paper list={this.state.toDoList} />
            </div>
        )
    }
})

ReactDOM.render(<ToDoApp />, document.getElementById('app'))
