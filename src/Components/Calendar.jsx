import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import "./Calendar.css"





export default class DemoApp extends React.Component {




  render() {
    return (
      <div className="calendar">
      <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
      </div>
    )
  }
}

// calendar.addEvent( event [, source ] )