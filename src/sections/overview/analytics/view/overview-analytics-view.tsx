'use client';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { useSettingsContext } from 'src/components/settings';

import LiveDataCard from '../live-data';
import ChartsCard from '../charts-card';
import BatteryAlertsCard from '../battery-alerts';
import BatteryInfo from '../general-battery-info';
import InverterInfo from '../general-inverter-info';
// ----------------------------------------------------------------------

export default function OverviewAnalyticsView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={6} md={3}>
          <BatteryInfo />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InverterInfo />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <LiveDataCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BatteryAlertsCard />
        </Grid>
        <Grid item xs={12}>
          <ChartsCard />
        </Grid>
      </Grid>
    </Container>
  );
}
