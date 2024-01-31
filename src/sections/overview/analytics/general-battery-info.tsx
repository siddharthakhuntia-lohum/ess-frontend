import Card from '@mui/material/Card';
import { Box, Stack, Divider, CardHeader, IconButton } from '@mui/material';

import Scrollbar from 'src/components/scrollbar';
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
          <Iconify icon="eos-icons:performance" />
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
  protections: string;
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
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Protections
        </Box>
        {safetyData.protections}
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

type BMSSpecificationsData = {
  externalCommunications: string;
  switching: string;
  cellChemistry: string;
  numberOfCellsPerSalve: string;
  voltagePerSlaveBattery: string;
};

type BMSSpecificationProps = {
  bmsSpecificationData: BMSSpecificationsData;
};

const BMSSpecificationsCard = ({ bmsSpecificationData }: BMSSpecificationProps) => (
  <>
    <CardHeader
      title="BMS Specifications"
      action={
        <IconButton>
          <Iconify icon="mdi:information-slab-circle-outline" />
        </IconButton>
      }
    />
    <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          External Communications
        </Box>
        {bmsSpecificationData.externalCommunications}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Switching
        </Box>
        {bmsSpecificationData.switching}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Cell Chemistry
        </Box>
        {bmsSpecificationData.cellChemistry}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Number of Cells per Slave
        </Box>
        {bmsSpecificationData.numberOfCellsPerSalve}
      </Stack>
      <Stack direction="row" alignItems="center">
        <Box component="span" sx={{ color: 'text.secondary', width: 200, flexShrink: 0 }}>
          Voltage Per Slave Battery
        </Box>
        {bmsSpecificationData.voltagePerSlaveBattery}
      </Stack>
    </Stack>
  </>
);

export default function BatteryInfo() {
  const performanceData = {
    capacity: '15 kWh',
    powerRating: '15 kW',
    energyDensity: '176 Wh/kg',
    efficiency: '98%',
    responseTime: '1 sec',
  };

  const technicalData = {
    batteryType: 'Lithium-ion',
    cycleLife: '2500 cycles',
    temperatureRange: '-20°C to 40°C',
    scalability: 'Up to 10 MW',
  };

  const safetyData = {
    features: 'Thermal management, Overcharge protection',
    compliance: 'UL Certified, IEC Standards',
    protections:
      'Hardware based short circuit protection. COVP, CUVP, POVP, PUVP, OCC, OCD, SCD, OTC, OTD, UTC, UTD, High Imbalance',
  };

  const monitoringData = {
    connectivity: 'Remote monitoring via IoT',
    controlSystems: 'Automated management software',
  };

  const environmentalData = {
    impact: 'Low carbon footprint, 95% recyclable',
    cost: '$0.05 per kWh',
  };

  const bmsSpecificationData = {
    externalCommunications: 'CAN 2.0B (configurable)',
    switching: 'Redundant, 3-contactor based',
    cellChemistry: 'Agnostic',
    numberOfCellsPerSalve: '10 upto 30',
    voltagePerSlaveBattery: '32V to 96V',
  };

  return (
    <Card sx={{ height: '90.5vh' }}>
      <Scrollbar>
        <PerformanceSpecificationsCard performanceData={performanceData} />
        <Divider sx={{ borderStyle: 'dashed' }} />

        <TechnicalSpecificationsCard technicalData={technicalData} />
        <Divider sx={{ borderStyle: 'dashed' }} />

        <BMSSpecificationsCard bmsSpecificationData={bmsSpecificationData} />
        <Divider sx={{ borderStyle: 'dashed' }} />

        <SafetyComplianceCard safetyData={safetyData} />
        <Divider sx={{ borderStyle: 'dashed' }} />

        <MonitoringControlCard monitoringData={monitoringData} />
        <Divider sx={{ borderStyle: 'dashed' }} />

        <EnvironmentalEconomicCard environmentalData={environmentalData} />
      </Scrollbar>
    </Card>
  );
}
