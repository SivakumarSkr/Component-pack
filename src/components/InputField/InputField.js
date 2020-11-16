import React, { Component } from "react";
import cssStyle from './InputField.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class InputField extends Component {
    static defaultProps = {
        className: null,
        disabled: false,
        onChange: null,
        placeholder: "Please give the value.",
        value: null,
        label: null
    }
    static propTypes = {
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        label: PropTypes.string.isRequired,
    }
    constructor(props){
        super(props)
    }
    render() {
        const {
            className,
            label,
            ...others
        } = this.props;
        const classes = classNames(cssStyle['Input'], className);
        const cssLabel = classNames(cssStyle['Label'], {[cssStyle['Label__Disabled']]: this.props.disabled})

        return (
            <div className={cssStyle["InputField"]}>
                <div className={cssLabel}>{label}</div>
                <input className={classes} 
                spellCheck={false}
                {...others}/>
            </div>
        )
    }
}
export default InputField;
