import React from 'react';
import Button from './Button/Button';
import cssStyle from './ComponentTest.module.scss';
import InputField from './InputField/InputField';


const componentTest = () => {
    return (
        <div className={cssStyle["Parent"]}>
            <Button text="Download"/>
            <Button text="Download" disabled={true}/>
            <Button text="Download" type="Secondary"/>
            <Button text="Download" type="Tertiary"/>
            <br/>
            <InputField label="Download" disabled/>
            <InputField label="Address" value="Karumathil"/>
        </div>
    )
}
export default componentTest;