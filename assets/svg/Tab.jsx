import Svg, { Path } from "react-native-svg";

export const HomeSvg = (props) => {
  //   props = JSON.parse(props);
  const { color, size } = props;
  return (
    <>
      <Svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
          d="M8.508 19.774v-3.067c0-.78.669-1.414 1.498-1.42h3.038c.834 0 1.51.636 1.51 1.42v3.076c-.001.662.561 1.204 1.265 1.22h2.025c2.02 0 3.656-1.54 3.656-3.439V8.84a2.401 2.401 0 0 0-1.013-1.905l-6.926-5.247a3.487 3.487 0 0 0-4.152 0L2.513 6.944A2.383 2.383 0 0 0 1.5 8.85v8.714c0 1.899 1.637 3.438 3.656 3.438H7.18c.721 0 1.306-.55 1.306-1.228"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </>
  );
};

export const SocialSvg = (props) => {
  const { color, size } = props;
  return (
    <>
      <Svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
          d="M17.5.002h-14a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.59l3.7 3.71a.998.998 0 0 0 .71.29.84.84 0 0 0 .38-.08 1 1 0 0 0 .62-.92v-16a3 3 0 0 0-3-3Zm1 16.59-2.29-2.3a1 1 0 0 0-.71-.29h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v13.59Z"
          fill={color}
        />
      </Svg>
    </>
  );
};

export const PortofolioSvg = (props) => {
  const { color, size } = props;
  return (
    <>
      <Svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path d="M11.333 1.667a.833.833 0 0 0-.833.833v6.667a.833.833 0 0 0 .833.833H18a.833.833 0 0 0 .833-.833 7.5 7.5 0 0 0-7.5-7.5Zm.834 6.666V3.392a5.833 5.833 0 0 1 4.941 4.941h-4.941Z" fill={color} />
        <Path d="M17.85 11.717a.832.832 0 0 0-1.067.508 6.666 6.666 0 1 1-8.508-8.508.834.834 0 0 0-.55-1.575 8.333 8.333 0 1 0 10.633 10.633.833.833 0 0 0-.508-1.058Z" fill={color} />
      </Svg>
    </>
  );
};
export const ProfileSvg = (props) => {
  const { color, size } = props;
  return (
    <>
      <Svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 10.004c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4Zm3.758.673A5.983 5.983 0 0 0 16.5 6.004a6 6 0 1 0-9.758 4.673C3.083 12.052.5 15.45.5 20.004h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327Z"
          fill={color}
        />
      </Svg>
    </>
  );
};

export const StrategySvg = (props) => {
  const { color, size } = props;
  return (
    <>
      <Svg width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path
          d="M20.497 19.093a.909.909 0 0 1-.91.91H1.41a.91.91 0 0 1-.909-.91V.914a.909.909 0 1 1 1.818 0v15.18l5.608-8.408a.909.909 0 0 1 1.509 0l2.818 4.227L18.797.46a.912.912 0 0 1 1.582.909l-7.272 12.725a.91.91 0 0 1-.79.455.909.909 0 0 1-.782-.41L8.68 9.822l-5.572 8.362h16.479a.909.909 0 0 1 .909.91Z"
          fill={color}
        />
      </Svg>
    </>
  );
};
