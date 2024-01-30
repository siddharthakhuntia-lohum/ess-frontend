import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme, Palette, PaletteColor } from '@mui/material/styles';

import { fPercent } from 'src/utils/format-number';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

type EnergyIOCardProps = {
  title: string;
  total: number;
  icon: string;
  percent: number;
  thanWhat?: string;
  color?: keyof Palette;
  tooltipFormat?: string;
  chart: {
    series: number[] | any[];
    options: any;
  };
  sx?: any;
};

export default function EnergyIOCard({
  title,
  total,
  icon,
  percent,
  thanWhat = 'than yesterday',
  color = 'primary',
  tooltipFormat = 'percentage',
  chart,
  sx,
  ...other
}: EnergyIOCardProps) {
  const theme = useTheme();
  const randomData = Array.from({ length: 16 }).map((_, index) => Math.floor(Math.random() * 100));

  const { series, options } = chart;

  const chartOptions = useChart({
    colors: [(theme.palette[color] as PaletteColor).dark],
    chart: {
      sparkline: {
        enabled: true,
        offset: {
          x: 0,
          y: 1, // Adjust the vertical position by changing the y-offset
        },
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
      min: 0,
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
        formatter: (value) => `${value}kJ`,
        title: {
          formatter: () => '',
        },
      },
    },
    ...options,
  });

  return (
    <Stack
      sx={{
        ...bgGradient({
          direction: '135deg',
          startColor: alpha((theme.palette[color] as PaletteColor).light, 0.2),
          endColor: alpha((theme.palette[color] as PaletteColor).main, 0.2),
        }),
        width: 1,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        color: `${color}.darker`,
        backgroundColor: 'common.white',
        ...sx,
      }}
      {...other}
    >
      {/* <Iconify
        icon={icon}
        sx={{
          p: 1.5,
          top: 24,
          right: 24,
          width: 48,
          height: 48,
          borderRadius: '50%',
          position: 'absolute',
          color: `${color}.lighter`,
          bgcolor: `${color}.dark`,
        }}
      /> */}

      <Stack spacing={1} sx={{ p: 3 }}>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="h3">{total} kJ</Typography>

        <Stack
          spacing={0.5}
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          sx={{ typography: 'body2' }}
        >
          <Iconify icon={percent < 0 ? 'eva:trending-down-fill' : 'eva:trending-up-fill'} />

          <Box sx={{ typography: 'subtitle2' }}>
            {percent > 0 && '+'}
            {percent} kJ
          </Box>

          <Box sx={{ opacity: 0.8 }}>{thanWhat}</Box>
        </Stack>
      </Stack>

      <Chart
        dir="ltr"
        type="area"
        series={[{ data: series }, { data: randomData }]}
        options={chartOptions}
        width="100%"
        height={120}
      />
    </Stack>
  );
}
