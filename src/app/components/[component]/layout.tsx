import React from 'react';

const ComponentLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ComponentLayout;