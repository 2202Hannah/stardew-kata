const {
  cropWateringCalculator,
  cropWateringCalculatorImproved,
} = require("./farm");
const {
  mixedForecast,
  noRainForecast,
  oneRainForecast,
  allRainForecast,
  oneDryForecast
} = require("./resources/weather");

describe("cropWateringCalculator()", () => {
  test("returns 0 when there are no rainy days", () => {
    const weatherForecast = noRainForecast;
    expect(cropWateringCalculator(weatherForecast)).toBe(0);
  });
  test("returns 1 when there is one rainy days", () => {
    const weatherForecast = oneRainForecast;
    expect(cropWateringCalculator(weatherForecast)).toBe(1);
  });
  test("returns the total number of rainy days for a varied forecast with multiple rainy days", () => {
    const weatherForecast = mixedForecast;
    expect(cropWateringCalculator(weatherForecast)).toBe(7);
  });
  test("should not mutate the input array", () => {
    const weatherForecast = mixedForecast;
    cropWateringCalculator(weatherForecast);
    expect(weatherForecast).toBe(mixedForecast);
  });
});

describe("cropWateringCalendarImproved()", () => {
  test("returns the expected string when rain is forecast every day", () => {
    const weatherForecast = allRainForecast;
    expect(cropWateringCalculatorImproved(weatherForecast, 10)).toBe(
      "There are 28 days that you can skip watering your crops. You will need 0 sprinkles of water."
    );
  });
  test("returns the expected string when there is no rain forecast and there is one crop", () => {
    const weatherForecast = noRainForecast;
    expect(cropWateringCalculatorImproved(weatherForecast, 1)).toBe(
      "There are 0 days that you can skip watering your crops. You will need 28 sprinkles of water."
    );
  });
  test("returns the expected string when rain is forecast once and there is one crop", () => {
    const weatherForecast = oneRainForecast;
    expect(cropWateringCalculatorImproved(weatherForecast, 1)).toBe(
      "There is 1 day that you can skip watering your crops. You will need 27 sprinkles of water."
    );
  });
    test("returns the expected string when rain is forecast 27 times and there is one crop", () => {
      const weatherForecast = oneDryForecast;
      expect(cropWateringCalculatorImproved(weatherForecast, 1)).toBe(
        "There are 27 days that you can skip watering your crops. You will need 1 sprinkle of water."
      );
    });
    test("returns the expected string when rain is forecast multiple times and there is more than one crop", () => {
      const weatherForecast = mixedForecast;
      expect(cropWateringCalculatorImproved(weatherForecast, 10)).toBe(
        "There are 7 days that you can skip watering your crops. You will need 210 sprinkles of water."
      );
    });
    test("should not mutate the input array", () => {
      const weatherForecast = mixedForecast;
      cropWateringCalculator(weatherForecast);
      expect(weatherForecast).toBe(mixedForecast);
    });
      test("returns the expected string when rain is forecast multiple times and there is more than one crop", () => {
        const weatherForecast = mixedForecast;
        expect(cropWateringCalculatorImproved(weatherForecast, 10, true)).toBe(
          "There are 7 days that you can skip watering your crops. You will need 6 cans of water."
        );
      });
      test("returns the expected string when just one can is required", () => {
        const weatherForecast = oneRainForecast;
        expect(cropWateringCalculatorImproved(weatherForecast, 1, true)).toBe(
          "There is 1 day that you can skip watering your crops. You will need 1 can of water."
        );
      });
});
