import Card from '@mui/material/Card';
import {
  Box,
  Grid,
  Stack,
  Button,
  TableRow,
  TableCell,
  Typography,
  CardHeader,
  IconButton,
  CardContent,
  ListItemText,
  TableRowProps,
  TableCellProps,
} from '@mui/material';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify/iconify';

import LiveDataCard from './live-data';
import batteryImage from './battery.png';
// ------------------------------------------------------

const customStyles = {
  '& td': {
    borderBottom: 'none',
  },
  '& th': {
    borderBottom: 'none',
  },
  height: '10px',
};

const CustomTableCell: React.FC<TableCellProps> = (props) => (
  <TableCell {...props} sx={{ py: 1.5 }} />
);
const CustomTableRow: React.FC<TableRowProps> = (props) => (
  <TableRow {...props} sx={customStyles} />
);

const renderOverview = (
  <Stack component={Card} spacing={2} sx={{ p: 3 }}>
    {[
      {
        label: 'Installation Date',
        value: 'test',
        icon: <Iconify icon="solar:calendar-date-bold" />,
      },
      {
        label: 'Battery Capacity',
        value: 'test',
        icon: <Iconify icon="solar:calendar-date-bold" />,
      },
      {
        label: 'Employment type',
        value: 'Test',
        icon: <Iconify icon="solar:clock-circle-bold" />,
      },
      {
        label: 'Offered salary',
        value: 'Negotiable',
        icon: <Iconify icon="solar:wad-of-money-bold" />,
      },
      {
        label: 'Experience',
        value: 'experience',
        icon: <Iconify icon="carbon:skill-level-basic" />,
      },
    ].map((item) => (
      <Stack key={item.label} spacing={1.5} direction="row">
        {item.icon}
        <ListItemText
          primary={item.label}
          secondary={item.value}
          primaryTypographyProps={{
            typography: 'body2',
            color: 'text.secondary',
            mb: 0.5,
          }}
          secondaryTypographyProps={{
            typography: 'subtitle2',
            color: 'text.primary',
            component: 'span',
          }}
        />
      </Stack>
    ))}
  </Stack>
);

