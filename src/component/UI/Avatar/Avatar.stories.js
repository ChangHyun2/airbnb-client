import AvatarComponent from '@UI/Avatar';

export default {
  title: 'Avatar',
  component: AvatarComponent,
};

// Avatar
export const Avatar = ({ size, src }) => {
  return (
    <>
      <AvatarComponent size={size} src={src} />
      {['xs', 'sm', 'md', 'lg'].map((size) => {
        return (
          <>
            <h2>{size}</h2>
            <AvatarComponent size={size} src={src} />
          </>
        );
      })}
    </>
  );
};

const argTypes = {
  src: {
    control: {
      type: 'text',
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'auto'],
    },
  },
};

Avatar.argTypes = argTypes;
