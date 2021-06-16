/* eslint-disable prettier/prettier */
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline
} from '@material-ui/icons';
import styled from './Sidebar.module.css';

const Sidebar = () => (
  <div className={styled.sidebar}>
    <div className={styled.sidebarWrapper}>
      <div className={styled.sidebarMenu}>
        {/* Dashboard side bar */}
        <h3 className={styled.sidebarTitle}>Dashboard</h3>
        <ul className={styled.sidebarList}>
          <li className={styled.sidebarListItem}>
            <LineStyle className={styled.sidebarIcon} />
            Home
          </li>
          <li className={styled.sidebarListItem}>
            <Timeline className={styled.sidebarIcon} />
            Analytics
          </li>
          <li className={styled.sidebarListItem}>
            <TrendingUp className={styled.sidebarIcon} />
            Sales
          </li>
        </ul>

        {/* Quick menu side bar */}
        <h3 className={styled.sidebarTitle}>Quick Menu</h3>
        <ul className={styled.sidebarList}>
          <li className={styled.sidebarListItem}>
            <PermIdentity className={styled.sidebarIcon} />
            Users
          </li>
          <li className={styled.sidebarListItem}>
            <Storefront className={styled.sidebarIcon} />
            Products
          </li>
          <li className={styled.sidebarListItem}>
            <AttachMoney className={styled.sidebarIcon} />
            Transactions
          </li>
          <li className={styled.sidebarListItem}>
            <BarChart className={styled.sidebarIcon} />
            Reports
          </li>
        </ul>

        {/* Notifications side bar */}
        <h3 className={styled.sidebarTitle}>Notifications</h3>
        <ul className={styled.sidebarList}>
          <li className={styled.sidebarListItem}>
            <MailOutline className={styled.sidebarIcon} />
            Mail
          </li>
          <li className={styled.sidebarListItem}>
            <DynamicFeed className={styled.sidebarIcon} />
            Feedback
          </li>
          <li className={styled.sidebarListItem}>
            <ChatBubbleOutline className={styled.sidebarIcon} />
            Message
          </li>
        </ul>

        {/* Staff side bar */}
        <h3 className={styled.sidebarTitle}>Staff</h3>
        <ul className={styled.sidebarList}>
          <li className={styled.sidebarListItem}>
            <WorkOutline className={styled.sidebarIcon} />
            Manage
          </li>
          <li className={styled.sidebarListItem}>
            <Timeline className={styled.sidebarIcon} />
            Analytics
          </li>
          <li className={styled.sidebarListItem}>
            <Report className={styled.sidebarIcon} />
            Reports
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Sidebar;