const renderPerformanceSpecifications = (
  <>
    <CardHeader
      title="Performance Specifications"
      action={
        <IconButton>
          <Iconify icon="solar:pen-bold" />
        </IconButton>
      }
    />
    <Stack direction="row" sx={{ p: 3 }}>
      {/* <Avatar alt={"Test"} src={customer.avatarUrl} sx={{ width: 48, height: 48, mr: 2 }} /> */}

      <Stack spacing={0.5} alignItems="flex-start" sx={{ typography: 'body2' }}>
        <Typography variant="subtitle2">Test</Typography>

        <Box sx={{ color: 'text.secondary' }}>Email</Box>

        <Box>
          IP Address:
          <Box component="span" sx={{ color: 'text.secondary', ml: 0.25 }}>
            "IP"
          </Box>
        </Box>

        <Button
          size="small"
          color="error"
          startIcon={<Iconify icon="mingcute:add-line" />}
          sx={{ mt: 1 }}
        >
          Add to Blacklist
        </Button>
      </Stack>
    </Stack>
  </>
);

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
    <></>
    // <Card>
    //   <PerformanceSpecificationsCard performanceData={performanceData} />
    //   <Divider sx={{ borderStyle: 'dashed' }} />

    //   <TechnicalSpecificationsCard technicalData={technicalData} />
    //   <Divider sx={{ borderStyle: 'dashed' }} />

    //   <SafetyComplianceCard safetyData={safetyData} />
    //   <Divider sx={{ borderStyle: 'dashed' }} />

    //   <MonitoringControlCard monitoringData={monitoringData} />
    //   <Divider sx={{ borderStyle: 'dashed' }} />

    //   <EnvironmentalEconomicCard environmentalData={environmentalData} />
    // </Card>
  );

  const invModel = 'Sungrow SG5L-D';
  const invPowerRating = '5';
  const invType = 'Grid-Tied';
  const invEfficiency = '95';
  const installDate = '2021-10-01';
  const location = 'Delhi';
  const warrantyPeriod = '5';
  const designLife = '10';

  // const batteryNumber = 'LH02067836';
  // const deviceHost = '185.05.145.86';
  const batteryModel = 'Tatsuki';
  const batType = 'Lithium Ion';
  const batCapactiy = '1000';
  const soc = 34;
  const soh = 89;
  const CDS = 1;

  return (
    <Card sx={{ background: '#161c25' }}>
      <CardHeader
        action={
          <Stack direction="row" sx={{ mt: 4 }}>
            {/* <span style={{ fontSize: '0.8em' }}>{CDS === 1 ? '🟢' : '🔴'}</span> */}
            <Typography variant="body1">
              {CDS === 1 ? '34% Charging' : '45% Discharging'}
            </Typography>
          </Stack>
        }
        title={<Image src={batteryImage.src} sx={{ width: 100, height: 100, mx: 'auto' }} />}
      />
      <CardContent>
        {/* <Stack direction="row" spacing={1} justifyContent="flex-start" sx={{ px: 3, pt: 3 }}>
              <Typography variant="body1">State of Charge (SoC):</Typography>
              <Typography variant="body1">{soc}%</Typography>
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="flex-start" sx={{ px: 3, pt: 3 }}>
              <Typography variant="body1">State of Health (SoH):</Typography>
              <Typography variant="body1">{soh}%</Typography>
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="flex-start" sx={{ px: 3, pt: 3 }}>
              <Typography variant="body1">Battery Capacity:</Typography>
              <Typography variant="body1">{batCapactiy}kWh</Typography>
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="flex-start" sx={{ px: 3, pt: 3 }}>
              <Typography variant="body1">State of Charge (SoC):</Typography>
              <Typography variant="body1">{soc}%</Typography>
            </Stack>
     */}
        <Grid container spacing={2}>
          <Grid xs={4}>{renderOverview}</Grid>
          <Grid xs={1} />
          <Grid xs={7}>
            <LiveDataCard />
          </Grid>
        </Grid>

        <Stack direction="row">
          {/* <TableContainer>
            <Table>
              <TableBody>
                <TableRow sx={customStyles}>
                  <TableCell>
                    <Typography variant="body1">State of Charge (SoC) :</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{soc} %</Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={customStyles}>
                  <TableCell>
                    <Typography variant="body1">State of Health (SoH) :</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{soh} %</Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={customStyles}>
                  <TableCell>
                    <Typography variant="body1">Battery Capacity :</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{batCapactiy}kWh</Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={customStyles}>
                  <TableCell>
                    <Typography variant="body1">Battery Type :</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{batType}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow sx={customStyles}>
                  <TableCell>
                    <Typography variant="body1">Battery Model :</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{batteryModel}</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer> */}
          {/* <TableContainer>
            <Table>
              <TableBody>
                <CustomTableRow>
                  <CustomTableCell>
                    <Typography variant="body1">Inverter Model:</Typography>
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <Typography variant="body1">{invModel}</Typography>
                  </CustomTableCell>
                </CustomTableRow>
                <CustomTableRow>
                  <CustomTableCell>
                    <Typography variant="body1">Inverter Type:</Typography>
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <Typography variant="body1">{invType}</Typography>
                  </CustomTableCell>
                </CustomTableRow>
                <CustomTableRow>
                  <CustomTableCell>
                    <Typography variant="body1">Inverter Power Rating:</Typography>
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <Typography variant="body1">{invPowerRating} kW</Typography>
                  </CustomTableCell>
                </CustomTableRow>
                <CustomTableRow>
                  <CustomTableCell>
                    <Typography variant="body1">Inverter Efficiency:</Typography>
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <Typography variant="body1">{invEfficiency}%</Typography>
                  </CustomTableCell>
                </CustomTableRow>
                <CustomTableRow>
                  <CustomTableCell>
                    <Typography variant="body1">Installation Date:</Typography>
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <Typography variant="body1">{installDate}</Typography>
                  </CustomTableCell>
                </CustomTableRow>
                <CustomTableRow>
                  <CustomTableCell>
                    <Typography variant="body1">Location:</Typography>
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <Typography variant="body1">{location}</Typography>
                  </CustomTableCell>
                </CustomTableRow>
                <CustomTableRow>
                  <CustomTableCell>
                    <Typography variant="body1">Warranty Period:</Typography>
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <Typography variant="body1">{warrantyPeriod} years</Typography>
                  </CustomTableCell>
                </CustomTableRow>
                <CustomTableRow>
                  <CustomTableCell>
                    <Typography variant="body1">Design Life:</Typography>
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <Typography variant="body1">{designLife} years</Typography>
                  </CustomTableCell>
                </CustomTableRow>
              </TableBody>
            </Table>
          </TableContainer> */}
        </Stack>
      </CardContent>
    </Card>
  );
}
