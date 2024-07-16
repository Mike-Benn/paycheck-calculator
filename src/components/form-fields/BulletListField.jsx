import PropTypes from 'prop-types'
import GeneralUnorderedList from '../lists/GeneralUnorderedList';
import SubmitItemButton from '../buttons/SubmitItemButton';

function BulletListField({ fieldNames , listeners, values , bonusList , classIdentifier }) {
    
    let forValBonus = fieldNames.Bonus.split(' ').join('');
    let forValQuantity = fieldNames.Quantity.split(' ').join('');
    

    const enterPressed = (e) => {
        if (e.key === 'Enter') {
            listeners.handleSubmitBonus();
        }
    }

    return (
        
        <div className="bullet-field">
            <GeneralUnorderedList bonusList={bonusList} className={classIdentifier} listeners={listeners}/>
            <div className="field">
                <label htmlFor={forValBonus} className="field-label">{fieldNames.Bonus}</label>
                <input 
                    type="text"
                    name={forValBonus}
                    id={forValBonus}
                    className='text-input'
                    onChange={listeners.handleBonusChange}
                    value={values.Bonus}
                    />
            </div>
            <div className="field">
                <label htmlFor={forValQuantity} className="field-label">{fieldNames.Quantity}</label>
                <input 
                    type="text" 
                    name={forValQuantity} 
                    id={forValQuantity}
                    className='text-input'
                    onChange={listeners.handleMultiplierChange}
                    value={values.Quantity}
                    onKeyDown={enterPressed}
                    />
            </div>
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