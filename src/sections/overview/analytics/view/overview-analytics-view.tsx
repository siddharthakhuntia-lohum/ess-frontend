'use client';

import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import LiveDataCard from '../live-data';
import BatteryInfo from '../general-battery-info';
import BatteryTimelineCard from '../battery-timeline';
import EcommerceYearlySales from '../../e-commerce/ecommerce-yearly-sales';

// ----------------------------------------------------------------------

export default function OverviewAnalyticsView() {
  const [currentTab] = useState('timeline');
  const theme = useTheme();

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3} alignItems="stretch" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={4}>
          <BatteryInfo />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Stack direction="column" spacing={2}>
            <EcommerceYearlySales
              id="demo__4"
              title="Efficiency"
              subheader="(+43%) than last year"
              chart={{
                categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                series: [
                  {
                    year: '2019',
                    data: [
                      {
                        name: 'Battery Efficiency',
                        data: [94, 97, 95, 96, 93, 97, 94, 95, 93, 96],
                      },
                      {
                        name: 'Invertor Efficiency',
                        data: [94, 91, 92, 90, 92, 93, 91, 90, 92, 93],
                      },
                    ],
                  },
                  {
                    year: '2020',
                    data: [
                      {
                        name: 'Battery Efficiency',
                        data: [93, 95, 97, 95, 96, 94, 95, 94, 96, 93],
                      },
                      {
                        name: 'Invertor Efficiency',
                        data: [92, 91, 96, 92, 91, 93, 92, 90, 94, 93],
                      },
                    ],
                  },
                ],
              }}
            />
            <EcommerceYearlySales
              id="demo__4"
              title="GHG Savings"
              subheader="(+43%) than last year"
              chart={{
                categories: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                colors: [theme.palette.secondary.light],
                series: [
                  {
                    year: '2019',
                    data: [
                      {
                        name: 'GHG savings',
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                      },
                    ],
                  },
                ],
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack direction="column" spacing={1}>
            <LiveDataCard />
            {currentTab === 'timeline' && <BatteryTimelineCard />}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
