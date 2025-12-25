import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';



export default function Calendar() {


    return (<div className="calendar-wrapper">

        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            // initialView={}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            aspectRatio={0.5}
            dayMaxEventRows={true}
            // events={}
            // dateClick={}
            // eventClick={}
            editable={true}
            selectable={true}
            // slotDuration={}
            height="100%"
            contentHeight={600}
        // eventColor={}
        />
    </div>

    );
}
