import { css } from "styled-components";

export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    }
  `;
};

export const tablet = (props: any) => {
  return css`
    @media only screen and (min-width: 801px) and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const desktop = (props: any) => {
  return css`
    @media only screen and (min-width: 1025px) {
      ${props}
    }
  `;
};