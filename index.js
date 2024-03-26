// Code your solution in this file!
const HQ = 42;
function distanceFromHqInBlocks(location) {
  if (location < 42) {
    return HQ - location;
  } else {
    return location - HQ;
  }
}

function distanceFromHqInFeet(location) {
  if (location < 42) {
    return (HQ - location) * 264;
  } else {
    return (location - HQ) * 264;
  }
}

// console.log(distanceFromHqInBlocks(43));
const headQuaters = 42;
const feetPerStreet = 264;
function distanceTravelledInFeet(headQuaters, block) {
  if (block < headQuaters) {
    return (headQuaters - block) * feetPerStreet;
  } else {
    return (block - headQuaters) * feetPerStreet;
  }
}
// console.log(distanceTravelledInFeet(headQuaters, 43));

function calculatesFarePrice(headQuaters, destination) {
  const distance = Math.abs(headQuaters - destination) * 264;
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
console.log(calculatesFarePrice(43, 44));
