import { useState } from "react";
import ListItems from "./ListItems";

const itemHeight = 35;
const windowHeight = 500;
const overScan = 10; // no if items to render before and after the current window

const VirtualizedList = ({ numberOfItems }) => {
  const [scrollTop, setScrollTop] = useState(0);

  // calculate startIndex and endIndex
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overScan);
  const endIndex = Math.min(
    numberOfItems,
    Math.floor((scrollTop + windowHeight) / itemHeight) + overScan
  );
  let renderedNodesCount = Math.floor(windowHeight / itemHeight) + 2 * overScan;

  // re-calculate the renderedNodesCount to attribute for excessive addition of overscanned items when the scroll reaches the bottom
  renderedNodesCount = Math.min(numberOfItems - startIndex, renderedNodesCount);

  const generateRows = () => {
    let items = [];
    for (let i = 0; i < renderedNodesCount; i++) {
      const index = i + startIndex;
      items.push(<ListItems key={index} index={index} />);
    }

    return items;
  };

  return (
    <ul
      style={{
        height: `${windowHeight}px`,
        overflowY: "scroll",
        // position: "relative",
        padding: 0,
        width: "500px",
        border: "1px solid black",
        margin: "100px",
      }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div
        style={{
          height: `${numberOfItems * itemHeight}px`,
        }}
      >
        <div
          style={{
            transform: `translateY(${startIndex * itemHeight}px)`,
          }}
        >
          {generateRows()}
        </div>
      </div>
    </ul>
  );
};

export default VirtualizedList;
