import PropTypes from 'prop-types'
import EditListItemButton from "../buttons/EditListItemButton"
import DeleteListItemButton from "../buttons/DeleteListItemButton"

function GeneralListItem({ data = {} , onDelete = null , onEdit = null}) {
    return (
        <>
            <li className='generator-list-item' key={data.id}>
                <p>{data.amount} x {data.quantity}</p>
                <div className="list-btn-container">
                    <EditListItemButton id={data.id} onEdit={onEdit} />
                    <DeleteListItemButton id={data.id} onDelete={onDelete}/>
                </div>
            </li>
            
        </>
    )
}

GeneralListItem.propTypes = {
    data: PropTypes.object,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
}

export default GeneralListItem