import React from "react";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
  <div style={style}>Row {index}</div>
);

const VirtualizedList = () => {
  return (
    <div>
      <h2>Virtualized List Example</h2>
      <List height={200} itemCount={1000} itemSize={35} width={300}>
        {Row}
      </List>
    </div>
  );
};

export default VirtualizedList;
