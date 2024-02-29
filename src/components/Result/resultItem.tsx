import { ResultItemProps } from "../../models/resultItem";

function ResultItem({ result, onClick }: ResultItemProps): JSX.Element {
  return (
    <button key={result.id} type="button" onClick={onClick} style={{ all: "unset", cursor: "pointer", display: "block", width: "100%" }}>
      {result.name}
    </button>
  );
}

export default ResultItem;
