import React, { useState } from "react";
import AvailableListOptions from "./components/AvailableListOptions";
import NormalList from "./components/NormalList";
import VirtualizedList from "./components/VirtualizedList";
import "./styles.css";

export default function App() {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <div>
      <AvailableListOptions
        option={selectedOption}
        updateOption={setSelectedOption}
      />
      {selectedOption === "0" && <NormalList numberOfItems={100} />}
      {selectedOption === "1" && <VirtualizedList numberOfItems={100000} />}
    </div>
  );
}
