class NumberRange {
  private min: number;

  private max: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  public getMin(): number {
    return this.min;
  }

  public getMax(): number {
    return this.max;
  }

  public contains(arg: number): boolean {
    return arg >= this.min && arg <= this.max;
  }
}

function readingOutsideRange1(station, range: NumberRange) {
  return station.readings.filter((r) => range.contains(r.temp));
}

const station1 = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

const operationPlan1 = {
  temperatureFloor: 47,
  temperatureCeiling: 75,
};

const range = new NumberRange(
  operationPlan1.temperatureFloor,
  operationPlan1.temperatureCeiling
);

readingOutsideRange1(station1, range);
