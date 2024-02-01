'use client';

import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import LiveDataCard from '../live-data';
import { GHG_SUBTITLES } from '../dummy-data';
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
              isGHG={false}
              id="demo__4"
              title="Efficiency"
              subheader="(+12%) than last year"
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
                  'Jan',
                ],
                series: [
                  {
                    year: '2019',
                    data: [
                      {
                        name: 'Battery Efficiency',
                        data: [94, 97, 95, 96, 93, 97, 94, 95, 93, 96, 95, 95, 96],
                      },
                      {
                        name: 'Invertor Efficiency',
                        data: [94, 91, 92, 90, 92, 93, 91, 90, 92, 93, 92, 93, 93.5],
                      },
                    ],
                  },
                ],
              }}
            />
            <EcommerceYearlySales
              isGHG={true}
              id="demo__4"
              title="GHG Savings"
              subheader={GHG_SUBTITLES[0]}
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
                  'Jan',
                ],
                colors: [theme.palette.secondary.light],
                series: [
                  {
                    year: '2019',
                    data: [
                      {
                        name: 'GHG savings',
                        data: [
                          279000.0, 561746.1339178928, 887246.1339178928, 1190188.4202584922,
                          1469188.4202584922, 1694188.4202584922, 1880188.4202584922,
                          2032148.0577065395, 2167148.0577065395, 2319107.695154587,
                          2499107.695154587, 2731607.695154587, 3010608.263274587,
                        ],
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
