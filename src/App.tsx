import React from 'react';
import './App.css';
import ListenEvent from "./components/listen-event.component";
import { EmitEventComponent }  from "./components/emit-event.component";
import { EventEmitterProvider } from "./event-emitter"

function App() {
    return (
    <>
        <EventEmitterProvider>
            <EmitEventComponent></EmitEventComponent>
            <ListenEvent></ListenEvent>
        </EventEmitterProvider>
    </>
  );
}

export default App;