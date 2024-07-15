import PropTypes from 'prop-types'

function DeleteListItemButton({ id = null , onDelete = null }) {

    const handleClose = () => {
        onDelete(id);
    }

    return (
        <>
            <button key={id} type="button" className={"list-item-delete-btn"} onClick={handleClose}><img src="" alt='Delete (X button)' className='list-button-image'/></button>
        </>
    )
}

DeleteListItemButton.propTypes = {
    onDelete: PropTypes.func,
    id: PropTypes.string,
}

export default DeleteListItemButton