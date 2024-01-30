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
} from '@mui/material';

import Image from 'src/components/image';

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

export default function BatteryInfo() {
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
      <CardContent>
        <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
          <Typography variant="body1" sx={{ px: 3, pt: 3 }}>
            <span style={{ fontSize: '0.8em' }}>{CDS === 1 ? '🟢' : '🔴'}</span>
            {CDS === 1 ? ' Charging' : ' Discharging'}
          </Typography>
        </Box>
        <Image src={batteryImage.src} sx={{ width: 100, height: 100, mx: 'auto' }} />

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
      </CardContent>
    </Card>
  );
}
