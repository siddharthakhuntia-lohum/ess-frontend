import Card from '@mui/material/Card';
import Stack from '@mui/material';
import Typography from '@mui/material';
import List from '@mui/material/List';
import { CardContent, CardHeader } from '@mui/material';

import Scrollbar from 'src/components/scrollbar';

import AlertItem from './alert-item';

// ------------------------------------------------------

export default function BatteryTimelineCard() {
  const notificationMap = Array.from({ length: 10 }).map((_, index) => ({
    id: index.toString(),
    title: 'Battery Low',
    createdAt: new Date(),
    type: 'warning',
  }));

  return (
    <Card>
      <CardHeader title="Timeline" />
      <CardContent sx={{ padding: 0 }}>
        <Scrollbar sx={{ height: 400 }}>
          <List>
            {notificationMap.map((notification) => (
              <AlertItem key={notification.id} notification={notification} />
            ))}
          </List>
        </Scrollbar>
      </CardContent>
    </Card>
  );
}
