import React from "react";
import GridLayout from "./GridLayout/GridLayout";
import Form from './Form/Form';
import Comments from "./Comments/Comments";

export default function Dashboard() {
  return (
    <div className="container-md" align="center">
      <GridLayout />
      {/*<Form />
      <Comments />*/}
    </div>
  );
}