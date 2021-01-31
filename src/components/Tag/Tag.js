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
        closable: false,
        color: 'default',
        style: null,
        addType: false,
        onClose: null,
    }
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        label: PropTypes.string,
        color: PropTypes.oneOf(colorsForTag),
        closable: PropTypes.bool,
        addType: PropTypes.bool,
        onClose: PropTypes.func,
    }
    constructor(props){
        super(props);
    }
    renderCloseSVG(){
        return (
            <svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.892883 1.14893L8.41714 8.67314" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.41718 1.14893L0.892922 8.67314" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        )
    }
    renderAddSVG(){
        return (
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.60637 0.0905762C6.88251 0.0905768 7.10637 0.314435 7.10637 0.590576L7.10636 5.41104L11.9268 5.41103C12.2029 5.41103 12.4268 5.63488 12.4268 5.91103C12.4268 6.18717 12.2029 6.41103 11.9268 6.41103L7.10635 6.41104L7.10634 11.2315C7.10634 11.5076 6.88248 11.7315 6.60634 11.7315C6.3302 11.7315 6.10634 11.5076 6.10634 11.2315L6.10635 6.41104L1.28589 6.41105C1.00975 6.41105 0.785889 6.1872 0.785889 5.91106C0.785888 5.63491 1.00975 5.41105 1.28589 5.41105L6.10636 5.41104L6.10637 0.590576C6.10637 0.314433 6.33023 0.0905755 6.60637 0.0905762Z" />
            </svg>
        )
    }
    render(){
        const tagClass = classNames(cssStyle['Tag'], cssStyle[`Tag__${this.props.color}`], {[cssStyle[`Tag__add`]]: this.props.addType});
        const labelClass = classNames(cssStyle['Tag__Label'], 
                            cssStyle[`Tag__Label__${this.props.color}`]);
        const iconClass = classNames(cssStyle['Tag__Icon'], cssStyle[`Tag__Icon__${this.props.color}`],
         {[cssStyle[`Tag__Icon__add`]]: this.props.addType})
        return (
        <div className={tagClass}>
            {this.props.addType ? <span className={iconClass}>{this.renderAddSVG()}</span> : null}
            <span className={labelClass}>{this.props.label}</span>
            {this.props.closable && !this.props.addType ? <span className={iconClass}>{this.renderCloseSVG()}</span> : null}
        </div>
        )
    }
}
export default Tag;