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
        this.getToDoList(th)
    },
    componentWillUnmount: function() {
        this.serverRequest.abort()
    },
    getToDoList: function(th) {
        th.serverRequest = Axios
            .get('https://fierce-wildwood-92925.herokuapp.com/list')
            .then(function(result) {
                th.setState({
                    toDoList: result.data
                })
            })
    },    
    submitNewToDo: function(newToDo) {
        var th = this
        
        if (!(newToDo === "")) {
            // POST REQUEST
            Axios.post('https://fierce-wildwood-92925.herokuapp.com/list', {
                "item": newToDo
            }).then(function() {
                this.getToDoList(th)
            })
        }
    },
    render() {
        return (
            <div>
                <AddNew submitNewToDo={this.submitNewToDo} />
                <Paper list={this.state.toDoList} />
            </div>
        )
    }
})

ReactDOM.render(<ToDoApp />, document.getElementById('app'))
