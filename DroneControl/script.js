$(document).ready(function() {
    var altimeter1 = $.flightIndicator('#altimeter', 'altimeter');
    altimeter1.setAltitude(0);

    // Altitude Socket Handling
    socket.on("parameters", function(data) {
        console.log('Received altitude update:', data.data);
        const altitudeInFeet = data.data * 3.28084;
        altimeter1.setAltitude(altitudeInFeet);
        document.querySelector("#altitude1 dis").innerHTML = "Altitude: " + data.data;
    });

    // Yaw Socket Handling (Incomplete)
    //socket.on("yaw_data", function(data) {
        // Incomplete: The code for handling yaw data is not provided.
    //});
});