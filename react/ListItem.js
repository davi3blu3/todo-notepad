const React = require('react')


const ListItem = React.createClass({
    render() {
        return (
            <div>
                <img src="img/check.png" alt="check mark" className="done" />
                <li className="">
                    {this.props.item}
                    <img src="img/delete.png" alt="delete x mark" className="delete" />
                    {/*<img src="img/pencil.png" alt="pencil icon" className="edit" />*/}
                </li>
            </div>
        )
    }
})

module.exports = ListItem