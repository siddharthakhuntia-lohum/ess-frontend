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

import { SOH_DATA, SOC_DATA, VOLTAGE_DATA, CURRENT_DATA } from './dummy-data';

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

  const { options } = chart;

  const soc = 100;
  const soh = 98.5;
  const voltage = 135;
  const current = 8;
  const highTemp = 14;
  const lowTemp = 12;

  const SOH_CHART_OPTIONS = useChart({
    colors: [(theme.palette.primary as PaletteColor).light],
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
        show: false,
      },
      y: {
        formatter: (value) => fPercent(value),
        title: {
          formatter: () => '',
        },
      },
    },
    ...options,
  });

  const SOC_CHART_OPTIONS = useChart({
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
        show: false,
      },
      y: {
        formatter: (value) => fPercent(value),
        title: {
          formatter: () => '',
        },
      },
    },
    ...options,
  });

  const VOLTAGE_CHART_OPTIONS = useChart({
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
        show: false,
      },
      y: {
        formatter: (value) => `${value} V`,
        title: {
          formatter: () => '',
        },
      },
    },
    ...options,
  });

  const CURRENT_CHART_OPTIONS = useChart({
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
        show: false,
      },
      y: {
        formatter: (value) => `${value} A`,
        title: {
          formatter: () => '',
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other} sx={{ background: theme.palette.primary.darker }}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">SoH</Typography>
          <Typography variant="h6">{soh} %</Typography>
        </Box>

        <Chart
          dir="ltr"
          type="line"
          series={[{ data: SOH_DATA }]}
          options={SOH_CHART_OPTIONS}
          width={90}
          height={60}
        />
      </Box>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">SoC</Typography>
          <Typography variant="h6">{soc} %</Typography>
        </Box>

        <Chart
          dir="ltr"
          type="line"
          series={[{ data: SOC_DATA }]}
          options={SOC_CHART_OPTIONS}
          width={90}
          height={60}
        />
      </Box>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', p: 3, ...sx }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle2">Voltage</Typography>
          <Typography variant="h6">{voltage} V</Typography>
        </Box>

        <Chart
          dir="ltr"
          type="line"
          series={[{ data: VOLTAGE_DATA }]}
          options={VOLTAGE_CHART_OPTIONS}
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
          series={[{ data: CURRENT_DATA }]}
          options={CURRENT_CHART_OPTIONS}
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
