import React, { useContext } from 'react';
import { useObserver } from "mobx-react";
import { StoreContext } from '../../main';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

 class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 5,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 3
  };

  constructor(props) {
    super(props);debugger;
    const layout = this.props.grid //|| this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    debugger;
    return _.map(_.range(this.state.layout.length), function(i) {
      return (
        <div key={i} className="grid-item">
          <span className="text">{this.state.layout[i]}</span>
        </div>
      );
    });
  }

  /*generateLayout() {
    const p = this.props;
    const arr = _.map(new Array(p.layout), function(item, i) {
      const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
    console.log(arr);
    return arr;
  }*/

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.grid) {debugger;
      this.props.layout = newProps.grid
    }
  }

  render() {
    return (
      <ReactGridLayout
        className="grid-layout"
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

export default function GridLayout() {
  const store = useContext(StoreContext);
  console.log(store)
  return (
      useObserver(() => {
        return <BasicLayout grid = {store.Widget}></BasicLayout>
      }
    )
  )
}