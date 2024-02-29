import Loader from "../Loader/loader";
import styles from "./searchInputSpinner.m.scss";

interface Props {
  onChange: (search: string) => void;
  onFocus: (isFocused: boolean) => void;
  isLoading: boolean;
}

function SearchInputWithSpinner({ onChange, onFocus, isLoading }: Props) {
  return (
    <div className={styles.searchInputSpinner}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          e.preventDefault();
          onChange(e.target.value);
        }}
        onFocus={() => onFocus(true)}
        onBlur={() => onFocus(false)}
      />
      {isLoading && <Loader />}
    </div>
  );
}

export default SearchInputWithSpinner;
