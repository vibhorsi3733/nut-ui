import React from 'react';

interface AvatarCSS {
  container: string;
  avatar: string;
  image: string;
  fallback: string;
  group: string;
}

interface AvatarData {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  avatars?: Array<{ src?: string; alt?: string; name?: string }>;
}

interface AvatarProps {
  css: AvatarCSS;
  data: AvatarData;
}

const Avatar: React.FC<AvatarProps> = ({ css, data }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (data.avatars && data.avatars.length > 0) {
    return (
      <div className={css.group}>
        {data.avatars.slice(0, 3).map((avatar, index) => (
          <div key={index} className={css.avatar} style={{ zIndex: data.avatars!.length - index }}>
            {avatar.src ? (
              <img src={avatar.src} alt={avatar.alt || ''} className={css.image} />
            ) : (
              <div className={css.fallback}>
                {avatar.name ? getInitials(avatar.name) : '?'}
              </div>
            )}
          </div>
        ))}
        {data.avatars.length > 3 && (
          <div className={css.avatar} style={{ zIndex: 0 }}>
            <div className={css.fallback}>+{data.avatars.length - 3}</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={css.avatar}>
      {data.src ? (
        <img src={data.src} alt={data.alt || ''} className={css.image} />
      ) : (
        <div className={css.fallback}>
          {data.name ? getInitials(data.name) : '?'}
        </div>
      )}
    </div>
  );
};

export default Avatar;
