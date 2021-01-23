import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssStyle from './Dropdown.module.scss';
import DropDownIcon from '../../resources/images/icons/dropdown.svg';
import classNames from 'classnames';
import onClickOutside from "react-onclickoutside";
class Dropdown extends Component {

    static defaultProps = {
        className: null,
        disabled: false,
        onChange: null,
        options: [],
        value: null,
        label: null,
        style: null,
    }
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        options: PropTypes.array,
        value: PropTypes.string,
        label: PropTypes.string,
    }
    constructor(props){
        super(props);
        let value = this.props.value;
        this.state = {
            showOptions: false,
            value: value,
        }
    }
    handleClickOutside = () => {
        this.setState({'showOptions': false})
    }
    toggleOptions = () => {
        let showOptions = this.state.showOptions;
        this.setState({"showOptions": !showOptions})
    }
    changeOptions = (option) => {
        this.setState({"value": option, "showOptions": false})
    }
    renderOptions = () => {
        let classForOpen = this.state.showOptions ? 
                            cssStyle["DropdownGroup__Dropdown__options--open"] : 
                            '';
        let optionsUpdated = ['null', ...this.props.options];
        let selectedClass = cssStyle["DropdownGroup__Dropdown__options--selected"];
        let optionsEl = optionsUpdated.map((option, i) => {
            return <span className={this.state.value === option ? selectedClass: ''} 
                        key={option + i} data-value={option} 
                        onClick={() => this.changeOptions(option)}>{option}</span>
        })
        return (
            <div className={`${cssStyle["DropdownGroup__Dropdown__options"]} ${classForOpen}`}>
                {optionsEl}
            </div>
        )
    }
    render() {
        const dropdownClasses = classNames(cssStyle["DropdownGroup__Dropdown"], 
            {[cssStyle["DropdownGroup__Dropdown--open"]]: this.state.showOptions},
            {[cssStyle['DropdownGroup__Dropdown--disabled']]: this.state.disabled})
        const labelClass =  classNames(cssStyle["DropdownGroup__Label"], 
            {[cssStyle["DropdownGroup__Label--open"]]: this.state.showOptions},
            {[cssStyle['DropdownGroup__Label--disabled']]: this.props.disabled})
        const iconClass = classNames(cssStyle['DropdownGroup__Dropdown__Icon'], 
            {[cssStyle['DropdownGroup__Dropdown__Icon--disabled']]: this.props.disabled})
        return (
            <div className={cssStyle["DropdownGroup"]}>
                <label className={labelClass}>{this.props.label}</label>
                <div className={dropdownClasses}>
                    <div className={cssStyle["DropdownGroup__Dropdown__select"]}>
                        <div className={cssStyle["DropdownGroup__Dropdown__trigger"]} onClick={this.toggleOptions}>
                            <span data-value={this.state.value}>{this.state.value}</span>
                            <img className={iconClass} src={DropDownIcon} alt="dropdown"/>
                        </div>
                        {!this.props.disabled && this.state.showOptions ? this.renderOptions() : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default onClickOutside(Dropdown);