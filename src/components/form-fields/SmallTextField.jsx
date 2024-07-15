import PropTypes from 'prop-types'


function SmallTextField({ fieldName , placeHolder , onInputChange , value }) {
    let forVal = fieldName.split(' ').join('');
    return (
        <div className="field">
            <label htmlFor={forVal} className="field-label">{fieldName}</label>
            <input 
                type='text'
                name={forVal}
                id={forVal}
                className='text-input'
                placeholder={placeHolder}
                onChange={onInputChange}
                value={value}
            />
        </div>
    );
}

SmallTextField.propTypes = {
    fieldName: PropTypes.string,
    placeHolder: PropTypes.string,
    onInputChange: PropTypes.func,
    value: PropTypes.string,
    

}

export default SmallTextField