"use client";

export const SignatureStroke = ({ className = "text-black" }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1020 500"
      className={className}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(0.587261, 0.00125205, -0.00107854, 0.505877, 67.5205, 7.93525)">
        <g transform="matrix(1.70282, 0, 0, 1.97676, -397.187, -215.749)">
          
          {/* Path 1: Initial Scribble */}
          <g transform="matrix(1,0,0,1,-25.6352,-1608.05)">
            <path 
              d="M 1013.14 1849.95 C 983.633 1738.47 826.777 1873.17 819.646 1989.8 C 815.937 2050.45 882.513 2056.6 933.333 2031.48 C 1052.13 1972.77 1026.34 1954.88 995.623 1978.66 C 952.003 2012.42 962.973 2040.63 987.013 2035.11 C 1007.54 2030.4 1019.68 1994.42 1025.9 1983.77 C 1024.19 1997.63 1008.03 2029.91 1018.84 2031.96 C 1029.63 2034.01 1052.42 1989.53 1046.63 1991.3 C 1050.49 1994.03 1095.71 1987.64 1105.81 1989.72 C 1121.95 1993.04 1045.14 2010.18 1042.84 2029.45 C 1042.22 2034.63 1108.76 2015.69 1116.02 2036.18" 
              strokeWidth="12.09px" 
              stroke="currentColor" 
              fill="none" 
              strokeDasharray="103" 
              pathLength="100"
              strokeDashoffset="103" /* <-- FIXED: Starts hidden */
            >
              <animate 
                attributeName="stroke-dashoffset" 
                keyTimes="0; 0.5529616109435445; 1" 
                values="103; 103; 0" 
                dur="1.7264320483398428s" 
                fill="freeze" 
                calcMode="spline" 
                keySplines="0.69 0 1 1;0 0 0.41 0.81" 
              />
            </path>
          </g>

          {/* Path 2: Underline */}
          <g transform="matrix(0.999889,0.0149147,-0.0149147,0.999889,241.368,100.647)">
            <path 
              d="M 52.9004 379.242 C 389.611 328.528 752.918 336.083 848.175 345.738 C 759.503 349.851 556.798 350.911 385.886 364.192 C 284.143 372.099 193.668 384.336 145.221 404.126 C 282.011 386.693 503.451 366.609 533.01 370.25" 
              strokeWidth="7.86px" 
              stroke="currentColor" 
              fill="none" 
              strokeDasharray="102" 
              pathLength="101"
              strokeDashoffset="102" /* <-- FIXED: Starts hidden */
            >
              <animate 
                attributeName="stroke-dashoffset" 
                keyTimes="0; 0.7725939984916717; 1" 
                values="102; 102; 0" 
                dur="2.2972432055664074s" 
                calcMode="spline" 
                keySplines="0 0 1 1;0.42 0 1 1" 
                fill="freeze" 
              />
            </path>
          </g>

          {/* Path 3: Final Detail */}
          <g transform="matrix(1,0,0,1,0,-1608.05)">
            <path 
              d="M 447.09 1862.42 C 437.241 1841.95 416.699 1780.03 327.645 1846.68 C 187.803 1951.32 213.675 2117.79 346.342 2060.86 C 457.732 2013.07 499.401 1957.38 451.955 1986.14 C 422.58 2003.94 410.535 2054.42 433.192 2058.97 C 463.851 2065.13 483.467 1994.69 485.359 1987.89 C 463.635 2176.1 603.043 1915.84 585.638 1867.12 C 579.31 1849.41 482.219 2044.55 568.169 2046.53 C 607.504 2047.44 639.856 1970.64 616.903 1969.84 C 595.834 1969.1 581.889 1989.05 584.8 2008.62 C 588.139 2031.08 599.175 2050.83 628.501 2039.71 C 668.745 2024.45 706.655 1918.89 701.287 1876.86 C 695.577 1832.15 632.596 2023.73 656.404 2040.38 C 688.275 2062.68 735.863 2003.2 705.38 1986.7 C 696.342 1981.8 691.695 1975.67 674.54 1984.91 C 665.123 1989.99 684.689 1994.13 702.825 1992.51 C 721.049 1990.89 729.065 1983.65 729.065 1983.65" 
              strokeWidth="12.09px" 
              stroke="currentColor" 
              fill="none" 
              strokeDasharray="103" 
              pathLength="100"
              strokeDashoffset="103" /* <-- FIXED: Starts hidden */
            >
              <animate 
                attributeName="stroke-dashoffset" 
                keyTimes="0; 1" 
                values="103; 0" 
                dur="0.9219426074218752s" 
                fill="freeze" 
                calcMode="spline" 
                keySplines="0.42 0 1 1" 
              />
            </path>
          </g>
        </g>
      </g>
    </svg>
  );
};