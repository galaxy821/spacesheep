import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

const BookmarkFilledIcon = () => (
  <Svg width={27} height={25} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="m13.333 24.467-1.933-1.76C4.533 16.48 0 12.36 0 7.333 0 3.213 3.227 0 7.333 0c2.32 0 4.547 1.08 6 2.773C14.787 1.08 17.013 0 19.333 0c4.107 0 7.334 3.213 7.334 7.333 0 5.027-4.534 9.147-11.4 15.374l-1.934 1.76Z"
      fill="#CCABDA"
    />
  </Svg>
);

const BookmarkOutlinedIcon = () => (
  <Svg width={28} height={26} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M14 25.009a1.576 1.576 0 0 1-.738-.188C12.725 24.508 0 17.283 0 8.008a8 8 0 0 1 14-5.3 8 8 0 0 1 14 5.3c0 9.276-12.725 16.5-13.262 16.813-.227.122-.48.186-.738.188Zm-6-22a5 5 0 0 0-5 5c0 6.4 8.425 12.15 11 13.75 2.575-1.6 11-7.35 11-13.75a5 5 0 0 0-9.613-1.926 1.5 1.5 0 0 1-2.774 0A4.987 4.987 0 0 0 8 3.008Z"
      fill="#505050"
    />
  </Svg>
);

const HomeFilledIcon = props => (
  <Svg
    width={22}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 24V8l10.667-8 10.666 8v16h-8v-9.333H8V24H0Z" fill="#CCABDA" />
  </Svg>
);

const HomeOutlinedIcon = props => (
  <Svg
    width={22}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.667 21.333h4v-8h8v8h4v-12l-8-6-8 6v12ZM0 24V8l10.667-8 10.666 8v16H12v-8H9.333v8H0Z"
      fill="#505050"
    />
  </Svg>
);

const MomentFilledIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.912 0a2.666 2.666 0 0 1 2.168 1.115l.119.18L23.43 6.68a4 4 0 0 1 .557 1.747l.012.31v12.595a2.667 2.667 0 0 1-2.467 2.66l-.2.007H2.667a2.667 2.667 0 0 1-2.66-2.467l-.007-.2V8.74a4 4 0 0 1 .421-1.787l.15-.272L3.8 1.295A2.667 2.667 0 0 1 5.872.008L6.088 0h11.824Zm0 2.667h-4.579V8h7.779l-3.2-5.333Zm-7.245 0H6.088L2.888 8h7.779V2.667Z"
      fill="#CCABDA"
    />
  </Svg>
);

const MomentOutlinedIcon = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.912 0a2.666 2.666 0 0 1 2.168 1.115l.119.18L23.43 6.68a4 4 0 0 1 .557 1.747l.012.31v12.595a2.667 2.667 0 0 1-2.467 2.66l-.2.007H2.667a2.667 2.667 0 0 1-2.66-2.467l-.007-.2V8.74a4 4 0 0 1 .421-1.787l.15-.272L3.8 1.295A2.667 2.667 0 0 1 5.872.008L6.088 0h11.824Zm3.421 9.333H2.667v12h18.666v-12ZM10.667 2.667H6.088l-2.4 4h6.979v-4Zm7.245 0h-4.579v4h6.979l-2.4-4Z"
      fill="#505050"
    />
  </Svg>
);

const NoticeIcon = props => (
  <Svg
    width={22}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.5 17.833V19a3.5 3.5 0 1 0 7 0v-1.167m-5.833-14a2.333 2.333 0 1 1 4.666 0 8.167 8.167 0 0 1 4.667 7v3.5a4.666 4.666 0 0 0 2.333 3.5H1.667A4.666 4.666 0 0 0 4 14.333v-3.5a8.167 8.167 0 0 1 4.667-7Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PostMessageFilledIcon = () => (
  <Svg width={27} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M24 0H2.667A2.663 2.663 0 0 0 .013 2.667l-.013 16c0 1.466 1.2 2.666 2.667 2.666H24c1.467 0 2.667-1.2 2.667-2.666v-16C26.667 1.2 25.467 0 24 0Zm0 5.333L13.333 12 2.667 5.333V2.667l10.666 6.666L24 2.667v2.666Z"
      fill="#CCABDA"
    />
  </Svg>
);

const PostMessageOutlinedIcon = () => (
  <Svg width={26} height={21} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.003 0h-22.4a1.6 1.6 0 0 0-1.6 1.6v17.6a1.6 1.6 0 0 0 1.6 1.6h22.4a1.6 1.6 0 0 0 1.6-1.6V1.6a1.6 1.6 0 0 0-1.6-1.6Zm-20.8 17.6V3.2h19.2v14.4h-19.2Z"
      fill="#505050"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m25.04 2.818-11.272 9.6a1.6 1.6 0 0 1-2.082-.007L.558 2.811C-.565 1.843.12 0 1.603 0h22.4c1.488 0 2.17 1.853 1.037 2.818ZM5.907 3.2l6.832 5.893L19.654 3.2H5.907Z"
      fill="#505050"
    />
  </Svg>
);

const ProfileFilledIcon = () => (
  <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.5 23v1.874a13 13 0 1 0-19 0V23a7.504 7.504 0 0 1 4.972-7.064 6.001 6.001 0 1 1 9.056 0A7.504 7.504 0 0 1 25.5 23ZM16 32a16 16 0 1 0 0-32 16 16 0 0 0 0 32Z"
      fill="#CCABDA"
    />
  </Svg>
);

const ProfileOutlinedIcon = () => (
  <Svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 29a12.94 12.94 0 0 0 6.5-1.74V23a4.5 4.5 0 0 0-4.5-4.5h-4A4.5 4.5 0 0 0 9.5 23v4.26A12.94 12.94 0 0 0 16 29Zm9.5-6v1.874a13 13 0 1 0-19 0V23a7.504 7.504 0 0 1 4.972-7.064 6.001 6.001 0 1 1 9.056 0A7.504 7.504 0 0 1 25.5 23ZM16 32a16 16 0 1 0 0-32 16 16 0 0 0 0 32Zm3-20a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="#505050"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#505050" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const SearchIcon = props => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m16.261 17.718-5.727-5.735a6.225 6.225 0 0 1-3.886 1.331c-1.858 0-3.43-.644-4.717-1.932C.644 10.092 0 8.518 0 6.657c0-1.86.644-3.435 1.93-4.724C3.218.644 4.79 0 6.649 0s3.43.644 4.718 1.933c1.286 1.289 1.93 2.864 1.93 4.724a6.251 6.251 0 0 1-1.33 3.892l5.753 5.761a.94.94 0 0 1 .281.691.983.983 0 0 1-.307.717.969.969 0 0 1-.716.282.969.969 0 0 1-.716-.282Zm-9.613-6.452c1.278 0 2.365-.448 3.26-1.344.895-.896 1.342-1.985 1.342-3.265s-.447-2.368-1.342-3.265c-.895-.896-1.982-1.344-3.26-1.344-1.279 0-2.365.448-3.26 1.344-.895.897-1.343 1.985-1.343 3.265s.448 2.369 1.342 3.265c.895.896 1.982 1.344 3.26 1.344Z"
      fill="#9B9B9B"
    />
  </Svg>
);

export const SvgIcon = {
  BookmarkFilledIcon,
  BookmarkOutlinedIcon,
  HomeFilledIcon,
  HomeOutlinedIcon,
  MomentFilledIcon,
  MomentOutlinedIcon,
  NoticeIcon,
  PostMessageFilledIcon,
  PostMessageOutlinedIcon,
  ProfileFilledIcon,
  ProfileOutlinedIcon,
  SearchIcon,
};
