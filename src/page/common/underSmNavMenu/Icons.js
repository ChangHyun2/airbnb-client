import styled from '@emotion/styled';
import {
  AirbnbIcon,
  loginIcon,
  heartIcon,
  messageIcon,
  profileIcon,
  searchIcon,
} from '@UI/Icon';

const Icons = Object.entries({
  AirbnbIcon,
  loginIcon,
  heartIcon,
  messageIcon,
  profileIcon,
  searchIcon,
}).reduce((icons, entry) => {
  const [iconName, icon] = entry;
  console.log(iconName, icon);

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
