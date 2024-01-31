import { ApexOptions } from 'apexcharts';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { PaletteColor } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card, { CardProps } from '@mui/material/Card';

import { fPercent } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title: string;
  total: string;
  percent: number;
  chart: {
    colors?: string[];
    series: number[];
    options?: ApexOptions;
  };
}

const CustomStack = ({ children }: { children: React.ReactNode }) => (
  <Stack
    direction="row"
    spacing={2}
    display="flex"
    justifyContent="space-around"
    alignItems="center"
    sx={{ width: '100%', minHeight: '50px', p: 2 }}
  >
    {children}
  </Stack>
);
const CustomTypography = ({ children }: { children: React.ReactNode }) => (
  <Typography sx={{ width: '50%', textAlign: 'center' }}>{children}</Typography>
);

export default function LiveDataCustomCard({ title, percent, total, chart, sx, ...other }: Props) {
  const theme = useTheme();

  const {
    // colors = [theme.palette.primary.light, theme.palette.primary.main],
    series,
    options,
  } = chart;

  const soc = 82;
  const soh = 97;
  const voltage = 135;
  const current = 8;
  const highTemp = 14;
  const lowTemp = 12;

  const lineChartOptions1 = useChart({
    colors: [(theme.palette.primary as PaletteColor).lighter],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      marker: {
        show: true,
      },
      y: {
        formatter: (value) =>
          //   if (tooltipFormat === 'dollar') {
          //     return `$${value}`;
          //   }
          //   if (tooltipFormat === 'none') {
          //     return value;
          //   }

          // Default to percentage if not 'dollar'
          fPercent(value),
        title: {
          formatter: () => '',
        },
      },
    },
    ...options,
  });

  const lineChartOptions2 = useChart({
    colors: [(theme.palette.error as PaletteColor).light],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      marker: {
        show: true,
      },
      y: {
        formatter: (value) =>
          //   if (tooltipFormat === 'dollar') {
          //     return `$${value}`;
          //   }
          //   if (tooltipFormat === 'none') {
          //     return value;
          //   }

          // Default to percentage if not 'dollar'
          fPercent(value),
        title: {
          formatter: () => '',
        },
      },
    },
    ...options,
  });

  const lineChartOptions3 = useChart({
    colors: [(theme.palette.warning as PaletteColor).light],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      marker: {
        show: true,
      },
      y: {
        formatter: (value) =>
          //   if (tooltipFormat === 'dollar') {
          //     return `$${value}`;
          //   }
          //   if (tooltipFormat === 'none') {
          //     return value;
          //   }

          // Default to percentage if not 'dollar'
          fPercent(value),
        title: {
          formatter: () => '',
        },
      },
    },
    ...options,
  });

  const lineChartOptions4 = useChart({
    colors: [(theme.palette.secondary as PaletteColor).light],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      marker: {
        show: true,
      },
      y: {
        formatter: (value) =>
          //   if (tooltipFormat === 'dollar') {
          //     return `$${value}`;
          //   }
          //   if (tooltipFormat === 'none') {
          //     return value;
          //   }

          // Default to percentage if not 'dollar'
          fPercent(value),
        title: {
          formatter: () => '',
        },
      },
    },
    ...options,
  });

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

  return (
    <Card {...other} sx={{ background: theme.palette.primary.darker }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">SoC</Typography>
          <Typography variant="h6">{soc} %</Typography>
        </Box>

        <Chart
          dir="ltr"
          type="bar"
          series={[{ data: series }]}
          options={lineChartOptions1}
          width={90}
          height={60}
        />
      </Box>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">SoH</Typography>
          <Typography variant="h6">{soh} %</Typography>
        </Box>

        <Chart
          dir="ltr"
          type="bar"
          series={[{ data: series }]}
          options={lineChartOptions2}
          width={90}
          height={60}
        />
      </Box>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">Voltage</Typography>
          <Typography variant="h6">{voltage} V</Typography>
        </Box>

        <Chart
          dir="ltr"
          type="bar"
          series={[{ data: series }]}
          options={lineChartOptions3}
          width={90}
          height={60}
        />
      </Box>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">Current</Typography>
          <Typography variant="h6">{current} A</Typography>
        </Box>

        <Chart
          dir="ltr"
          type="line"
          series={[{ data: series }]}
          options={lineChartOptions4}
          width={90}
          height={60}
        />
      </Box>

      <Divider sx={{ borderStyle: 'dashed' }} />
      <CustomStack>
        <CustomTypography>Highest Temperature: {highTemp} °C</CustomTypography>
        <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', width: '20px' }} />
        <CustomTypography>Lowest Temperature: {lowTemp} °C</CustomTypography>
      </CustomStack>
    </Card>
  );
}
