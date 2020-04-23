import React from "react";
import { BasicLayout } from "../GridLayout/GridLayout";
import { Observer } from "mobx-react";
import { StoreContext } from '../../main';
import { useContext } from 'react';

export default function Dashboard() {
  const store = useContext(StoreContext);
  const sidebarWidgets = ['Widget 1', 'Widget 2', 'Widget 3'];
  const triggerResizeGradually = () => {
    for (let t = 0; t <= 400; t += 10) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, t)
    }
  };

  return (
    <div className="container-md" align="center">
      <div className="header">
        <h1>Dashboard name</h1>
        <div className="col-sm buttons-container">
            <button type="button" className="btn btn-light" onClick={() => {
              store.toggleSidebar();
              triggerResizeGradually();
            }}>Add widget</button>
        </div>
      </div>
      <Observer>{() =>
        <div className={`content ${store.showSidebar ? "sidebar-visible" : ""}`}>
          <h1 style={{display: 'none'}}>{ store.widgets.length }</h1>

          <div className="main">
            <BasicLayout grid={store.widgets} store={store}></BasicLayout>
          </div>
          <div className='sidebar'>
            <h1>Add widget</h1>
            <p>Click add or drag a widget to the left side of the screen to add it to your dashboard.</p>
            {
              sidebarWidgets.map((widget, i) => {
                return <SidebarWidget widgetName={ widget } store={store} key={i}/>
              })
            }
          </div>
        </div>
      }
      </Observer>
    </div>
  );
}

const SidebarWidget = ({ widgetName, store }) => ((
    <div className="widget-container droppable-element"
      draggable={true}
      unselectable="on"
      // this is a hack for firefox
      // Firefox requires some kind of initialization
      // which we can do by adding this attribute
      // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
      onDragStart={e => {
        e.dataTransfer.setData("text/plain", "");
        store.setDraggingWidget(widgetName);
      }}
      onDragEnd={e => {
        store.clearDraggingWidget(widgetName);
      }}
    >
    <h4>{ widgetName }</h4>
    <button type="button" className="btn btn-light" onClick={() => store.addWidgetAtFirstPosition(widgetName)}>Add</button>
  </div>
));
