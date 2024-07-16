import PropTypes from 'prop-types'
import x from '../../images/x.png'


function DeleteListItemButton({ id = null , onDelete = null }) {

    const handleClose = () => {
        onDelete(id);
    }

    return (
        <>
            <button key={id} type="button" className={"list-item-button"} onClick={handleClose}><img src={x} alt='Delete (X button)' className='list-button-image'/></button>
        </>
    )
}

DeleteListItemButton.propTypes = {
    onDelete: PropTypes.func,
    id: PropTypes.string,
}

export default DeleteListItemButton