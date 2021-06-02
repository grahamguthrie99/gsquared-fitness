import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";
import { primaryTheme } from "../utils";

const BUTTON_MODIFIERS = {
  small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px; 
    `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px; 
`,
};

const Button = styled.button`
  background: none;
  border: 2px solid ${primaryTheme.textColor};
  font-family: ${primaryTheme.primaryFont};
  font-size: ${typeScale.paragraph};
  color: ${primaryTheme.textColor};
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  transition: 0.25s;

  &:hover {
    box-shadow: 0 0 0 0 ${primaryTheme.primaryHoverColor},
      inset 6em 3.5em 0 0 ${primaryTheme.primaryHoverColor};
    color: ${primaryTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${primaryTheme.textColor};
    outline-offset: 2px;
  }

  &:active {
    outline: 3px solid ${primaryTheme.primaryActiveColor};
    border-color: ${primaryTheme.primaryActiveColor};
    color: ${primaryTheme.textColorOnPrimary};
  }

  &:disabled {
    background-color: ${primaryTheme.diabled};
    color: ${primaryTheme.textOnDisabled};
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: inherit;
  box-shadow: 0.3em 0.3em 0 0 ${primaryTheme.primaryColor},
    inset 0.3em 0.3em 0 0 ${primaryTheme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: inherit;
  border: 1px solid ${primaryTheme.primaryColor};
  color: ${primaryTheme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background-color: inherit;
  border: none;
  color: ${primaryTheme.primaryColor};

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
