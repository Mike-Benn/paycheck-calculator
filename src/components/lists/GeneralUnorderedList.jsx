import PropTypes from 'prop-types'
import GeneralListItem from './GeneralListItem';


function GeneralUnorderedList({ bonusList , classIdentifier , listeners }) {


    

    if (bonusList.length) {
        const bonusListItems = bonusList.map(item =>
            <GeneralListItem key={item.id} data={item} onDelete={listeners.handleDeleteBonus} onEdit={listeners.handleEditBonus}/>
        );

        return (
            <>
                <ul className={classIdentifier}>{bonusListItems}</ul>
            </>
        )

    } else {
        return null;
    }


    
}

GeneralUnorderedList.propTypes = {
    classIdentifier: PropTypes.string,
    bonusList: PropTypes.arrayOf(PropTypes.object),
    listeners: PropTypes.object,

}

export default GeneralUnorderedList