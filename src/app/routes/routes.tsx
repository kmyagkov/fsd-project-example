import { createBrowserRouter } from 'react-router';
import { CatalogPage } from '../../pages/catalog';
import { BonusesPage } from '../../pages/bonuses';
import { CommunityPage } from '../../pages/community';
import { CoursePage } from '../../pages/course';
import { ProfilePage } from '../../pages/profile';
import { RoadmapPage } from '../../pages/roadmap';
import { SubscribePage } from '../../pages/subscribe';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
        {
            index: true,
            element: <CatalogPage />
        },
        {
            path: 'bonuses',
            element: <BonusesPage />
        },
        {
            path: 'community',
            element: <CommunityPage />
        },
        {
          path: 'courses/:courseId',
          element: <CoursePage />
        },
        {
          path: 'profile',
          element: <ProfilePage />,
        },
        {
          path: 'roadmap',
          element: <RoadmapPage />,
        },
        {
          path: 'subscribe',
          element: <SubscribePage />,
        },
    ],
  }
])