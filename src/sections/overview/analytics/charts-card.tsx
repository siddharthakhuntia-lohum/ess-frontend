import Grid from '@mui/material/Grid';

import {
  BatteryEfficiencyCard,
  GHGSavingsCard,
  TemperatureTrends,
  CostPerEnergyCard,
  EnergyIOCard,
  LoadDemandSupplyCard,
} from './chart-cards';
// ----------------------------------------------------------------------

export default function ChartsCard() {
  const randomData = Array.from({ length: 16 }).map((_, index) => Math.floor(Math.random() * 100));

  return (
    <Grid container spacing={3} alignItems="stretch">
      <Grid item xs={6} sm={4}>
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
      </Grid>
      <Grid item xs={6} sm={4}>
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
      </Grid>
      <Grid item xs={6} sm={4}>
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
      </Grid>
      <Grid item xs={6} sm={4}>
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
      </Grid>
      <Grid item xs={6} sm={4}>
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
      </Grid>
      <Grid item xs={6} sm={4}>
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
      </Grid>
    </Grid>
  );
}
