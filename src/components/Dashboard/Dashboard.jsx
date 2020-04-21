import React from "react";
import GridLayout from "../GridLayout/GridLayout";
import { BasicLayout } from "../GridLayout/GridLayout";
import { Observer } from "mobx-react";
import { StoreContext } from '../../main';
import { useContext } from 'react';

export default function Dashboard() {
  const store = useContext(StoreContext);

  return (
    <div className="container-md" align="center">
      <div className="header">
        <h1>Dashboard name</h1>
        <div className="col-sm">
            <button type="button" className="btn btn-light" onClick={() => store.toggleSidebar()}>Add widget</button>
        </div>
      </div>
      <Observer>{() =>
        <div className={`content ${store.showSidebar ? "sidebar-visible" : ""}`}>

          <div className="main">
            <BasicLayout grid={store.widgets}></BasicLayout>
          </div>
          <div className='sidebar'>
            <h1>Add widget</h1>
            <p>Click add or drag a widget to the left side of the screen to add it to your dashboard.</p>
            <div className="widget-container">
              <h4>Widget 1</h4>
              <button type="button" className="btn btn-light" onClick={() => store.addWidget('Widget 1')}>Add</button>
            </div>
            <div className="widget-container">
              <h4>Widget 2</h4>
              <button type="button" className="btn btn-light" onClick={() => store.addWidget('Widget 2')}>Add</button>
            </div>
            <div className="widget-container">
              <h4>Widget 3</h4>
              <button type="button" className="btn btn-light" onClick={() => store.addWidget('Widget 3')}>Add</button>
            </div>
          </div>
        </div>
      }
      </Observer>
    </div>
  );
}