import { useState } from "react";

interface Props {
  item: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ item, heading, onSelectItem }: Props) {
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {item.length === 0 && <p>No items found</p>};
      <ul className="list-group">
        {item.map((singleItem, index) => (
          <li
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={singleItem}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(singleItem);
            }}
          >
            {singleItem}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
