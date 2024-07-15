import { useState } from "react";
import SmallTextField from "./form-fields/SmallTextField";
import BulletListField from "./form-fields/BulletListField";

function CalculatorForm() {

    const [currRegularHours , setCurrRegularHours] = useState("");
    const [currOvertimeHours , setCurrOvertimeHours] = useState("");
    const [currNightShiftHours , setCurrNightShiftHours] = useState("");
    const [currWeekendHours , setCurrWeekendHours] = useState("");
    const [currBonus , setCurrBonus] = useState("");
    const [currBonusMultiplier , setCurrBonusMultiplier] = useState("");
    const [currBonusList , setCurrBonusList] = useState([]);

    const handleRegularHoursChange = (e) => {
        setCurrRegularHours(e.target.value);
    }

    const handleOvertimeHoursChange = (e) => {
        setCurrOvertimeHours(e.target.value);
    }

    const handleNightShiftHoursChange = (e) => {
        setCurrNightShiftHours(e.target.value);
    }

    const handleWeekendHoursChange = (e) => {
        setCurrWeekendHours(e.target.value);
    }

    const handleBonusChange = (e) => {
        setCurrBonus(e.target.value);
    }

    const handleMultiplierChange = (e) => {
        setCurrBonusMultiplier(e.target.value);
    }

    const bulletFieldListeners = {
        handleBonusChange,
        handleMultiplierChange,

    }

    const bulletFieldValues = {
        Bonus: currBonus,
        Quantity: currBonusMultiplier,
    }

    return (
        <form action="" className="calculator-form">
            <SmallTextField fieldName="Regular Hours" onInputChange={handleRegularHoursChange} value={currRegularHours}/>
            <SmallTextField fieldName="Overtime Hours" onInputChange={handleOvertimeHoursChange} value={currOvertimeHours}/>
            <SmallTextField fieldName="Night Shift Hours" onInputChange={handleNightShiftHoursChange} value={currNightShiftHours}/>
            <SmallTextField fieldName="Weekend Hours" onInputChange={handleWeekendHoursChange} value={currWeekendHours}/>
            <BulletListField fieldName={{"Bonus": "Bonus" , "Quantity": "Quantity"}} onInputChange={bulletFieldListeners} values={bulletFieldValues} itemList={currBonusList} classIdentifier="bonus-list" />
            <SmallTextField fieldName="Net Pay" />
            
        </form>
    )
}

export default CalculatorForm