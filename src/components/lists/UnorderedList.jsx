import PropTypes from 'prop-types'

function UnorderedList({ itemList , className }) {

    if (itemList.length) {
        return (
            <>
                <ul className={className}>{itemList}</ul>
            </>
        )
    } else {
        return null;
    }

}

UnorderedList.propTypes = {
    className: PropTypes.string,
    itemList: PropTypes.arrayOf(PropTypes.node),
}

export default UnorderedList