import React, {Component} from 'react';
import SearchIcon from '../../resources/images/icons/search.svg';
import PropTypes from 'prop-types';
import cssStyle from './SearchField.module.scss';

class Dropdown extends Component {

    static defaultProps = {
        className: null,
        onChange: null,
        placeHolder: 'Search',
        options: [],
        query: null,
        style: null,
    }
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        onChange: PropTypes.func,
        placeHolder: PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state = {
            query: '',
            data: [],

        }
    }
    renderOptions = () => {
        let searchItems = this.state.data.map((option, i) => {
            return <span className={cssStyle["SearchField__option"] } 
                        key={option + i} data-value={option} 
                        onClick={() => this.changeOptions(option)}>{option}</span>
        })
        return (
            <div className={cssStyle["SearchField__options"]}>
                {searchItems}
            </div>
        )
    }
}