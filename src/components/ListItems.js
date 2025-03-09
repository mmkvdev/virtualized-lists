const itemHeight = 35;

const ListItems = ({ index }) => {
  return (
    <li
      style={{
        height: `${itemHeight}px`,
        backgroundColor: `${index % 2 === 0 ? "gray" : "white"}`,
        // position: "absolute",
        // top: `${index * itemHeight}px`,
        width: "500px",
        listStyle: "none",
        textAlign: "center",
      }}
      key={index}
    >
      List Item - {index}
    </li>
  );
};

export default ListItems;
