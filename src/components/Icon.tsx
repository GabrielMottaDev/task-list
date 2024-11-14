import React, { CSSProperties, MouseEventHandler } from 'react';

interface IconProps {
  iconName: string;
  size?: number;
  width?: number;
  height?: number;
  onClick?: MouseEventHandler<HTMLImageElement>;
  style?: CSSProperties;
  className?: string;
  hover?: boolean;
  alt?: string;
  onMouseEnter?: MouseEventHandler<HTMLImageElement>;
  onMouseLeave?: MouseEventHandler<HTMLImageElement>;
}

const Icon: React.FC<IconProps> = ({
  iconName,
  size,
  width,
  height,
  onClick,
  style,
  className,
  hover = false,
  alt = '',
  onMouseEnter,
  onMouseLeave,
}) => {
  const defaultSize = 32;
  const iconSize = size || defaultSize;
  width = width ?? iconSize;
  height = height ?? iconSize;

  return (
    <img
      src={`images/${iconName}`}
      width={width}
      height={height}
      onClick={onClick}
      style={{
        ...style,
        cursor: hover ? 'pointer' : 'unset',
        minHeight: height,
        minWidth: width,
      }}
      className={className}
      alt={alt}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default Icon;
