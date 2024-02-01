import { ApexOptions } from 'apexcharts';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import { fNumber } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  isGHG: boolean;
  title?: string;
  subheader?: string;
  chart: {
    categories?: string[];
    colors?: string[];
    series: {
      year: string;
      data: {
        name: string;
        data: number[];
      }[];
    }[];
    options?: ApexOptions;
  };
}

const ghgFormat = (val: number) => `${fNumber(val / Number(1000))}`;

export default function EcommerceYearlySales({ isGHG, title, subheader, chart, ...other }: Props) {
  const { colors, categories, series, options } = chart;

  const popover = usePopover();

  const [seriesData, setSeriesData] = useState('2019');

  const chartOptions = useChart({
    colors,
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
    xaxis: {
      categories,
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: {
        formatter(val: number) {
          if (isGHG) {
            return ghgFormat(val);
          }
          return `${fNumber(val)}`;
        },
      },
      min: title === 'Efficiency' ? 0 : undefined,
      max: title === 'Efficiency' ? 100 : undefined,
    },
    tooltip: {
      y: {
        formatter(val: number) {
          return isGHG ? `${ghgFormat(val)} Tons` : `${fNumber(val)}`;
        },
      },
    },
    ...options,
  });

  const handleChangeSeries = useCallback(
    (newValue: string) => {
      popover.onClose();
      setSeriesData(newValue);
    },
    [popover]
  );

  return (
    <>
      <Card {...other}>
        <CardHeader title={title} subheader={title === 'Efficiency' ? null : subheader} />

        {series.map((item) => (
          <Box key={item.year} sx={{ mt: 3, mx: 3 }}>
            {item.year === seriesData && (
              <Chart
                dir="ltr"
                type="area"
                series={item.data}
                options={chartOptions}
                width="100%"
                height={364}
              />
            )}
          </Box>
        ))}
      </Card>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 140 }}>
        {series.map((option) => (
          <MenuItem
            key={option.year}
            selected={option.year === seriesData}
            onClick={() => handleChangeSeries(option.year)}
          >
            {option.year}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
