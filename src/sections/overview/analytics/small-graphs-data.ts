// generating dates for last 12 days in the format YYYY-MM-DD
const seriesXData = Array.from({ length: 12 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() - index);
  const formattedDate = date.toISOString().split('T')[0];
  return formattedDate;
}).reverse();

const SOH_VALUES = [
  99.87, 99.75, 99.62, 99.5, 99.37, 99.25, 99.12, 99.0, 98.87, 98.75, 98.62, 98.53,
];

// assuming SOC to be in the range 99% to 82% in decreasing order
const SOC_VALUES = Array.from({ length: 12 }, (_, index) => (99 - index * 1.4).toFixed(2));

// as power rating is 15kW,which is max rating,
// asumming operating power to be in the range 10kW to 13kW
// const POWER_VALUES = Array.from({ length: 12 }, () => ((Math.random() * 3 + 10) * 1000).toFixed(2));
const POWER_VALUES = [
  '12918.79',
  '11745.85',
  '12220.06',
  '11940.59',
  '10286.18',
  '11595.20',
  '12263.52',
  '10602.90',
  '12279.01',
  '11114.74',
  '10002.07',
  '11893.44',
];

// voltage is given to give 128v to 148v
// const VOLTAGE_VALUES = Array.from({ length: 12 }, () => (Math.random() * 20 + 128).toFixed(2));
const VOLTAGE_VALUES = [
  '147.79',
  '137.56',
  '141.17',
  '134.22',
  '135.26',
  '131.05',
  '136.01',
  '141.64',
  '128.30',
  '144.05',
  '134.51',
  '134.58',
];

// calculating current from power and voltage
const CURRENT_VALUES = POWER_VALUES.map((value, index) =>
  (Number(value) / Number(VOLTAGE_VALUES[index])).toFixed(2)
);
// const CURRENT_VALUES = ['75.15', '90.01', '89.65', '87.40', '72.44', '80.10', '76.06', '83.09', '85.85', '83.91', '76.81', '78.74']

export const SOH_DATA = SOH_VALUES.map((value, index) => ({
  x: seriesXData[index],
  y: value,
}));

export const SOC_DATA = SOC_VALUES.map((value, index) => ({
  x: seriesXData[index],
  y: value,
}));

export const VOLTAGE_DATA = VOLTAGE_VALUES.map((value, index) => ({
  x: seriesXData[index],
  y: value,
}));

export const CURRENT_DATA = CURRENT_VALUES.map((value, index) => ({
  x: seriesXData[index],
  y: value,
}));
