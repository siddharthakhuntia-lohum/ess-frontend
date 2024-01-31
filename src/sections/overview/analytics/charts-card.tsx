import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import {
  BatteryEfficiencyCard,
} from './chart-cards';
// ----------------------------------------------------------------------

export default function ChartsCard() {
  const randomData = Array.from({ length: 16 }).map((_, index) => Math.floor(Math.random() * 100));

  return (
    <Grid container spacing={3} alignItems="stretch">
      <Grid item xs={6}>
        <Stack direction="column" spacing={2}>
          <BatteryEfficiencyCard
            title="GHG savings (%)"
            icon="eva:diagonal-arrow-right-up-fill"
            percent={-7}
            color="primary"
            total={50}
            chart={{
              series: randomData,
              options: {},
            }}
          />
          {/* <TemperatureTrends
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
          /> */}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack spacing={2} direction="column">
          {/* <BatteryEfficiencyCard
            title="Invertor Efficiency (%)"
            icon="eva:diagonal-arrow-right-up-fill"
            percent={-7}
            color="warning"
            total={50}
            chart={{
              series: randomData,
              options: {},
            }}
          /> */}
          {/* <GHGSavingsCard
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
          /> */}
          {/* <LoadDemandSupplyCard
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
          /> */}
        </Stack>
      </Grid>
    </Grid>
  );
}
