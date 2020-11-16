import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssStyle from './Button.module.scss';
import classnames from 'classnames';


class Button extends Component {
    static defaultProps = {
        className: null,
        type: 'Primary',
        disabled: false,
        title: null,
        size: null,
        onClick: null,
        active: true
    }
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        disabled: PropTypes.bool,
        title: PropTypes.string,
        size: PropTypes.string,
        onClick: PropTypes.func,
        active: PropTypes.bool,
    }
    constructor(props) {
        super(props);
    }
    getCssClass = (type) => {
        return cssStyle[`Button__${type}`];
    }
    render() {
        const {
            className,
            type,
            size,
            iconOnly,
            text,
            ...other
        } = this.props;
        let children = iconOnly ? this.props.children : text;
        let cssClasses = classnames(cssStyle['Button'], this.getCssClass(type), className)
        return (
            <button 
            className={cssClasses}
            {...other}
            >{children}</button>

        )
    }
}
export default Button;