'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Tabs, { tabsClasses } from '@mui/material/Tabs';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import { IUserProfileCover } from 'src/types/user';

import { paths } from 'src/routes/paths';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import { _userAbout, _userFeeds, _userFriends, _userGallery, _userFollowers } from 'src/_mock';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ProfileHome from '../../../user/profile-home';
import ProfileCover from '../../../user/profile-cover';
import ProfileFriends from '../../../user/profile-friends';
import ProfileGallery from '../../../user/profile-gallery';
import ProfileFollowers from '../../../user/profile-followers';
import { CardHeader, Grid } from '@mui/material';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Alerts() {
  return <Grid container></Grid>;
}
