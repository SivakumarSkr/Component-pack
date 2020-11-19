import React, { Component } from "react";
import cssStyle from './InputField.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import errorIcon from '../../resources/images/icons/error.svg';
import successIcon from '../../resources/images/icons/success.svg';
import warningIcon from '../../resources/images/icons/warning.svg';
class InputField extends Component {
    static defaultProps = {
        className: null,
        disabled: false,
        onChange: null,
        placeholder: "Please give the value.",
        value: null,
        label: null,
        type: 'Normal'
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
    getIcon = (type) => {
        switch(type){
            case 'Success':
                return successIcon;
            case 'Warning':
                return warningIcon;
            case 'Error':
                return errorIcon
        }
    }
    render() {
        const {
            className,
            label,
            type,
            ...others
        } = this.props;
        const classes = classNames(cssStyle['Input'], cssStyle[`Input--${type}`], className);
        const cssLabel = classNames(cssStyle['Label'], 
                cssStyle[`Label--${type}`], 
                {[cssStyle['Label__Disabled']]: this.props.disabled})
        return (
            <div className={cssStyle["InputField"]}>
                <div className={cssLabel}>{label}</div>
                <div className={cssStyle["InputField__Field"]}>
                    {type !== "Normal"? <img className={cssStyle['Icon']} src={this.getIcon(type)} alt="success"/> : null}
                    <input className={classes}
                    spellCheck={false}
                    {...others}/>
                </div>
            </div>
        )
    }
}
export default InputField;
