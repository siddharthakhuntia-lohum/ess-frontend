// generating dates for last 12 days in the format YYYY-MM-DD
const seriesXData = Array.from({ length: 12 }, (_, index) => {
  const date = new Date();
  date.setDate(date.getDate() - index);
  const formattedDate = date.toISOString().split('T')[0];
  return formattedDate;
}).reverse();

const seriesXDataMonths = Array.from({ length: 12 }, (_, index) => {
  const date = new Date();
  date.setMonth(date.getMonth() - index);
  const formattedDate = date.toISOString().split('T')[0];
  return formattedDate;
}).reverse();

const SOH_VALUES = [
  99.87, 99.75, 99.62, 99.5, 99.37, 99.25, 99.12, 99.0, 98.87, 98.75, 98.62, 98.53,
];

// assuming SOC to be in the range 99% to 82% in decreasing order
const SOC_VALUES = [
  100, 76, 100, 84, 100, 89, 100, 88, 100, 56, 100,
  // 99.87, 99.75, 99.62, 99.5, 99.37, 99.25, 99.12, 99.0, 98.87, 98.75, 98.62, 98.53,
];

const VOLTAGE_VALUES = [
  '148',
  '130',
  '148',
  '138',
  '148',
  '141',
  '148',
  '141',
  '148',
  '128',
  '148',
];

const CURRENT_VALUES = ['8', '-10', '9', '-12', '8`', '-15', '8', '-13', '8', '-13', '8'];

// Array.from({ length: 12 }, (_, index) => (99 - index * 1.4).toFixed(2));

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
// const VOLTAGE_VALUES = [
//   '147.79',
//   '137.56',
//   '141.17',
//   '134.22',
//   '135.26',
//   '131.05',
//   '136.01',
//   '141.64',
//   '128.30',
//   '144.05',
//   '134.51',
//   '134.58',
// ];

// calculating current from power and voltage
// const CURRENT_VALUES = POWER_VALUES.map((value, index) =>
//   (Number(value) / Number(VOLTAGE_VALUES[index])).toFixed(2)
// );

export const SOH_DATA = SOH_VALUES.map((value, index) => ({
  x: seriesXDataMonths[index],
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

export const GHG_SUBTITLES = [
  'Our ESS if deployed in 1000 offices can result in significant 3M-ton GHG reduction.',

  'Deploying our ESS in 1000 offices targets a 3M-ton GHG cut.',

  '1000 offices adopting our ESS foresee a 3M-ton GHG decrease.',

  'ESS in 1000 offices strives for a 3M-ton GHG reduction.',

  'Our ESS: 1000 offices, 3M-ton GHG saved.',

  '1000 offices, 3M tons less GHG with our ESS.',

  'ESS in 1000 offices: A 3M-ton GHG reduction.',

  'Our ESS: Transforming 1000 offices, cutting 3M tons GHG.',

  'In 1000 offices, our ESS slashes GHG by 3M tons.',

  'Deploy ESS, cut GHG: 1000 offices, 3M tons saved.',
];
