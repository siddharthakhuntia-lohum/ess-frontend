import { useState } from 'react';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import {
  TableRow,
  TableBody,
  TableCell,
  Typography,
  CardContent,
  TableRowProps,
  TableContainer,
  TableCellProps,
} from '@mui/material';

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

export default function LiveDataCard() {
  const [voltage, setVoltage] = useState(20);
  const [current, setCurrent] = useState(12);
  const [temp, setTemp] = useState(29);
  const [highestTemp, setHighestTemp] = useState(35);
  const [lowestTemp, setLowestTemp] = useState(22);
  const [cellVoltage, setCellVoltage] = useState(3.5);
  const [highestCellVoltage, setHighestCellVoltage] = useState(7.2);
  const [lowestCellVoltage, setLowestCellVoltage] = useState(0.5);

  return (
    <Card>
      <CardContent>
        <TableContainer>
          <Table>
            <TableBody>
              <CustomTableRow>
                <CustomTableCell>
                  <Typography variant="body1">Voltage :</Typography>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Typography variant="body1">{voltage} v</Typography>
                </CustomTableCell>
              </CustomTableRow>
              <CustomTableRow>
                <CustomTableCell>
                  <Typography variant="body1">Current :</Typography>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Typography variant="body1">{current} A</Typography>
                </CustomTableCell>
              </CustomTableRow>
              <CustomTableRow>
                <CustomTableCell>
                  <Typography variant="body1">Temperature :</Typography>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Typography variant="body1">{temp}°C</Typography>
                </CustomTableCell>
              </CustomTableRow>
              <CustomTableRow>
                <CustomTableCell>
                  <Typography variant="body1">Highest Temperature :</Typography>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Typography variant="body1">{highestTemp}°C</Typography>
                </CustomTableCell>
              </CustomTableRow>
              <CustomTableRow>
                <CustomTableCell>
                  <Typography variant="body1">Lowest Temperature :</Typography>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Typography variant="body1">{lowestTemp}°C</Typography>
                </CustomTableCell>
              </CustomTableRow>
              <CustomTableRow>
                <CustomTableCell>
                  <Typography variant="body1">Cell Voltage :</Typography>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Typography variant="body1">{cellVoltage} v</Typography>
                </CustomTableCell>
              </CustomTableRow>
              <CustomTableRow>
                <CustomTableCell>
                  <Typography variant="body1">Highest Cell Voltage :</Typography>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Typography variant="body1">{highestCellVoltage} v</Typography>
                </CustomTableCell>
              </CustomTableRow>
              <CustomTableRow>
                <CustomTableCell>
                  <Typography variant="body1">Lowest Cell Voltage :</Typography>
                </CustomTableCell>
                <CustomTableCell align="center">
                  <Typography variant="body1">{lowestCellVoltage} v</Typography>
                </CustomTableCell>
              </CustomTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
