import styled from '@emotion/styled';
import {
  AirbnbIcon,
  LoginIcon,
  HeartIcon,
  MessageIcon,
  ProfileIcon,
  SearchIcon,
} from '@UI/Icon';

const Icons = Object.entries({
  AirbnbIcon,
  LoginIcon,
  HeartIcon,
  MessageIcon,
  ProfileIcon,
  SearchIcon,
}).reduce((icons, entry) => {
  const [iconName, icon] = entry;

  return {
    ...icons,
    [iconName]: styled(icon)`
      width: 24px;
      height: 24px;
      fill: #aaa;
    `,
  };
}, {});

// Object.keys(Icon).forEach((key) => {
//   Icons[key].displayName = key.charAt(0).toUpperCase() + key.slice(1) + 'Icon';
//   console.log(Icons[key].displayName);
// });

export default Icons;
