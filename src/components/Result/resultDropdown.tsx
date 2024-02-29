import ResultItemComponent from "./resultItem";
import { ResultsDropdownProps } from "../../models/resultDropdown";
import styles from "./result.m.scss";

function ResultDropdown({ searchResults, onResultClick }: ResultsDropdownProps) {
  return (
    <div className={styles.dropdownContent}>
      <ul>
        {searchResults.map((result) => (
          <ResultItemComponent key={result.id} result={result} onClick={() => onResultClick(result)} />
        ))}
      </ul>
    </div>
  );
}

export default ResultDropdown;
