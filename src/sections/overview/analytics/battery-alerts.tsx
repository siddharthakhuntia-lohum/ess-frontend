import Card from '@mui/material/Card';
import List from '@mui/material/List';
import { CardContent } from '@mui/material';

import Scrollbar from 'src/components/scrollbar';

import AlertItem from './alert-item';

// ------------------------------------------------------

export default function BatteryAlertsCard() {
  const notificationMap = Array.from({ length: 10 }).map((_, index) => ({
    id: index.toString(),
    title: 'Battery Low',
    createdAt: new Date(),
    type: 'warning',
  }));

  return (
    <Scrollbar>
      <Card sx={{ overflow: 'auto', maxHeight: '400px' }}>
        <CardContent>
          <List>
            {notificationMap.map((notification) => (
              <AlertItem key={notification.id} notification={notification} />
            ))}
          </List>
        </CardContent>
      </Card>
    </Scrollbar>
  );
}
