"use client";
// components/FullCalendarComponent.tsx
import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { format } from 'date-fns';
import { render } from 'storyblok-rich-text-react-renderer';
import SidePanel from './sidepanel';

interface Event {
  id: number;
  name: string;
  slug: string;
  content: {
    content: React.ReactNode;  // Rich text content
    Datum: string;
    Time: string;
  };
}

interface FullCalendarComponentProps {
  events: Event[];
}

const FullCalendarComponent: React.FC<FullCalendarComponentProps> = ({ events }) => {
  // State for the side panel
  const [eventDetails, setEventDetails] = useState<any | null>(null);

  // Format events to FullCalendar format
  const [formattedEvents, setFormattedEvents] = useState<any[]>([]);

  useEffect(() => {
    // Convert the events into the format FullCalendar expects
    const calendarEvents = events.map((event) => {
      return {
        title: event.name,
        date: format(new Date(event.content.Datum), 'yyyy-MM-dd'), // FullCalendar expects a string date (yyyy-MM-dd)
        description: render(event.content.content), // Render rich-text content
        time: event.content.Time,
      };
    });

    setFormattedEvents(calendarEvents);
  }, [events]);

  // Handle event click to show event details on the side
  const handleEventClick = (info: any) => {
    const { title, extendedProps } = info.event;
    const { time, description } = extendedProps;

    setEventDetails({
      title,
      date: format(info.event.start, 'yyyy-MM-dd'),
      time,
      description,
    });
  };

  // Close the side panel
  const closeSidePanel = () => {
    setEventDetails(null);
  };

  return (
    <div className="relative">
      {/* FullCalendar Component */}
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={formattedEvents}
        eventClick={handleEventClick}
        style={{
          width: '100%', // Full width based on container
          maxWidth: '1000px', // Limit the max width
          margin: '0 auto', // Center the calendar
        }}
      />

      {/* Side Panel */}
      <SidePanel eventDetails={eventDetails} onClose={closeSidePanel} />
    </div>
  );
};

export default FullCalendarComponent;
