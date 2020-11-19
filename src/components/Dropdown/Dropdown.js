import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssStyle from './Dropdown.module.scss';


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
        return (
            <div className={cssStyle["DropdownGroup"]}>
                {/* <label id="occurrenceLabel" class="modalDropdownLabel" for="occurrence">Which occurrence of the data should we choose?</label> */}
                <div className={cssStyle["DropdownGroup__Dropdown"]}>
                    <div className={cssStyle["DropdownGroup__Dropdown__select"]}>
                        <div className={cssStyle["DropdownGroup__Dropdown__trigger"]} onClick={this.toggleOptions}>
                           <span data-value={this.state.value}>{this.state.value}</span>
                           <div className={cssStyle["DropdownGroup__Dropdown__Icon"]}></div>
                        </div>
                        {this.state.showOptions ? this.renderOptions() : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown;