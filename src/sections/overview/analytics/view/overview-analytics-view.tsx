'use client';

import { useState, useCallback } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify/iconify';

import ChartsCard from '../charts-card';
import LiveDataCard from '../live-data';
import BatteryInfo from '../general-battery-info';
import BatteryTimelineCard from '../battery-timeline';
import EcommerceYearlySales from '../../e-commerce/ecommerce-yearly-sales';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'timeline',
    label: 'Timeline',
    icon: <Iconify icon="solar:user-id-bold" width={24} />,
  },
  {
    value: 'alerts',
    label: 'Alerts',
    icon: <Iconify icon="solar:heart-bold" width={24} />,
  },
];

export default function OverviewAnalyticsView() {
  const [currentTab, setCurrentTab] = useState('timeline');
  const theme = useTheme();

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3} alignItems="stretch">
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
                        name: 'Solar Efficiency',
                        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                      },
                      {
                        name: 'Invertor Efficiency',
                        data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                      },
                    ],
                  },
                  {
                    year: '2020',
                    data: [
                      {
                        name: 'Total Income',
                        data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                      },
                      {
                        name: 'Total Expenses',
                        data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                      },
                    ],
                  },
                ],
              }}
            />
            <ChartsCard />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack direction="column" spacing={1}>
            {/* <AppWidgetSummaryCustom
              title="SoC"
              percent={-1}
              total="93%"
              chart={{
                series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
                colors: [theme.palette.error.light],
              }}
            /> */}
            <LiveDataCard />
            {/* <Tabs
              value={currentTab}
              onChange={handleChangeTab}
              sx={{
                px: 3,
                borderRadius: 2,
                bgcolor: 'background.paper',
                [`& .${tabsClasses.flexContainer}`]: {
                  pr: { md: 3 },
                  justifyContent: {
                    sm: 'center',
                    md: 'flex-start',
                  },
                },
              }}
            >
              {TABS.map((tab) => (
                <Tab key={tab.value} value={tab.value} icon={tab.icon} label={tab.label} />
              ))}
            </Tabs> */}
            {/* {currentTab === 'alerts' && <BatteryAlertsCard />} */}
            {currentTab === 'timeline' && <BatteryTimelineCard />}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
