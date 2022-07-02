import React from 'react';

interface Props {
  id: string;
}

export const SvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'logo':
      return (
        <svg
          width="103"
          height="20"
          viewBox="0 0 103 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5858 8.36396C10.8047 9.14501 10.8047 10.4113 11.5858 11.1924L15.4749 15.0815L11.1924 19.364C10.4113 20.145 9.14501 20.145 8.36396 19.364L0.585786 11.5858C-0.195262 10.8047 -0.195262 9.53841 0.585786 8.75736L8.36396 0.979186C9.14501 0.198137 10.4113 0.198137 11.1924 0.979186L15.0815 4.86827L11.5858 8.36396ZM15.0815 4.86827L19.364 0.585786C20.145 -0.195262 21.4113 -0.195262 22.1924 0.585786L29.9706 8.36396C30.7516 9.14501 30.7516 10.4113 29.9706 11.1924L22.1924 18.9706C21.4113 19.7516 20.145 19.7516 19.364 18.9706L15.4749 15.0815L18.9706 11.5858C19.7516 10.8047 19.7516 9.53841 18.9706 8.75736L15.0815 4.86827Z"
            fill="url(#paint0_linear_6203_1585)"
          />
          <path
            d="M41.2764 16.16C40.4231 16.16 39.6284 16.0213 38.8924 15.744C38.1671 15.456 37.5324 15.056 36.9884 14.544C36.4551 14.0213 36.0391 13.408 35.7404 12.704C35.4417 12 35.2924 11.232 35.2924 10.4C35.2924 9.568 35.4417 8.8 35.7404 8.096C36.0391 7.392 36.4604 6.784 37.0044 6.272C37.5484 5.74933 38.1831 5.34933 38.9084 5.072C39.6337 4.784 40.4284 4.64 41.2924 4.64C42.2097 4.64 43.0471 4.8 43.8044 5.12C44.5617 5.42933 45.2017 5.89333 45.7244 6.512L44.3804 7.776C43.9751 7.33867 43.5217 7.01333 43.0204 6.8C42.5191 6.576 41.9751 6.464 41.3884 6.464C40.8017 6.464 40.2631 6.56 39.7724 6.752C39.2924 6.944 38.8711 7.216 38.5084 7.568C38.1564 7.92 37.8791 8.336 37.6764 8.816C37.4844 9.296 37.3884 9.824 37.3884 10.4C37.3884 10.976 37.4844 11.504 37.6764 11.984C37.8791 12.464 38.1564 12.88 38.5084 13.232C38.8711 13.584 39.2924 13.856 39.7724 14.048C40.2631 14.24 40.8017 14.336 41.3884 14.336C41.9751 14.336 42.5191 14.2293 43.0204 14.016C43.5217 13.792 43.9751 13.456 44.3804 13.008L45.7244 14.288C45.2017 14.896 44.5617 15.36 43.8044 15.68C43.0471 16 42.2044 16.16 41.2764 16.16ZM49.8826 16V6.048L50.3786 6.56H46.1866V4.8H55.6586V6.56H51.4666L51.9466 6.048V16H49.8826ZM57.4685 16V4.8H59.5165V12.752L65.5325 4.8H67.4685V16H65.4205V8.064L59.4045 16H57.4685ZM78.0168 16L74.2248 10.544L75.9048 9.504L80.3688 16H78.0168ZM70.6088 16V4.8H72.6568V16H70.6088ZM72.0328 11.28V9.488H75.8088V11.28H72.0328ZM76.0968 10.64L74.1928 10.384L78.0168 4.8H80.2248L76.0968 10.64ZM83.7006 9.456H89.2686V11.168H83.7006V9.456ZM83.8606 14.256H90.1806V16H81.7806V4.8H89.9566V6.544H83.8606V14.256ZM92.4994 16V4.8H97.1074C98.0994 4.8 98.9474 4.96 99.6514 5.28C100.366 5.6 100.915 6.05867 101.299 6.656C101.683 7.25333 101.875 7.96267 101.875 8.784C101.875 9.60533 101.683 10.3147 101.299 10.912C100.915 11.5093 100.366 11.968 99.6514 12.288C98.9474 12.608 98.0994 12.768 97.1074 12.768H93.6514L94.5794 11.792V16H92.4994ZM94.5794 12.016L93.6514 11.008H97.0114C97.9287 11.008 98.6167 10.816 99.0754 10.432C99.5447 10.0373 99.7794 9.488 99.7794 8.784C99.7794 8.06933 99.5447 7.52 99.0754 7.136C98.6167 6.752 97.9287 6.56 97.0114 6.56H93.6514L94.5794 5.536V12.016Z"
            fill="#424242"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6203_1585"
              x1="5.67172"
              y1="5.77832"
              x2="13.1717"
              y2="13.7783"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFAC28" />
              <stop offset="1" stopColor="#FFC328" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'profile':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );
    case 'a_icon':
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="#2A2F37" fillOpacity="0.08" />
          <path
            opacity="0.4"
            d="M11.6211 29V26.9492L12.8398 26.7734L18.2656 11.9375H21.7695L27.1602 26.7734L28.3789 26.9492V29H22.5664V26.9492L23.75 26.7383L23 24.3945H17L16.25 26.7383L17.4336 26.9492V29H11.6211ZM17.8086 21.875H22.1914L20.1992 16.0273L20.0352 15.5117H19.9648L19.7891 16.0625L17.8086 21.875Z"
            fill="#2A2F37"
          />
        </svg>
      );
    case 'icon_ads':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.66675 2.5H6.66675C7.5508 2.5 8.39865 2.85119 9.02377 3.47631C9.64889 4.10143 10.0001 4.94928 10.0001 5.83333V17.5C10.0001 16.837 9.73669 16.2011 9.26785 15.7322C8.79901 15.2634 8.16312 15 7.50008 15H1.66675V2.5Z"
            stroke="#4877F2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
            stroke="#4877F2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'exit_icon':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.5 10.8333V15.8333C14.5 16.2754 14.3244 16.6993 14.0118 17.0118C13.6993 17.3244 13.2754 17.5 12.8333 17.5H3.66667C3.22464 17.5 2.80072 17.3244 2.48816 17.0118C2.17559 16.6993 2 16.2754 2 15.8333V6.66667C2 6.22464 2.17559 5.80072 2.48816 5.48816C2.80072 5.17559 3.22464 5 3.66667 5H8.66667"
            stroke="#2A2F37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 2.5H17.5V7.5"
            stroke="#2A2F37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33325 11.6667L17.4999 2.5"
            stroke="#2A2F37"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'plus':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 4.1665V15.8332"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16675 10H15.8334"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return <svg>123</svg>;
  }
};
