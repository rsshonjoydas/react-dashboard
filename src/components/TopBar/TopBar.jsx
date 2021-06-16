import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import React from 'react';
import toAvatar from '../../images/topAvatar.jpg';
import styled from './TopBar.module.css';

const TopBar = () => (
  <div className={styled.topBar}>
    <div className={styled.topBarWrapper}>
      <div className={styled.topLeft}>
        <span className={styled.logo}>rsshonjoy</span>
      </div>

      {/* add material ui icons */}
      <div className={styled.topRight}>
        <div className={styled.topBarIconContainer}>
          <NotificationsNone />
          <span className={styled.topIconBadge}>2</span>
        </div>
        <div className={styled.topBarIconContainer}>
          <Language />
          <span className={styled.topIconBadge}>2</span>
        </div>
        <div className={styled.topBarIconContainer}>
          <Settings />
        </div>
        <img src={toAvatar} alt="top avatar" className={styled.topAvatar} />
      </div>
    </div>
  </div>
);

export default TopBar;
