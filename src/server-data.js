const cuid = require("cuid");

module.exports = [
  {
    id: cuid(),
    firstName: "Joseph",
    lastName: "Rivera",
    address1: "1234 Brilliant St",
    address2: "",
    city: "Miami",
    state: "Florida",
    zip: "33139",
  },
  {
    id: cuid(),
    firstName: "Tyler",
    lastName: "Sharp",
    address1: "444 Awesome Street",
    address2: "",
    city: "Atlanta",
    state: "Georgia",
    zip: "30062",
  },
  {
    id: cuid(),
    firstName: "Sam",
    lastName: "Sample",
    address1: "202 Boring Street",
    address2: "#400",
    city: "Stupid",
    state: "Minnesota",
    zip: "30048",
  },
];
