import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import { CardContent, CardHeader, useTheme } from '@mui/material';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
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
      time: new Date('2024-02-01T08:00:00'),
    },
    {
      title: 'Performance Monitoring - Initial Week',
      time: new Date('2024-02-01T00:00:00'),
    },
    {
      title: 'First Maintenance Check',
      time: new Date('2024-02-08T00:00:00'),
    },
    {
      title: 'Data Analysis Report',
      time: new Date('2024-02-15T00:00:00'),
    },
    {
      title: 'Software Update',
      time: new Date('2024-03-01T00:00:00'),
    },
    {
      title: 'Battery Health Check',
      time: new Date('2024-03-15T00:00:00'),
    },
    {
      title: 'Regulatory Compliance Review',
      time: new Date('2024-04-01T00:00:00'),
    },
    {
      title: 'Expansion Planning Meeting',
      time: new Date('2024-06-01T00:00:00'),
    },
    {
      title: 'Semi-Annual Performance Review',
      time: new Date('2024-06-30T00:00:00'),
    },
    {
      title: 'Financial Reporting',
      time: new Date('2024-07-01T00:00:00'),
    },
    {
      title: 'Emergency Drill',
      time: new Date('2024-08-01T00:00:00'),
    },
    {
      title: 'Customer Feedback Survey',
      time: new Date('2024-09-01T00:00:00'),
    },
    {
      title: 'Market Analysis Update',
      time: new Date('2024-10-01T00:00:00'),
    },
    {
      title: 'Year-End Review',
      time: new Date('2024-12-01T00:00:00'),
    },
    {
      title: 'Goal Setting for 2025',
      time: new Date('2025-01-01T00:00:00'),
    },
  ],
};

export default function BatteryTimelineCard() {
  const theme = useTheme();
  return (
    <Card>
      <CardHeader title="Timeline"></CardHeader>
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
            {history.timeline.map((item, index) => {
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
