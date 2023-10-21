import css from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({filter, changeInputFilter}) => {
    return (
        <label>
        <input
                type="text"
                name={filter}
                onChange={changeInputFilter}
                //value={this.state.name}
              />
              </label>
    )
    
}

export default Filter;