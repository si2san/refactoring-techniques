function distanceTraveled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass;
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime;
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }

  return result;
}

// Assigning to an Input Parameter
// Applying Split Variable
function discount(originalInputValue, quantity) {
  let inputValue = originalInputValue;
  if (inputValue > 50) {
    inputValue = inputValue - 2;
  }
  if (quantity > 100) {
    inputValue = inputValue - 1;
  }

  return inputValue;
}

// Then continue applying (Rename Variable)
function discount(inputValue, quantity) {
  let result = inputValue;

  if (inputValue > 50) {
    result = inputValue - 2;
  }
  if (quantity > 100) {
    result = inputValue - 1;
  }

  return result;
}
