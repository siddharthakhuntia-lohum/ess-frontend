import Card from '@mui/material/Card';
import { Stack, Divider, CardHeader, Typography, CardContent } from '@mui/material';

import Iconify from 'src/components/iconify';

// ------------------------------------------------------

const CustomStack = ({ children }: { children: React.ReactNode }) => (
    <Stack
        direction="row"
        spacing={2}
        display="flex"
        justifyContent="space-around"
        alignItems="center" 
        sx={{ width: '100%', minHeight: "50px" }}
    >
        {children}
    </Stack>
);

const CustomTypography = ({ children }: { children: React.ReactNode }) => (
  <Typography sx={{ width: '50%', textAlign: 'center' }}>{children}</Typography>
);

export default function LiveDataCard() {
  return (
    <Card>
    <CardHeader
        title="Live Data"
        avatar={<Iconify icon="openmoji:green-circle" />}
    />
      <CardContent>
        <CustomStack>
          <CustomTypography>
            Voltage: 5 mV

          </CustomTypography>
          <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', width: '20px' }} />
          <CustomTypography>
            Current: 12 A
          
          </CustomTypography>
        </CustomStack>
        <Divider sx={{ my: 2, borderStyle: 'dashed' }} />
        <CustomStack>
          <CustomTypography>
            Temperature: 27 °C
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              (0.5%)
            </Typography>
          </CustomTypography>
          <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', width: '20px' }} />
          <CustomTypography>
            Module No.: B5A54ASD
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              (Changed Required)
            </Typography>
          </CustomTypography>
        </CustomStack>
        <Divider sx={{ my: 2, borderStyle: 'dashed' }} />
        <CustomStack>
          <CustomTypography>
            Highest Temperature: 31 °C

          </CustomTypography>
          <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', width: '20px' }} />
          <CustomTypography>
            Lowest Temperature: 23 °C
       
          </CustomTypography>
        </CustomStack>
      </CardContent>
    </Card>
  );
}
