import ListItems from "./ListItems";

const NormalList = ({ numberOfItems }) => {
  return (
    <div className="normal-list">
      <ul
        style={{
          height: "500px",
          width: "500px",
          padding: 0,
          overflowY: "scroll",
        }}
        onScroll={(e) => console.log("scroll top: ", e.currentTarget.scrollTop)}
      >
        {Array(numberOfItems)
          .fill(null)
          .map((_, index) => index)
          .map((cellIndex) => (
            <ListItems key={cellIndex} index={cellIndex} />
          ))}
      </ul>
    </div>
  );
};

export default NormalList;
