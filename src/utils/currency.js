const defaults = {
  precision: 2,
  symbol: "$",
  isReversed: false,
  isRounded: true,
};

const round = (v) => Math.round(v);
const pow = (p) => Math.pow(10, p);
const rounding = (value, increment) => round(value / increment) * increment;

const parseValue = (value, opts) => {
  const precision = pow(opts.precision);
  let parsedValue = 0;

  switch (typeof value) {
    case "number": {
      parsedValue = value;
      break;
    }

    case "string": {
      parsedValue = value.replace(/[^-\d.]/g, "");
      parsedValue = parsedValue || 0;
      break;
    }

    default: {
      parsedValue = 0;
    }
  }

  parsedValue *= precision;
  parsedValue = parsedValue.toFixed(4);
  return opts.isRounded ? round(parsedValue) : parseValue;
};

const cur = (value, opts) => {
  let initObj = {};

  let settings = Object.assign({}, defaults, opts);
  let power = pow(settings.precision);
  let parsedValue = parseValue(value, settings);

  settings.increment = settings.increment || 1 / power;

  initObj.intValue = parsedValue;
  initObj.value = parsedValue / power;
  initObj.power = power;
  initObj._settings = settings;

  return {
    get value() {
      return initObj.value;
    },

    toString() {
      const { intValue, power, _settings } = initObj;
      const value = rounding(intValue / power, _settings.increment);

      return value.toFixed(_settings.precision);
    },

    format(options) {
      const settings = Object.assign({}, initObj._settings, options);
      const { isReversed, symbol } = settings;
      const value = this.value + "";

      const [dollars, cents] = value.replace(/^-/, "").split(".");
      const formattedDollars = dollars.replace(/(\d)(?=(\d{3})+\b)/g, "$1 ");
      const formattedCents = cents ? "." + cents : "";
      const sign = value >= 0 ? "" : "-";

      if (isReversed) return sign + formattedDollars + formattedCents + symbol;

      return sign + symbol + formattedDollars + formattedCents;
    },

    plus(number) {
      let { intValue, _settings, power } = initObj;
      const value = (+intValue + +parseValue(number, _settings)) / power;
      const parsedValue = parseValue(value, _settings);

      initObj.intValue = parsedValue;
      initObj.value = parsedValue / power;

      return this;
    },

    minus(number) {
      let { intValue, _settings, power } = initObj;

      const value = (intValue - parseValue(number, _settings)) / power;
      const parsedValue = parseValue(value, _settings);

      initObj.intValue = parsedValue;
      initObj.value = parsedValue / power;

      return this;
    },

    multiply(number) {
      const { intValue, _settings, power } = initObj;
      const value = (intValue * number) / pow(_settings.precision);
      const parsedValue = parseValue(value, _settings);

      initObj.intValue = parsedValue;
      initObj.value = parsedValue / power;

      return this;
    },

    divide(number) {
      let { intValue, _settings } = initObj;
      const value = intValue / parseValue(number, _settings);
      const parsedValue = parseValue(value, _settings);

      initObj.intValue = parsedValue;
      initObj.value = parsedValue / power;

      return this;
    },
  };
};
export default cur;

