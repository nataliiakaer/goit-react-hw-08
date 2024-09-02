import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectValueFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectValueFilter);

  const showValueSearch = (event) => {
    const value = event.target.value;
    const action = changeFilter(value);
    dispatch(action);
  };

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={showValueSearch} />
    </div>
  );
};

export default SearchBox;
