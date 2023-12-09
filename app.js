"use strict";
class Vehicle {
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicle {
}
const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
kmToMiles({ run: 1 });
function lodID(id, extraData) {
    console.log(id);
    console.log(extraData);
    return { id, data: extraData };
}
