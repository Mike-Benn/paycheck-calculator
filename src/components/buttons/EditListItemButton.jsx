import PropTypes from 'prop-types'

function EditListItemButton({ id = null , onEdit = null }) {

    const handleEdit = () => {
        onEdit(id);
    }

    return (
        <>
            <button key={id} type="button" className={"list-item-edit-btn"} onClick={handleEdit}><img src="" alt='Edit (Writing Utensil) button)' className='list-button-image'/></button>
        </>
    )
}

EditListItemButton.propTypes = {
    onEdit: PropTypes.func,
    id: PropTypes.string,
}

export default EditListItemButton