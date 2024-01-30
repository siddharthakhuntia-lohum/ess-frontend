import Card from '@mui/material/Card';
import { Box, Stack, Divider, CardHeader, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify/iconify';

// -------------------TYPES----------------------------------

type PerformanceData = {
  capacity: string;
  powerRating: string;
  energyDensity: string;
  efficiency: string;
  responseTime: string;
};

type PerformanceProps = {
  performanceData: PerformanceData;
};

const PerformanceSpecificationsCard = ({ performanceData }: PerformanceProps) => (
  <>
    <CardHeader
      title="Performance Specifications"
      action={
        <IconButton>
          <Iconify icon="solar:pen-bold" />
        </IconButton>
      }
    />
    <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Capacity
        </Box>
        {performanceData.capacity}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Power Rating
        </Box>
        {performanceData.powerRating}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Energy Density
        </Box>
        {performanceData.energyDensity}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Efficiency
        </Box>
        {performanceData.efficiency}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Response Time
        </Box>
        {performanceData.responseTime}
      </Stack>
    </Stack>
  </>
);

type TechnicalData = {
  batteryType: string;
  cycleLife: string;
  temperatureRange: string;
  scalability: string;
};

type TechnicalProps = {
  technicalData: TechnicalData;
};

const TechnicalSpecificationsCard = ({ technicalData }: TechnicalProps) => (
  <>
    <CardHeader
      title="Technical Specifications"
      action={
        <IconButton>
          <Iconify icon="mdi:cog-outline" />
        </IconButton>
      }
    />
    <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Battery Type
        </Box>
        {technicalData.batteryType}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Cycle Life
        </Box>
        {technicalData.cycleLife}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Operating Temperature
        </Box>
        {technicalData.temperatureRange}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Scalability
        </Box>
        {technicalData.scalability}
      </Stack>
    </Stack>
  </>
);

type SafetyData = {
  features: string;
  compliance: string;
};

type SafetyProps = {
  safetyData: SafetyData;
};

const SafetyComplianceCard = ({ safetyData }: SafetyProps) => (
  <>
    <CardHeader
      title="Safety and Compliance"
      action={
        <IconButton>
          <Iconify icon="mdi:shield-outline" />
        </IconButton>
      }
    />
    <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Safety Features
        </Box>
        {safetyData.features}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Compliance
        </Box>
        {safetyData.compliance}
      </Stack>
    </Stack>
  </>
);

type MonitoringData = {
  connectivity: string;
  controlSystems: string;
};

type MonitoringProps = {
  monitoringData: MonitoringData;
};

const MonitoringControlCard = ({ monitoringData }: MonitoringProps) => (
  <>
    <CardHeader
      title="Monitoring and Control"
      action={
        <IconButton>
          <Iconify icon="mdi:monitor-eye" />
        </IconButton>
      }
    />
    <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Connectivity
        </Box>
        {monitoringData.connectivity}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Control Systems
        </Box>
        {monitoringData.controlSystems}
      </Stack>
    </Stack>
  </>
);

type EnvironmentalData = {
  impact: string;
  cost: string;
};

type EnvironmentalProps = {
  environmentalData: EnvironmentalData;
};

const EnvironmentalEconomicCard = ({ environmentalData }: EnvironmentalProps) => (
  <>
    <CardHeader
      title="Environmental and Economic Impact"
      action={
        <IconButton>
          <Iconify icon="mdi:leaf-maple" />
        </IconButton>
      }
    />
    <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Environmental Impact
        </Box>
        {environmentalData.impact}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Cost
        </Box>
        {environmentalData.cost}
      </Stack>
    </Stack>
  </>
);

export default function BatteryInfo() {
  const performanceData = {
    capacity: '500 kWh',
    powerRating: '250 kW',
    energyDensity: '200 Wh/kg',
    efficiency: '90%',
    responseTime: '1 ms',
  };

  const technicalData = {
    batteryType: 'Lithium-ion',
    cycleLife: '5000 cycles',
    temperatureRange: '-20°C to 60°C',
    scalability: 'Up to 10 MW',
  };

  const safetyData = {
    features: 'Thermal management, Overcharge protection',
    compliance: 'UL Certified, IEC Standards',
  };

  const monitoringData = {
    connectivity: 'Remote monitoring via IoT',
    controlSystems: 'Automated management software',
  };

  const environmentalData = {
    impact: 'Low carbon footprint, 95% recyclable',
    cost: '$0.05 per kWh',
  };

  return (
    <Card>
      <PerformanceSpecificationsCard performanceData={performanceData} />
      <Divider sx={{ borderStyle: 'dashed' }} />

      <TechnicalSpecificationsCard technicalData={technicalData} />
      <Divider sx={{ borderStyle: 'dashed' }} />

      <SafetyComplianceCard safetyData={safetyData} />
      <Divider sx={{ borderStyle: 'dashed' }} />

      <MonitoringControlCard monitoringData={monitoringData} />
      <Divider sx={{ borderStyle: 'dashed' }} />

      <EnvironmentalEconomicCard environmentalData={environmentalData} />
    </Card>
  );
}
