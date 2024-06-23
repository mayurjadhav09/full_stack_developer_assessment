const minimumJumpsToDestination = (fuel) => {
  const numberOfAirports = fuel.length;
  if (numberOfAirports === 0) return -1;
  if (numberOfAirports === 1) return 0;

  let numberOfJumps = 0;
  let currentPosition = 0;
  let nextFarPosition = 0;

  for (let i = 0; i < numberOfAirports - 1; i++) {
    let upcomingDestination = i + fuel[i]; // maximum jump to next destination

    if (nextFarPosition < upcomingDestination) {
      nextFarPosition = upcomingDestination;
    }

    if (i === currentPosition) {
      // check for if current position has the same unit of fuel if true then need to refil
      numberOfJumps++;
      currentPosition = nextFarPosition;
      if (currentPosition >= numberOfAirports - 1) {
        return numberOfJumps;
      }
    }
  }

  // check if the the destination of the airplane has reached the end of airport list
  // if it has crossed the jumps then return -1
  return nextFarPosition >= numberOfAirports - 1 ? numberOfJumps : -1;
};

const testCase1 = [2, 1, 0, 3, 1]; // output 2
const testCase2 = [1, 6, 3, 4, 5, 0, 0, 0, 6]; // output 3  from 1->6
console.log(minimumJumpsToDestination(testCase1));
