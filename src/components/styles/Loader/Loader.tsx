import PropagateLoader from "react-spinners/PropagateLoader";
import { StyledLoaderBox } from "./Loader.styled";

export const Loader = () => {
  return (
    <StyledLoaderBox>
      <PropagateLoader color="#645de2" />
    </StyledLoaderBox>
  );
};
