// import Card from '@mui/material/Card';
// import Table from '@mui/material/Table';
// import {
//   TableRow,
//   TableBody,
//   TableCell,
//   Typography,
//   CardContent,
//   TableRowProps,
//   TableContainer,
//   TableCellProps,
// } from '@mui/material';

// // ------------------------------------------------------
// const customStyles = {
//   '& td': {
//     borderBottom: 'none',
//   },
//   '& th': {
//     borderBottom: 'none',
//   },
//   height: '10px',
// };

// const CustomTableCell: React.FC<TableCellProps> = (props) => (
//   <TableCell {...props} sx={{ py: 1.5 }} />
// );
// const CustomTableRow: React.FC<TableRowProps> = (props) => (
//   <TableRow {...props} sx={customStyles} />
// );

// export default function InverterInfo() {
//   const invModel = 'Sungrow SG5L-D';
//   const invPowerRating = '5';
//   const invType = 'Grid-Tied';
//   const invEfficiency = '95';
//   const installDate = '2021-10-01';
//   const location = 'Delhi';
//   const warrantyPeriod = '5';
//   const designLife = '10';

//   return (
//     // <Card>
//     //   <CardContent>
//     //     <TableContainer>
//     //       <Table>
//     //         <TableBody>
//     //           <CustomTableRow>
//     //             <CustomTableCell>
//     //               <Typography variant="body1">Inverter Model:</Typography>
//     //             </CustomTableCell>
//     //             <CustomTableCell align="center">
//     //               <Typography variant="body1">{invModel}</Typography>
//     //             </CustomTableCell>
//     //           </CustomTableRow>
//     //           <CustomTableRow>
//     //             <CustomTableCell>
//     //               <Typography variant="body1">Inverter Type:</Typography>
//     //             </CustomTableCell>
//     //             <CustomTableCell align="center">
//     //               <Typography variant="body1">{invType}</Typography>
//     //             </CustomTableCell>
//     //           </CustomTableRow>
//     //           <CustomTableRow>
//     //             <CustomTableCell>
//     //               <Typography variant="body1">Inverter Power Rating:</Typography>
//     //             </CustomTableCell>
//     //             <CustomTableCell align="center">
//     //               <Typography variant="body1">{invPowerRating} kW</Typography>
//     //             </CustomTableCell>
//     //           </CustomTableRow>
//     //           <CustomTableRow>
//     //             <CustomTableCell>
//     //               <Typography variant="body1">Inverter Efficiency:</Typography>
//     //             </CustomTableCell>
//     //             <CustomTableCell align="center">
//     //               <Typography variant="body1">{invEfficiency}%</Typography>
//     //             </CustomTableCell>
//     //           </CustomTableRow>
//     //           <CustomTableRow>
//     //             <CustomTableCell>
//     //               <Typography variant="body1">Installation Date:</Typography>
//     //             </CustomTableCell>
//     //             <CustomTableCell align="center">
//     //               <Typography variant="body1">{installDate}</Typography>
//     //             </CustomTableCell>
//     //           </CustomTableRow>
//     //           <CustomTableRow>
//     //             <CustomTableCell>
//     //               <Typography variant="body1">Location:</Typography>
//     //             </CustomTableCell>
//     //             <CustomTableCell align="center">
//     //               <Typography variant="body1">{location}</Typography>
//     //             </CustomTableCell>
//     //           </CustomTableRow>
//     //           <CustomTableRow>
//     //             <CustomTableCell>
//     //               <Typography variant="body1">Warranty Period:</Typography>
//     //             </CustomTableCell>
//     //             <CustomTableCell align="center">
//     //               <Typography variant="body1">{warrantyPeriod} years</Typography>
//     //             </CustomTableCell>
//     //           </CustomTableRow>
//     //           <CustomTableRow>
//     //             <CustomTableCell>
//     //               <Typography variant="body1">Design Life:</Typography>
//     //             </CustomTableCell>
//     //             <CustomTableCell align="center">
//     //               <Typography variant="body1">{designLife} years</Typography>
//     //             </CustomTableCell>
//     //           </CustomTableRow>
//     //         </TableBody>
//     //       </Table>
//     //     </TableContainer>
//     //   </CardContent>
//     // </Card>
//   );
// }
