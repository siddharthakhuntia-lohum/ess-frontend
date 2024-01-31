import { HomeView } from 'src/sections/home/view';
import { OverviewAnalyticsView } from 'src/sections/overview/analytics/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Minimal: The starting point for your next project',
};

export default function HomePage() {
  return <OverviewAnalyticsView />;
  // return <HomeView />;
}
