import React from 'react';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

export class BasicLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: props.store
    };
  }

  generateDOM(layout) {
    return _.map(_.range(layout && layout.length), (i) => {
      return (
        <div key={i} className="grid-item">
          <span className="text">{layout[i].title}</span>
        </div>
      );
    });
  }

  onLayoutChange(layout) {
    //
  }

  onDrop = elemParams => {
    this.state.store.addDraggedWidget({
      x: elemParams.x,
      y: elemParams.y
    });
  };

  render() {
    const { grid } = this.props;
    const gridLayout = grid && grid.map((item, i) => ({...item, i: i.toString()})) || [];

    return (
      <ReactGridLayout
        className="grid-layout"
        layout={ gridLayout }
        width= { 500 }
        onLayoutChange={ this.onLayoutChange }
        cols= { 3 }
        rowHeight = { 30 }
        useCSSTransforms = {false}
        measureBeforeMount = { false }
        onDrop = {this.onDrop}
        isDroppable = { true }
        // compactType = "horizontal"
        droppingItem = { { w: 2, h: 4, i: (gridLayout.length + 1).toString() } }
      >
        {this.generateDOM(gridLayout)}
      </ReactGridLayout>
    );
  }
}
