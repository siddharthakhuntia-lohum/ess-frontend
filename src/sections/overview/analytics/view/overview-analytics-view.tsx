'use client';

import { useState, useCallback } from 'react';

import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';

import Iconify from 'src/components/iconify/iconify';

import ChartsCard from '../charts-card';
import LiveDataCard from '../live-data';
import BatteryAlertsCard from '../battery-alerts';
import BatteryInfo from '../general-battery-info';
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

export default function OverviewAnalyticsView() {
  const [currentTab, setCurrentTab] = useState('timeline');

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
          <ChartsCard />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Stack direction="column" spacing={2}>
            <Tabs
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
            </Tabs>
            {currentTab === 'alerts' && <BatteryAlertsCard />}
            {currentTab === 'timeline' && <BatteryTimelineCard />}
            <LiveDataCard />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
