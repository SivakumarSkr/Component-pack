import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cssStyle from './Tag.module.scss';
import classNames from 'classnames';
import CloseIcon from './../../resources/images/icons/close.svg';


const colorsForTag = [
    'default',
    'red',
    'orange', 
    'yellow', 
    'green', 
    'lightgreen', 
    'blue', 
    'mediumblue', 
    'lightblue', 
    'purple', 
    'lightpurple'
]

class Tag extends Component{
    static defaultProps = {
        className: null,
        label: null,
        closable: null,
        color: 'default',
        style: null,
    }
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        label: PropTypes.string,
        color: PropTypes.oneOf(colorsForTag),
        closable: PropTypes.bool,
    }
    constructor(props){
        super(props);
    }
    render(){
        const tagClass = classNames(cssStyle['Tag'], cssStyle[`Tag__${this.props.color}`]);
        const labelClass = classNames(cssStyle['Tag__Label'], 
                            cssStyle[`Tag__Label__${this.props.color}`]);
        const iconClass = classNames(cssStyle['Tag__icon'], cssStyle[`Tag__Icon__${this.props.color}`])
        return (
        <div className={tagClass}>
            <span className={labelClass}>{this.props.label}</span>
            <span className={iconClass}><img src={CloseIcon} alt="close icon"/></span>
        </div>
        )
    }
}
export default Tag;