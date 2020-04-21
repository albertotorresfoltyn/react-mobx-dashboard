import React from 'react';
import { useObserver, Observer } from "mobx-react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { StoreContext } from '../../main';
import { useContext } from 'react';
import { observe } from "mobx"

const ReactGridLayout = WidthProvider(RGL);

export class BasicLayout extends React.Component {
  constructor(props) {
    super(props);

    observe(props.grid, newValue => {
      debugger;
    });
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

  componentWillReceiveProps() {
    debugger;
  }

  onLayoutChange(layout) {
    //
  }

  render() {
    const { grid } = this.props;
    const gridLayout = grid && grid.map((item, i) => ({...item, i: i.toString()})) || [];

    return (
      <ReactGridLayout
        className="grid-layout"
        layout={ gridLayout }
        onLayoutChange={this.onLayoutChange}
        cols= { 3 }
        rowHeight = { 30 }
      >
        {this.generateDOM(gridLayout)}
      </ReactGridLayout>
    );
  }
}


export default function GridLayout() {
  const store = useContext(StoreContext);

  return (
  <Observer>{() => <BasicLayout grid={store.widgets}></BasicLayout>}</Observer>
  );
}