import { useLabelsData } from "../helpers/useLabelsData";

export default function LabelList({selected, toggle}) {
  const labelsQuery = useLabelsData();

  return (
    <div className="labels">
      <h3>Labels</h3>
      {
        labelsQuery.isLoading ? <p>loading...</p> : 
          <ul>
            {labelsQuery.data.map((label) => (
              <li key={label.name}>
                <button className={`label ${label.color} ${selected.includes(label.id) ? "selected" : ""}`} onClick={() => {toggle(label.id) }}>{ label.name}</button>
              </li>
            ))}
          </ul>
      }
    </div>
  );
}
