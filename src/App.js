/*
	In order to accomplish this task, you are supposed to do the following:

	Make it working so that clicking on any of buttons leads to "Counter"
	label being up to date in both instances of a component.

	Current behavior: you click on button #2, both label #1 and label #2 stay
	the same and display the old value of a counter. Basically, nothing happens.

	Desired behavior: you click on button #2, and both label #1 and label #2 now
	display a relevant value of a counter.

*/

import EventEmitter from "wolfy87-eventemitter";
import React from "react";

class DataModel extends EventEmitter {
  constructor() {
    super();
    this._data = { counter: 0 };
  }

  data() {
    return this._data;
  }

  async increaseCounter() {
    this._data = { ...this._data, counter: ++this._data.counter };
  }
}

// Component (receives an instance of the `DataModel` as a `model` prop)
const DataView = ({ model }) => {
  const [data, onDataUpdated] = React.useState(model.data());

  return (
    <div>
      <p>Counter: {data.counter}</p>
      <button type="button" onClick={() => model.increaseCounter()}>
        Increase Counter
      </button>
    </div>
  );
};

export const App = () => {
  const model = new DataModel();

  return (
    <>
      <DataView model={model} />
      <DataView model={model} />
    </>
  );
};
