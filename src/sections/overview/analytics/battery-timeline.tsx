import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import { CardHeader, CardContent } from '@mui/material';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

import { fDateTime } from 'src/utils/format-time';

import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------

const history = {
  timeline: [
    {
      title: 'System Startup',
      time: new Date('2023-02-06T18:21:00'),
    },
    {
      title: 'Performance Monitoring - Initial Week',
      time: new Date('2023-03-19T15:24:00'),
    },
    {
      title: 'First Maintenance Check',
      time: new Date('2023-03-30T05:03:00'),
    },
    {
      title: 'Data Analysis Report',
      time: new Date('2023-05-12T22:25:00'),
    },
    {
      title: 'Software Update',
      time: new Date('2023-06-03T13:26:00'),
    },
    {
      title: 'Battery Health Check',
      time: new Date('2023-10-19T05:42:00'),
    },
    {
      title: 'Emergency Drill',
      time: new Date('2023-12-15T02:32:09'),
    }
  ],
};

const reversedHistory = history.timeline.reverse();


export default function BatteryTimelineCard() {
  // const theme = useTheme();
  return (
    <Card>
      <CardHeader title="Timeline" />
      <CardContent sx={{ padding: 0 }}>
        <Scrollbar sx={{ height: 400 }}>
          <Timeline
            sx={{
              p: 3,
              m: 0,
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {reversedHistory.map((item, index) => {
              const lastTimeline = index === history.timeline.length - 1;

              return (
                <TimelineItem key={item.title}>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {lastTimeline ? null : <TimelineConnector />}
                  </TimelineSeparator>

                  <TimelineContent>
                    <Typography variant="subtitle2">{item.title}</Typography>

                    <Box sx={{ color: 'text.disabled', typography: 'caption', mt: 0.5 }}>
                      {fDateTime(item.time)}
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Scrollbar>
      </CardContent>
    </Card>
  );
}
