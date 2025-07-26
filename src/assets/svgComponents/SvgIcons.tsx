import "./IconsStyles.scss";
type Props = {
  className?: string;
} & React.SVGProps<SVGSVGElement>;
const svgClassName = "svg_icon";

export const MenuIcon = ({ className, ...props }: Props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${svgClassName} ${className || ""}`}
  >
    <line x1="3" x2="21" y1="6" y2="6"></line>
    <line x1="3" x2="21" y1="12" y2="12"></line>
    <line x1="3" x2="21" y1="18" y2="18"></line>
  </svg>
);
export const BaselineClose = ({ className, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      className={`${svgClassName} ${className ?? ""}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
      ></path>
    </svg>
  );
};
export const VisibilityIcon = ({ className, ...props }: Props) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={`${svgClassName} ${className || ""}`}
  >
    <path fill="none" d="M0 0h24v24H0V0z"></path>
    <path d="M12 6a9.77 9.77 0 0 1 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0 1 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"></path>
  </svg>
);

export const VisibilityOffIcon = ({ className, ...props }: Props) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={`${svgClassName} ${className || ""}`}
  >
    <path
      fill="none"
      d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
    ></path>
    <path d="M12 6a9.77 9.77 0 0 1 8.82 5.5 9.647 9.647 0 0 1-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75a4.6 4.6 0 0 0-.36 1.78 4.507 4.507 0 0 0 6.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 0 1-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"></path>
  </svg>
);
export const BaselineArrowBack = ({ className, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
      className={`${svgClassName} ${className || ""}`}
    >
      <path
        fill="currentColor"
        d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
      ></path>
    </svg>
  );
};
export const ElectricBoltOutline = ({ className, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
      className={`${svgClassName} ${className || ""}`}
    >
      <path
        fill="currentColor"
        d="M7.673 21.02L11.712 14L4 13.096L15.25 2.981h1.116l-4.135 7.038l7.769.885L8.75 21.019zm2.839-3.003l7.179-6.369l-7.072-.792l2.902-4.906l-7.212 6.389l7.047.844zM12 11.981"
      ></path>
    </svg>
  );
};
export const StraightRuler = ({ className, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="1em"
      height="1em"
      {...props}
      className={`${svgClassName} ${className || ""}`}
    >
      <path
        fill="currentColor"
        d="M60.905 48.851L15.148 3.094C14.443 2.389 13.503 2 12.5 2s-1.942.389-2.649 1.094L3.095 9.85A3.72 3.72 0 0 0 2 12.499c0 1.004.389 1.943 1.095 2.648L48.85 60.906c.705.705 1.646 1.094 2.649 1.094s1.944-.389 2.648-1.094l6.759-6.759a3.75 3.75 0 0 0-.001-5.296m-1.285 4.012l-6.758 6.758c-.723.723-2.005.723-2.728 0L4.379 13.861c-.361-.361-.561-.845-.561-1.362s.199-1.002.562-1.364l6.755-6.755c.363-.362.848-.562 1.365-.562s1.002.199 1.363.561l.258.258l-6.898 6.896l1.458 1.46l6.898-6.897l1.46 1.461l-3.126 3.127l1.458 1.459l3.126-3.128l1.461 1.46l-3.128 3.128l1.459 1.459l3.128-3.128l1.459 1.459l-3.127 3.129l1.46 1.459l3.127-3.127l1.46 1.459l-6.899 6.898l1.462 1.46l6.896-6.899l1.46 1.46l-3.128 3.128l1.46 1.459l3.127-3.127l1.461 1.46l-3.129 3.127l1.459 1.459l3.128-3.128l1.46 1.461l-3.128 3.127l1.46 1.459l3.127-3.127l1.459 1.458l-6.896 6.899l1.46 1.46l6.897-6.898l1.459 1.459l-3.128 3.128l1.46 1.459l3.127-3.127l1.461 1.46l-3.129 3.127l1.461 1.459l3.127-3.126l1.459 1.459l-3.128 3.127l1.46 1.459l3.127-3.127l1.46 1.459l-6.897 6.898l1.46 1.46l6.896-6.899l1.46 1.46l-3.128 3.128l1.46 1.461l3.128-3.129l1.46 1.46l-3.129 3.127l1.459 1.459l3.128-3.128l1.46 1.461l-3.128 3.127l1.461 1.459l3.127-3.127l.256.256a1.93 1.93 0 0 1-.001 2.725"
      ></path>
      <circle cx="12.366" cy="14.942" r="2.365" fill="currentColor"></circle>
      <circle cx="22.898" cy="25.473" r="2.364" fill="currentColor"></circle>
      <circle cx="47.709" cy="50.284" r="2.364" fill="currentColor"></circle>
    </svg>
  );
};
export const WeightLine = ({ className, ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
      className={`${svgClassName} ${className || ""}`}
    >
      <path
        fill="currentColor"
        d="M14 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.465 2a4 4 0 1 0-6.93 0H5.066a1 1 0 0 0-.986.832l-1.88 11A1 1 0 0 0 3.186 21h17.629a1 1 0 0 0 .986-1.169l-1.88-11A1 1 0 0 0 18.934 8zM12 10h6.091l1.538 9H4.372l1.539-9z"
      ></path>
    </svg>
  );
};
