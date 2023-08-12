import React from "react";
import { useTheme } from "styled-components";

type CatPropsType = {
  stroke?: string;
  width?: number;
  height?: number;
};

const Cat = ({ stroke, width = 30, height = 30 }: CatPropsType) => {
  const theme = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.65 14.39L12 22.13L1.35001 14.39C1.20723 14.285 1.10133 14.1375 1.04744 13.9687C0.993557 13.7998 0.994455 13.6183 1.05001 13.45L2.27001 9.66996L4.71001 2.15996C4.73367 2.09877 4.77135 2.04397 4.82001 1.99996C4.89925 1.92758 5.00269 1.88745 5.11001 1.88745C5.21733 1.88745 5.32077 1.92758 5.40001 1.99996C5.45139 2.04963 5.48925 2.11158 5.51001 2.17996L7.95001 9.66996H16.05L18.49 2.15996C18.5137 2.09877 18.5513 2.04397 18.6 1.99996C18.6792 1.92758 18.7827 1.88745 18.89 1.88745C18.9973 1.88745 19.1008 1.92758 19.18 1.99996C19.2314 2.04963 19.2693 2.11158 19.29 2.17996L21.73 9.68996L23 13.45C23.0505 13.6234 23.0438 13.8086 22.9807 13.9779C22.9177 14.1473 22.8017 14.2918 22.65 14.39Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cat;
