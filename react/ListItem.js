const React = require('react')


const ListItem = React.createClass({
    render() {
        return (
            <div>
                <li className="">
                    <img src="img/check.png" alt="check mark" className="done" />
                    {this.props.item}
                    <img src="img/delete.png" alt="delete x mark" className="delete" />
                </li>
            </div>
        )
    }
})

module.exports = ListItem