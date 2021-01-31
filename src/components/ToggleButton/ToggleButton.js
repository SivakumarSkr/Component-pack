import React, {Component} from 'react';
import uniqueId from 'react-html-id';
import cssStyle from './ToggleButton.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class ToggleButton extends Component{
    static defaultProps = {
        type: 'normal',
        style: null,
        checked: false,
    }
    static propTypes = {
        type: PropTypes.oneOf('normal', 'text'),
        style: PropTypes.object,
        checked: PropTypes.bool,
    }
    constructor(){
        super();
        uniqueId.enableUniqueIds(this);
    }
    render(){
        const flipSwitchInner = classNames(cssStyle['flipswitch-inner'], {[cssStyle['flipswitch-inner--text']]: this.props.type === 'text'});
        const flipSwitch = classNames(cssStyle['flipswitch'], {[cssStyle['flipswitch--text']]: this.props.type === 'text'});
        const flipSwitchSwitch = classNames(cssStyle['flipswitch-switch'], {[cssStyle['flipswitch-switch--text']]: this.props.type === 'text'})
        return (
            <div className={flipSwitch}>
                <input type="checkbox" name="flipswitch" className={cssStyle["flipswitch-cb"]} id={this.nextUniqueId()} defaultChecked={this.props.checked}/>
                <label className={cssStyle["flipswitch-label"]} for={this.lastUniqueId()}>
                    <div className={flipSwitchInner}></div>
                    <div className={flipSwitchSwitch}></div>
                </label>
            </div>
        )
    }
}
export default ToggleButton;