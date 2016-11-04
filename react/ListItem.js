const React = require('react')


const ListItem = React.createClass({
    getInitialState(){
        return {"showIcons": "hidden"}
    },
    render() {
        return (
            <div>
                <li>
                    <img src="img/check.png" alt="check mark" className="check" />
                    {this.props.item}
                    <img src="img/delete.png" alt="delete x mark" className="delete" />
                </li>
            </div>
        )
    }
})

module.exports = ListItem