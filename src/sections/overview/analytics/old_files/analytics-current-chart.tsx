import React, { useState, useEffect } from 'react';
import ApexCharts, { ApexOptions } from 'apexcharts';

import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Card, { CardProps } from '@mui/material/Card';

import Chart, { useChart } from 'src/components/chart';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
}

export default function CurrentChart({ title, subheader, ...other }: Props) {
  const [data, setData] = useState<{ time: string; value: number }[]>([
    {
      time: new Date().toISOString(),
      value: 54,
    },
    {
      time: new Date(Date.now() + 5000).toISOString(),
      value: 62,
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const value = Math.floor(Math.random() * 100);
      setData((prev) =>
        [
          ...(prev as { time: string; value: number }[]),
          {
            time: now.toISOString(),
            value,
          },
        ].slice(-20)
      );
      ApexCharts.exec('realtime', 'updateSeries', [
        {
          data,
        },
      ]);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chartOptions = useChart({
    chart: {
      id: 'realtime',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 10,
        },
      },
    },

    // colors: ['#FFB547'],
    stroke: { curve: 'smooth' },
    dataLabels: { enabled: false },
    xaxis: {
      type: 'datetime',
      // range: 1000 * 60 * 5,
      categories: data?.map((el) => el.time),
      labels: {
        formatter: (value) => {
          const date = new Date(value);
          return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        },
      },
    },
    yaxis: {
      show: true,
      labels: {
        formatter: (value) => `${value}`,
      },
    },
  });
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          type="line"
          series={[{ data: data?.map((el) => el.value) || [] }]}
          options={chartOptions}
          width="100%"
          height={400}
        />
      </Box>
    </Card>
  );
}
