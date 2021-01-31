import React from 'react';
import Button from './Button/Button';
import cssStyle from './ComponentTest.module.scss';
import InputField from './InputField/InputField';
import Dropdown from './Dropdown/Dropdown';
import Tag from './Tag/Tag';
import ToggleButton from './ToggleButton/ToggleButton';


const componentTest = () => {
    return (
        <div className={cssStyle["Parent"]}>
            {/* <Button text="Download"/>
            <Button text="Download" disabled={true}/>
            <Button text="Download" type="Secondary"/>
            <Button text="Download" type="Tertiary"/>
            <br/>
            <InputField label="Download" disabled/>
            <InputField label="Address" value="Karumathil"/>
            <InputField label="Place" value="Kunnamkulam" type="Success"/>
            <InputField label="Age" value="Thrissur" type="Error"/>
            <InputField label="Job" value="Btech" type="Warning"/> */}
            {/* <Dropdown options={['india', 'America', 'England']} value="india" label="Country" disabled/> */}
            <Tag label="Tag" color="purple" closable/>
            <ToggleButton checked type="text"/>
            <ToggleButton checked />
        </div>
    )
}
export default componentTest;