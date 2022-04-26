// Now, we need to add below code into our src/app/app.component.ts file:

import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
//Set LocalStorage item data and Convert Custom array data to Json String
localStorage.setItem('events',  JSON.stringify([{ title: 'event 1', date: '2020-08-05', backgroundColor:"pink" },
{ title: 'event 1', date: '2020-08-04', backgroundColor:"red" }, { title: 'event 1', date: '2020-08-05', backgroundColor:"green" },
{ title: 'event 1', date: '2020-08-04', backgroundColor:"black" }
]));
export class AppComponent {

    
   //Convert LocalStorage Json String to Javascript Object
   events = JSON.parse(localStorage.getItem('events'));
   calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    
    //Render Localstorage json events
    events:this.events
      
    
  };
}