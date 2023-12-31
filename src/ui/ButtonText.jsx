import styled from 'styled-components';

const ButtonText = styled.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: color 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }

  &:focus-visible {
    outline-offset: 2px;
  }
`;

export default ButtonText;
