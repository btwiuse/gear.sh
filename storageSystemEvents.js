// Subscribe to system events via storage
api.query.system.events((events) => {
  console.log("----- Received " + events.length + " event(s): -----");
  // loop through the Vec<EventRecord>
  events.forEach((record) => {
    // extract the phase, event and the event types
    const { event, phase } = record;
    const types = event.typeDef;
    // show what we are busy with
    console.log(
      event.section + ":" + event.method + "::" + "phase=" + phase.toString(),
    );
    console.log(event.meta.docs.toString());
    // loop through each of the parameters, displaying the type and data
    event.data.forEach((data, index) => {
      console.log(types[index].type + ";" + data.toString());
    });
  });
});
