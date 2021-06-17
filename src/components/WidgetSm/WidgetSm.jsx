import { Visibility } from '@material-ui/icons';
import profile from '../../images/topAvatar.jpg';
import styled from './WidgetSm.module.css';

export default function WidgetSm() {
  return (
    <div className={styled.widgetSm}>
      <span className={styled.widgetSmTitle}>New Join Members</span>
      <ul className={styled.widgetSmList}>
        <li className={styled.widgetSmListItem}>
          <img src={profile} alt="" className={styled.widgetSmImg} />
          <div className={styled.widgetSmUser}>
            <span className={styled.widgetSmUsername}>RS Shonjoy</span>
            <span className={styled.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button type="button" className={styled.widgetSmButton}>
            <Visibility className={styled.widgetSmIcon} />
            Display
          </button>
        </li>

        <li className={styled.widgetSmListItem}>
          <img src={profile} alt="" className={styled.widgetSmImg} />
          <div className={styled.widgetSmUser}>
            <span className={styled.widgetSmUsername}>RS Shonjoy</span>
            <span className={styled.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button type="button" className={styled.widgetSmButton}>
            <Visibility className={styled.widgetSmIcon} />
            Display
          </button>
        </li>

        <li className={styled.widgetSmListItem}>
          <img src={profile} alt="" className={styled.widgetSmImg} />
          <div className={styled.widgetSmUser}>
            <span className={styled.widgetSmUsername}>RS Shonjoy</span>
            <span className={styled.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button type="button" className={styled.widgetSmButton}>
            <Visibility className={styled.widgetSmIcon} />
            Display
          </button>
        </li>

        <li className={styled.widgetSmListItem}>
          <img src={profile} alt="" className={styled.widgetSmImg} />
          <div className={styled.widgetSmUser}>
            <span className={styled.widgetSmUsername}>RS Shonjoy</span>
            <span className={styled.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button type="button" className={styled.widgetSmButton}>
            <Visibility className={styled.widgetSmIcon} />
            Display
          </button>
        </li>

        <li className={styled.widgetSmListItem}>
          <img src={profile} alt="" className={styled.widgetSmImg} />
          <div className={styled.widgetSmUser}>
            <span className={styled.widgetSmUsername}>RS Shonjoy</span>
            <span className={styled.widgetSmUserTitle}>Software Engineer</span>
          </div>
          <button type="button" className={styled.widgetSmButton}>
            <Visibility className={styled.widgetSmIcon} />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
