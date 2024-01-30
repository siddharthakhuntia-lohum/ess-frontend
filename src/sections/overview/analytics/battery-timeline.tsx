import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import { CardContent } from '@mui/material';
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
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
    {
      title: 'Hello12',
      time: new Date(),
    },
  ],
};

export default function BatteryTimelineCard() {
  return (
    <Card>
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
