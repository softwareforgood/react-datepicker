import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class DayContent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      startDate: moment()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render () {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">{`
<DatePicker
    inline
    selected={this.state.startDate}
    onChange={this.handleChange}
/>
`}
        </code>
      </pre>
      <div className="column">
        <DatePicker
            inline
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateData={{
              "2017-07-30":0,
              "2017-07-31":0,
              "2017-08-01":0,
              "2017-08-02":0,
              "2017-08-03":0,
              "2017-08-04":0,"2017-08-05":0,"2017-08-06":0,"2017-08-07":0,"2017-08-08":0,"2017-08-09":0,"2017-08-10":0,"2017-08-11":0,"2017-08-12":0,"2017-08-13":0,"2017-08-14":0,"2017-08-15":14,"2017-08-16":14,"2017-08-17":14,"2017-08-18":14,"2017-08-19":0,"2017-08-20":0,"2017-08-21":20,"2017-08-22":20,"2017-08-23":39,"2017-08-24":39,"2017-08-25":39,"2017-08-26":0,"2017-08-27":0,"2017-08-28":19,"2017-08-29":19,"2017-08-30":19,"2017-08-31":19
            }}/>
      </div>
    </div>
  }
}
