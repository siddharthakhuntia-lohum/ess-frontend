// import { ApexOptions } from 'apexcharts';

// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import {  CardHeader } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import Card, { CardProps } from '@mui/material/Card';

// import { fNumber } from 'src/utils/format-number';

// import Chart from 'src/components/chart';
// import Iconify from 'src/components/iconify';

// // ----------------------------------------------------------------------

// interface Props extends CardProps {
//   title: string;
//   total: string;
//   percent: number;
//   chart: {
//     colors?: string[];
//     series: number[];
//     options?: ApexOptions;
//   };
// }

// export default function AppWidgetSummaryCustom({
//   title,
//   percent,
//   total,
//   chart,
//   sx,
//   ...other
// }: Props) {
//   const theme = useTheme();

//   const {
//     colors = [theme.palette.primary.light, theme.palette.primary.main],
//     series,
//     options,
//   } = chart;

//   const chartOptions = {
//     colors: colors.map((colr) => colr[1]),
//     fill: {
//       type: 'gradient',
//       gradient: {
//         colorStops: [
//           { offset: 0, color: colors[0], opacity: 1 },
//           { offset: 100, color: colors[1], opacity: 1 },
//         ],
//       },
//     },
//     chart: {
//       sparkline: {
//         enabled: true,
//       },
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: '68%',
//         borderRadius: 2,
//       },
//     },
//     tooltip: {
//       x: { show: false },
//       y: {
//         formatter: (value: number) => fNumber(value),
//         title: {
//           formatter: () => '',
//         },
//       },
//       marker: { show: false },
//     },
//     ...options,
//   };

//   const soh = (
//     <Stack direction="column">
//       <Typography variant="h6">98%</Typography>
//       <Typography variant="caption">SoH</Typography>
//     </Stack>
//   );

//   return (
//     <Card {...other}>
//       <CardHeader title={title} action={soh} />
//       <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pt: 0, ...sx }}>
//         <Box sx={{ flexGrow: 1 }}>
//           <Stack direction="row" alignItems="center" sx={{ mt: 2, mb: 1 }}>
//             <Iconify
//               width={24}
//               icon={
//                 percent < 0
//                   ? 'solar:double-alt-arrow-down-bold-duotone'
//                   : 'solar:double-alt-arrow-up-bold-duotone'
//               }
//               sx={{
//                 mr: 1,
//                 color: 'success.main',
//                 ...(percent < 0 && {
//                   color: 'error.main',
//                 }),
//               }}
//             />

//             <Typography component="div" variant="subtitle2">
//               {percent > 0 && '+'}
//               Discharing
//               {/* {fPercent(percent)} */}
//             </Typography>
//           </Stack>

//           <Typography variant="h3">{total}</Typography>
//         </Box>

//         <Chart
//           dir="ltr"
//           type="bar"
//           series={[{ data: series }]}
//           options={chartOptions}
//           width={60}
//           height={36}
//         />
//       </Box>
//     </Card>
//   );
// }