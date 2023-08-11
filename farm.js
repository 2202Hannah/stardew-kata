// Level 1
function cropWateringCalculator(forecast) {
  let totalRainyDays = 0;
  forecast.forEach((day) => {
    if (Object.values(day).includes("rain")) {
      totalRainyDays += 1;
    }
  });
  return totalRainyDays;
}

// Level 2 and 3
function cropWateringCalculatorImproved(forecast, numOfCrops, isWateringCan) {
  let totalRainyDays = 0;
  let wateringStr = "";
  let sprinklesStr = "";

  forecast.forEach((day) => {
    if (Object.values(day).includes("rain")) {
      totalRainyDays += 1;
    }
  });

  let sprinkles = (28 - totalRainyDays) * numOfCrops;

  totalRainyDays === 1
    ? (wateringStr = `There is 1 day that you can skip watering your crops. `)
    : (wateringStr = `There are ${totalRainyDays} days that you can skip watering your crops. `);

  sprinkles === 1
    ? (sprinklesStr = "You will need 1 sprinkle of water.")
    : (sprinklesStr = `You will need ${sprinkles} sprinkles of water.`);

  sprinkles / 40 < 1
    ? (canStr = "You will need 1 can of water.")
    : (canStr = `You will need ${Math.ceil(sprinkles / 40)} cans of water.`);

  return isWateringCan
    ? (wateringStr += canStr)
    : (wateringStr += sprinklesStr);
}

module.exports = { cropWateringCalculator, cropWateringCalculatorImproved };
