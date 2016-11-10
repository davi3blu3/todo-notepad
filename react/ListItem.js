const React = require('react')


const ListItem = (props) => {
    const handleCheck = () => {
        const id = props.data._id
        let newData = props.data
        newData.complete = (props.data.complete ? false : true)
        props.updateToDo(id, newData)
    }
    const handleEx = () => {
        const id = props.data._id
        this.props.deleteToDo(id)
    }
    const getClassNames = () => {
        return props.data.complete ? "complete" : ""
    }

    let img;
    return (
        <div>
            <li>
                <img ref={(node) => {img = node}} src="img/check.png" alt="check mark" className="check" 
                    onClick={handleCheck} />
                <span className={getClassNames()}> {props.data.item}</span>
                <img ref={(node) => {img = node}} src="img/delete.png" alt="delete x mark" className="delete" onClick={handleEx} />
            </li>
        </div>
    )
}

module.exports = ListItem