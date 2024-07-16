import PropTypes from 'prop-types'
import GeneralUnorderedList from '../lists/GeneralUnorderedList';
import SubmitItemButton from '../buttons/SubmitItemButton';
import NumberField from './NumberField';


function BulletListField({ listeners, values , bonusList , classIdentifier }) {
    
    const enterPressed = (e) => {
        if (e.key === 'Enter') {
            listeners.handleSubmitBonus();
        }
    }

    return (
        
        <div className="bullet-field">
            <GeneralUnorderedList bonusList={bonusList} className={classIdentifier} listeners={listeners}/>
            <NumberField fieldName="Bonus Amount" onInputChange={listeners.handleBonusChange} value={values.bonus} readOnly={false}/>
            <NumberField fieldName="Times Earned" onInputChange={listeners.handleMultiplierChange} value={values.quantity} onKeyDown={enterPressed} readOnly={false}/>
            <SubmitItemButton buttonText='Add Bonus' onClickAction={listeners.handleSubmitBonus}/>
        </div>
        
    )
}

BulletListField.propTypes = {
    classIdentifier: PropTypes.string,
    fieldNames: PropTypes.object,
    values: PropTypes.object,
    listeners: PropTypes.object,
    onAddChange: PropTypes.func,
    bonusList: PropTypes.arrayOf(PropTypes.object),
    
    
    
    
}

export default BulletListField