import React from 'react';

import { Grid, AutoSizer } from 'react-virtualized';

import Servant from 'components/shared/PerformantList/Servant';

import 'react-virtualized/styles.css';

const ServantList = ({ ids }) => {
  return (
    <AutoSizer>
      {({ height, width }) => {
        const columnCount = Math.floor(width / 200);
        const rowCount = Math.ceil(ids.length / columnCount);
        const cellRenderer = ({ columnIndex, rowIndex, style }) => {
          const index = rowIndex * columnCount + columnIndex;

          if (index >= ids.length) return null;

          const servantId = ids[index];

          return <Servant key={servantId} id={servantId} style={style} />;
        };

        return (
          <Grid
            cellRenderer={cellRenderer}
            columnWidth={200}
            columnCount={columnCount}
            rowHeight={250}
            rowCount={rowCount}
            width={width}
            height={height}
          />
        );
      }}
    </AutoSizer>
  );
};

export default ServantList;
