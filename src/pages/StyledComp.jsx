import styled from "styled-components";

export const AddContainer = styled.div`
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "110" : "-100")};
  top: ${({ isOpen }) => (isOpen ? "50%" : "-100%")};
`;
