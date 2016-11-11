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
        props.deleteToDo(id)
    }
    const getClassNames = () => {
        return props.data.complete ? "complete" : ""
    }

    
    return (
        <div>
            <li>
                <img src="img/check.png" alt="check mark" className="check" 
                    onClick={handleCheck} />
                <span className={getClassNames()}> {props.data.item}</span>
                <img src="img/delete.png" alt="delete x mark" className="delete" onClick={handleEx} />
            </li>
        </div>
    )
}

module.exports = ListItem