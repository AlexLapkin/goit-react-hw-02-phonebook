import css from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({filter, changeInputFilter}) => {
    return (
        <label>
        <p>Find contacts by name</p>
        <input
                className={css.filter_inp}
                type="text"
                name={filter}
                onChange={changeInputFilter}
              />
              </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    changeInputFilter: PropTypes.func,
}

export default Filter;