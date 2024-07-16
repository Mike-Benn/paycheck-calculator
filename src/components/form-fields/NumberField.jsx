import PropTypes from 'prop-types'


function NumberField({ fieldName , placeHolder , onInputChange , value , onKeyDown , readOnly }) {
    let forVal = fieldName.split(' ').join('');
    return (
        <div className="field">
            <label htmlFor={forVal} className="field-label">{fieldName}</label>
            <input 
                type='number'
                name={forVal}
                id={forVal}
                className='text-input'
                placeholder={placeHolder}
                onChange={onInputChange}
                value={value}
                onKeyDown={onKeyDown ? onKeyDown : null}
                onWheel={(e) => e.target.blur()}
                readOnly={readOnly}
                
            />
        </div>
    );
}

NumberField.propTypes = {
    fieldName: PropTypes.string,
    placeHolder: PropTypes.string,
    onInputChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    readOnly: PropTypes.bool.isRequired,
    

    

}

export default NumberField