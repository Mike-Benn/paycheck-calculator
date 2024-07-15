import PropTypes from 'prop-types'


function SubmitItemButton({ buttonText = "Placeholder" , onClickAction }) {
    
    return (
        <div className="field">
            <button type="button" className="submit-btn" onClick={onClickAction}>{buttonText}</button>
        </div>
    )
}

SubmitItemButton.propTypes = {
    buttonText: PropTypes.string,
    onClickAction: PropTypes.func,
    
    
};

export default SubmitItemButton