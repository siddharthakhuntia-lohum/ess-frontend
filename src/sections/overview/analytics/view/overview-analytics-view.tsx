'use client';

import { useState, useCallback } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Iconify from 'src/components/iconify/iconify';

import { useSettingsContext } from 'src/components/settings';

import {
  BatteryEfficiencyCard,
  GHGSavingsCard,
  TemperatureTrends,
  CostPerEnergyCard,
  EnergyIOCard,
  LoadDemandSupplyCard,
} from '../chart-cards';

import LiveDataCard from '../live-data';
import ChartsCard from '../charts-card';
import BatteryAlertsCard from '../battery-alerts';
import BatteryInfo from '../general-battery-info';
import InverterInfo from '../general-inverter-info';
import { fDateTime } from 'src/utils/format-time';
import { UserProfileView } from 'src/sections/user/view';
import AlertsTimelineTabs from './Alerts';
import Alerts from './Alerts';
import BatteryTimelineCard from '../battery-timeline';
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
const history = {
  timeline: [
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
  ],
};

const renderTimeline = (
  <Timeline
    sx={{
      p: 0,
      m: 0,
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    }}
  >
    {history.timeline.map((item, index) => {
      const firstTimeline = index === 0;

      const lastTimeline = index === history.timeline.length - 1;

      return (
        <TimelineItem key={item.title}>
          <TimelineSeparator>
            <TimelineDot color={'primary'} />
            {lastTimeline ? null : <TimelineConnector />}
          </TimelineSeparator>

          <TimelineContent>
            <Typography variant="subtitle2">{item.title}</Typography>

            <Box sx={{ color: 'text.disabled', typography: 'caption', mt: 0.5 }}>
              {fDateTime(item.time)}
            </Box>
          </TimelineContent>
        </TimelineItem>
      );
    })}
  </Timeline>
);
export default function OverviewAnalyticsView() {
  const settings = useSettingsContext();
  const randomData = Array.from({ length: 16 }).map((_, index) => Math.floor(Math.random() * 100));

  const [currentTab, setCurrentTab] = useState('profile');

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
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={6}>
              <Stack direction="column" spacing={2}>
                <BatteryEfficiencyCard
                  title="Battery Efficiency (%)"
                  icon="eva:diagonal-arrow-right-up-fill"
                  percent={-7}
                  color="primary"
                  total={50}
                  chart={{
                    series: randomData,
                    options: {},
                  }}
                />
                <TemperatureTrends
                  title="Temperature trends (in °C)"
                  icon="eva:diagonal-arrow-right-up-fill"
                  percent={-9}
                  color="success"
                  tooltipFormat="degree"
                  thanWhat="than last hour"
                  total={29}
                  chart={{
                    series: randomData,
                    options: {},
                  }}
                />
                <CostPerEnergyCard
                  title="Cost per unit of energy (in $)"
                  icon="eva:diagonal-arrow-right-up-fill"
                  percent={+0.02}
                  color="secondary"
                  tooltipFormat="dollar"
                  thanWhat="last month"
                  total={12}
                  chart={{
                    series: randomData,
                    options: {},
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={2} direction="column">
                <GHGSavingsCard
                  title="GHG Savings (in $)"
                  icon="eva:diagonal-arrow-right-up-fill"
                  percent={+5}
                  color="warning"
                  tooltipFormat="dollar"
                  thanWhat="than last year"
                  total={1096}
                  chart={{
                    series: randomData,
                    options: {},
                  }}
                />
                <LoadDemandSupplyCard
                  title="Load Demand Supply (%)"
                  icon="eva:diagonal-arrow-right-up-fill"
                  percent={-26}
                  color="info"
                  total={72}
                  chart={{
                    series: randomData,
                    options: {},
                  }}
                />
                <EnergyIOCard
                  title="Energy Input Output (in kJ)"
                  icon="eva:diagonal-arrow-right-up-fill"
                  percent={+112}
                  color="error"
                  thanWhat="last week"
                  tooltipFormat="energy"
                  total={+86}
                  chart={{
                    series: randomData,
                    options: {},
                  }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* <AlertsTimelineTabs /> */}
          <Stack direction="column" spacing={2}>
            <Tabs
              value={currentTab}
              onChange={handleChangeTab}
              sx={{
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
            </Tabs>
            {currentTab === 'alerts' && <BatteryAlertsCard />}
            {currentTab === 'timeline' && renderTimeline}
            <Card></Card>
          </Stack>
        </Grid>

        {/* <Grid item xs={12} sm={6} md={3}>
          <BatteryAlertsCard />
        </Grid>
        <Grid item xs={12}></Grid> */}
      </Grid>
    </Container>
  );
}
