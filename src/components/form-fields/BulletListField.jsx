import PropTypes from 'prop-types'
import UnorderedList from '../lists/UnorderedList';
import SubmitItemButton from '../buttons/SubmitItemButton';

function BulletListField({ fieldNames , onInputChange , onAddChange , values , itemList , classIdentifier }) {
    
    let forValBonus = fieldNames.Bonus.split(' ').join('');
    let forValQuantity = fieldNames.Quantity.split(' ').join('');


    const enterPressed = (e) => {
        if (e.key === 'Enter') {
            onAddChange();
        }
    }

    return (
        
        <div className="bullet-field">
            <UnorderedList itemList={itemList} className={classIdentifier} />
            <div className="field">
                <label htmlFor={forValBonus} className="field-label">{fieldNames.Bonus}</label>
                <input 
                    type="text"
                    name={forValBonus}
                    id={forValBonus}
                    className='text-input'
                    onChange={onInputChange.handleBonusChange}
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
                    onChange={onInputChange.handleQuantityChange}
                    value={values.Quantity}
                    />
            </div>
            <SubmitItemButton buttonText='Add Bonus'/>
            
        </div>
        
    )
}

BulletListField.propTypes = {
    classIdentifier: PropTypes.string,
    fieldNames: PropTypes.object,
    values: PropTypes.object,
    onInputChange: PropTypes.object,
    onAddChange: PropTypes.func,
    itemList: PropTypes.arrayOf(PropTypes.node),
    
    
    
    
}

export default BulletListField