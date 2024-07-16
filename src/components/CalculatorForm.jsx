import { useState } from "react";
import NumberField from "./form-fields/NumberField";
import BulletListField from "./form-fields/BulletListField";
import { v4 as uuidv4 } from "../../node_modules/uuid"
import { calculatePaycheck, getItemWithId } from "../utils/utils";
import { payRates } from "../utils/rates";

function CalculatorForm() {

    const [currRegularHours , setCurrRegularHours] = useState("");
    const [currOvertimeHours , setCurrOvertimeHours] = useState("");
    const [currNightShiftHours , setCurrNightShiftHours] = useState("");
    const [currWeekendHours , setCurrWeekendHours] = useState("");
    const [currBonus , setCurrBonus] = useState("");
    const [currBonusMultiplier , setCurrBonusMultiplier] = useState("");
    const [currBonusList , setCurrBonusList] = useState([]);
    const paycheckValues = {
        regularHours: currRegularHours,
        overtimeHours: currOvertimeHours,
        nightShiftHours: Number(currNightShiftHours),
        weekendHours: currWeekendHours,
        bonusList: currBonusList,
    }
    const selectedId = "kermit";
    const pay = calculatePaycheck(selectedId , paycheckValues , payRates)



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
        let bonus = {
            id: uuidv4(),
            amount: currBonus,
            quantity: currBonusMultiplier,
        }
        
        let updatedBonusList = currBonusList.concat([bonus]);
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
        let bonusObject = getItemWithId(id , currBonusList);
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
        bonus: currBonus,
        quantity: currBonusMultiplier,
    }

    
    
    return (
        <form action="" className="calculator-form">
            <fieldset className="form-section">
                <legend className="form-header">Hourly Pay</legend>
                <NumberField fieldName="Regular Hours" onInputChange={handleRegularHoursChange} value={currRegularHours} readOnly={false}/>
                <NumberField fieldName="Overtime Hours" onInputChange={handleOvertimeHoursChange} value={currOvertimeHours} readOnly={false}/>
                <NumberField fieldName="Night Shift Hours" onInputChange={handleNightShiftHoursChange} value={currNightShiftHours} readOnly={false}/>
                <NumberField fieldName="Weekend Hours" onInputChange={handleWeekendHoursChange} value={currWeekendHours} readOnly={false}/>
            </fieldset>
            <fieldset className="form-section">
                <legend className="form-header">Bonuses</legend>
                <BulletListField listeners={bulletFieldListeners} values={bulletFieldValues} bonusList={currBonusList} classIdentifier="bonus-list" />
            </fieldset>
            <fieldset className="form-section">
                <legend className="form-header">Gross and Net Pay</legend>
                <NumberField fieldName="Gross Pay" value={pay.currGrossPay} readOnly={true} />
                <NumberField fieldName="Net Pay" value={pay.currNetPay} readOnly={true} />
            </fieldset>
        </form>
    )
}

export default CalculatorForm