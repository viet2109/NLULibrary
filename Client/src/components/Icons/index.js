export const ShowPass = ({
  width = "2.4rem",
  height = "2.4rem",
  className,
}) => (
  <svg
    className={className}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    data-testid="VisibilityIcon"
  >
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
  </svg>
);

export const HidePass = ({
  width = "2.4rem",
  height = "2.4rem",
  className,
}) => (
  <svg
    className={className}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    data-testid="VisibilityOffIcon"
  >
    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
  </svg>
);

export const BackButton = ({
  width = "2.4rem",
  height = "2.4rem",
  className,
}) => (
  <svg
    className={className}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    data-testid="KeyboardBackspaceIcon"
  >
    <path
      fill="currentColor"
      d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
    ></path>
  </svg>
);

export const ArrowDown = ({
  width = "2.4rem",
  height = "2.4rem",
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    width={width}
    height={height}
    className={className}
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <clipPath id="__lottie_element_294">
        <rect width="1000" height="1000" x="0" y="0"></rect>
      </clipPath>
    </defs>
    <g clipPath="url(#__lottie_element_294)">
      <g transform="matrix(1,0,0,1,0,0)" opacity="1">
        <rect width="1000" height="1000" fill="#ffffff"></rect>
      </g>
      <g transform="matrix(1,0,0,1,0,-44.78985595703125)" opacity="1">
        <g opacity="1" transform="matrix(1,0,0,1,500,500.52398681640625)">
          <path
            fill="#6cb52d"
            fillOpacity="1"
            d=" M10.479999542236328,56.53099822998047 C10.479999542236328,56.53099822998047 135.28799438476562,-25.80699920654297 135.28799438476562,-25.80699920654297 C151.0449981689453,-36.20199966430664 143.68499755859375,-60.7239990234375 124.80799865722656,-60.7239990234375 C124.80799865722656,-60.7239990234375 -124.80899810791016,-60.7239990234375 -124.80899810791016,-60.7239990234375 C-143.68699645996094,-60.7239990234375 -151.04600524902344,-36.20199966430664 -135.28900146484375,-25.80699920654297 C-135.28900146484375,-25.80699920654297 -10.480999946594238,56.53099822998047 -10.480999946594238,56.53099822998047 C-4.124000072479248,60.7239990234375 4.123000144958496,60.7239990234375 10.479999542236328,56.53099822998047z"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export const ArrowRight = ({
  width = "2.4rem",
  height = "2.4rem",
  className,
}) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m9 19 8-7-8-7z"></path>
  </svg>
);

export const ArrowLeft = ({
  width = "2.4rem",
  height = "2.4rem",
  className,
}) => (
  <svg
    className={className}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 19V5l-8 7z"></path>
  </svg>
);

export const ArrowLeftType2 = ({
  width = "2.4rem",
  height = "2.4rem",
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    focusable="false"
    ariahidden="true"
    viewBox="0 0 24 24"
    datatestid="ArrowBackIcon"
  >
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
  </svg>
);

export const ArrowRightType2 = ({
  width = "2.4rem",
  height = "2.4rem",
  className,
}) => (
  <svg className={className} width={width} height={height} focusable="false" ariahidden="true" viewBox="0 0 24 24" datatestid="ArrowForwardIcon"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
);
