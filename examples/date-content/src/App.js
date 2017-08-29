import React, { Component } from 'react';
import DatePicker from './files/datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const data = {
  "data": {
    "2017-05-01": 0,
    "2017-05-02": 0,
    "2017-05-03": 0,
    "2017-05-04": 0,
    "2017-05-05": 0,
    "2017-05-06": 0,
    "2017-05-07": 0,
    "2017-05-08": 0,
    "2017-05-09": 0,
    "2017-05-10": 0,
    "2017-05-11": 0,
    "2017-05-12": 0,
    "2017-05-13": 0,
    "2017-05-14": 0,
    "2017-05-15": 0,
    "2017-05-16": 0,
    "2017-05-17": 0,
    "2017-05-18": 0,
    "2017-05-19": 0,
    "2017-05-20": 0,
    "2017-05-21": 0,
    "2017-05-22": 0,
    "2017-05-23": 0,
    "2017-05-24": 0,
    "2017-05-25": 0,
    "2017-05-26": 0,
    "2017-05-27": 0,
    "2017-05-28": 0,
    "2017-05-29": 0,
    "2017-05-30": 0,
    "2017-05-31": 0
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }

  render() {
    return (
      <div>
        <DatePicker
          inline
          dateData={ data.data }
        />
      </div>
    );
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
}

export default App;
