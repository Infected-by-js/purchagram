const DEFAULTS = {
  precision: 2,
  separator: ' ',
};

const isValidNumber = (number) => !Number.isNaN(+number) && Number.isFinite(+number);
const round = (v) => Math.round(v);
const pow = (p) => Math.pow(10, p);
const rounding = (value, increment) => round(value / increment) * increment;

const parse = (value, options, useRound = true) => {
  if (!isValidNumber(value)) throw 'Invalid number';

  const precision = pow(options.precision);
  let parsedValue = 0;

  switch (typeof value) {
    case 'number': {
      parsedValue = value;
      break;
    }

    case 'string': {
      parsedValue = value.replace(/[^-\d.]/g, '') || 0;
      break;
    }

    default: {
      parsedValue = 0;
    }
  }

  parsedValue = (parsedValue * precision).toFixed(4);

  return useRound ? round(parsedValue) : parsedValue;
};

const number = (value, options = DEFAULTS) => {
  let initObj = {};

  let settings = Object.assign({}, DEFAULTS, options);
  let power = pow(settings.precision);
  let parsedValue = parse(value, settings);

  settings.increment = settings.increment || 1 / power;

  initObj.intValue = parsedValue;
  initObj.value = parsedValue / power;
  initObj.power = power;
  initObj._settings = settings;

  return {
    add(number) {
      let {intValue, _settings, _initValue, power} = initObj;
      const value = (+intValue + +parse(number, _settings)) / power;
      const parsedValue = parse(value, _settings);

      initObj.intValue = parsedValue;
      initObj.value = parsedValue / power;

      return this;
    },

    sub(number) {
      let {intValue, _settings, _initValue, power} = initObj;

      const value = (intValue - parse(number, _settings)) / power;
      const parsedValue = parse(value, _settings);

      initObj.intValue = parsedValue;
      initObj.value = parsedValue / power;

      return this;
    },

    multiply(number) {
      const {intValue, _settings, _initValue, power} = initObj;
      const value = (intValue * number) / pow(_settings.precision);
      const parsedValue = parse(value, _settings);

      initObj.intValue = parsedValue;
      initObj.value = parsedValue / power;

      return this;
    },

    divide(number) {
      let {intValue, _settings, _initValue} = initObj;
      const value = intValue / parse(number, _settings, false);
      const parsedValue = parse(value, _settings);

      initObj.intValue = parsedValue;
      initObj.value = parsedValue / power;

      return this;
    },

    get value() {
      return initObj.value;
    },

    format(options) {
      const {separator} = Object.assign({}, initObj._settings, options);

      const value = String(initObj.value);
      const point = value.indexOf('.');
      const regExp = new RegExp(/\d(?=(?:\d{3})+(?:\.|$))/g);

      return value.replace(regExp, (m, i) => (point < 0 || i < point ? `${m}${separator}` : m));
    },

    toString() {
      const {intValue, power, _settings} = initObj;
      const value = rounding(intValue / power, _settings.increment);

      return value.toFixed(_settings.precision);
    },

    valueOf() {
      return this.value;
    },
  };
};
