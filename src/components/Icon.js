const Icon = ({ iconName, size, width, height, onClick, style, className, hover, alt, onMouseEnter, onMouseLeave }) => {
    const defaultSize = 32;
    const iconSize = size ? size : defaultSize;
    width = width ?? iconSize;
    height = height ?? iconSize;

    return (
        <img
            src={`images/${iconName}`}
            width={width}
            height={height}
            onClick={onClick}
            style={{...style, ...{cursor: hover?'pointer':'unset', minHeight: height, minWidth: width} }}
            className={className}
            alt={alt ?? ""}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        />
    );
};

export default Icon;
