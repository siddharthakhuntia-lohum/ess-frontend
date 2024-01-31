import { useTheme } from '@mui/material/styles';
// import { Stack, Typography } from '@mui/material';

import LiveDataCustomCard from './app-widget-summary-live-data-card';
// import AnalyticsWidgetSummary from './analytics-widget-summary';

// ------------------------------------------------------

// const CustomStack = ({ children }: { children: React.ReactNode }) => (
//   <Stack
//     direction="row"
//     spacing={2}
//     display="flex"
//     justifyContent="space-around"
//     alignItems="center"
//     sx={{ width: '100%', minHeight: '50px' }}
//   >
//     {children}
//   </Stack>
// );

// const CustomTypography = ({ children }: { children: React.ReactNode }) => (
//   <Typography sx={{ width: '50%', textAlign: 'center' }}>{children}</Typography>
// );

// export default function LiveDataCard() {
//   return (
//     <Card>
//       <CardHeader title="Live Data" avatar={<Iconify icon="openmoji:green-circle" />} />
//       <CardContent>
//         <CustomStack>
//           <CustomTypography>Voltage: 5 mV</CustomTypography>
//           <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', width: '20px' }} />
//           <CustomTypography>Current: 12 A</CustomTypography>
//         </CustomStack>
//         <Divider sx={{ my: 2, borderStyle: 'dashed' }} />
//         <CustomStack>
//           <CustomTypography>
//             Temperature: 27 °C
//             <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
//               (0.5%)
//             </Typography>
//           </CustomTypography>
//           <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', width: '20px' }} />
//           <CustomTypography>
//             Module No.: B5A54ASD
//             <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
//               (Changed Required)
//             </Typography>
//           </CustomTypography>
//         </CustomStack>
//         <Divider sx={{ my: 2, borderStyle: 'dashed' }} />
//         <CustomStack>
//           <CustomTypography>Highest Temperature: 31 °C</CustomTypography>
//           <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', width: '20px' }} />
//           <CustomTypography>Lowest Temperature: 23 °C</CustomTypography>
//         </CustomStack>
//       </CardContent>
//     </Card>
//   );
// }

export default function LiveDataCard() {
  const theme = useTheme();
  return (
    <>
      {/* <AnalyticsWidgetSummary
        title="Weekly Sales"
        total={714000}
        icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
      /> */}
      <LiveDataCustomCard
        title="SoC"
        percent={-1}
        total="93%"
        chart={{
          series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
          colors: [theme.palette.error.light],
        }}
      />
    </>
  );
}
