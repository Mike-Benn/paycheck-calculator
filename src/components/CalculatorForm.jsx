import { useState } from "react";
import SmallTextField from "./form-fields/SmallTextField";
import BulletListField from "./form-fields/BulletListField";
import { v4 as uuidv4 } from "../../node_modules/uuid"
import { getItemWithID } from "../utils/utils";

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

    const resetBonusForm = () => {
        setCurrBonus("");
        setCurrBonusMultiplier("");
    }

    const handleSubmitBonus = () => {
        let profile = {
            id: uuidv4(),
            amount: currBonus,
            quantity: currBonusMultiplier,
        }
        let updatedBonusList = currBonusList.concat([profile]);
        setCurrBonusList(updatedBonusList);
        resetBonusForm();
    }

    const handleDeleteBonus = (id) => {
        let updatedBonusList = currBonusList.filter(item =>
            id !== item.id
        );
        setCurrBonusList(updatedBonusList);
    }

    const handleEditBonus = (id) => {
        let bonusObject = getItemWithID(id , currBonusList);
        let bonus = bonusObject.item;
        let bonusProfileList = bonusObject.arr;

        setCurrBonus(bonus.amount);
        setCurrBonusMultiplier(bonus.quantity);
        setCurrBonusList(bonusProfileList);
    }

    const bulletFieldListeners = {
        handleBonusChange,
        handleMultiplierChange,
        handleSubmitBonus,
        handleDeleteBonus,
        handleEditBonus,

    }

    const bulletFieldValues = {
        Bonus: currBonus,
        Quantity: currBonusMultiplier,
    }

    const bonusFieldNames = {
        "Bonus": "Bonus",
        "Quantity": "Quantity",

    }

    return (
        <form action="" className="calculator-form">
            <fieldset className="form-section">
                <legend className="form-header">Hourly Pay</legend>
                <SmallTextField fieldName="Regular Hours" onInputChange={handleRegularHoursChange} value={currRegularHours}/>
                <SmallTextField fieldName="Overtime Hours" onInputChange={handleOvertimeHoursChange} value={currOvertimeHours}/>
                <SmallTextField fieldName="Night Shift Hours" onInputChange={handleNightShiftHoursChange} value={currNightShiftHours}/>
                <SmallTextField fieldName="Weekend Hours" onInputChange={handleWeekendHoursChange} value={currWeekendHours}/>
            </fieldset>
            <fieldset className="form-section">
                <legend className="form-header">Bonuses</legend>
                <BulletListField fieldNames={bonusFieldNames} listeners={bulletFieldListeners} values={bulletFieldValues} bonusList={currBonusList} classIdentifier="bonus-list" />
            </fieldset>
            
            <SmallTextField fieldName="Net Pay" />
            
        </form>
    )
}

export default CalculatorForm