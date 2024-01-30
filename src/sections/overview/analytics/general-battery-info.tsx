import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import {
  Box,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  CardContent,
  CardHeader,
  TableCellProps,
  TableRowProps,
  Stack,
} from '@mui/material';

import Image from 'src/components/image';

import batteryImage from './battery.png';
import BatteryGauge from 'react-battery-gauge';
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

export default function BatteryInfo() {
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
    <Card>
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
      ></CardHeader>
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
        <Stack direction="row">
          <TableContainer>
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
          </TableContainer>
          <TableContainer>
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
          </TableContainer>
        </Stack>
      </CardContent>
    </Card>
  );
}
