import { useEffect, useState } from 'react';
import { Heading, Divider, Container } from '@chakra-ui/react';
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Agenda = () => {
  const navigate = useNavigate();  
  // Daftar acara kalender
  interface IEvents {
    date: Date,
  }
  const [events, setEvents] = useState<IEvents[]>([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_ENDPOINT}agenda`)
      .then((response) => {
        // setEvents(response.data.data.data);
        setEvents(response.data.data.data);
      })
  }, []);  

  const handleEventClick = (info: any) => {
    navigate(`/detail-agenda/${info.event.extendedProps.tanggal.slice(0, 10)}`);
  };  
      
  return (
    <Container maxW={'6xl'}>
      <Heading as="h2" marginTop="5" textAlign={'center'} display={'flex'} gap={2} justifyContent={'center'}>
        Agenda Terbaru <BsFillCalendar3WeekFill />
      </Heading>
      <Divider my="5" />
      <Container maxW={'4xl'}>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={events} // Menggunakan daftar acara kalender
          eventClick={handleEventClick}
        />
      </Container>
    </Container>
  );
};

export default Agenda;