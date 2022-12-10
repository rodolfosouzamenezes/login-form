import Loader from "../Loader";
import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, isLoading = false, isDisabled = false }: IButtonProps) => {
  return (
  <ButtonContainer onClick={onClick} isDisabled={isDisabled || isLoading} disabled={isDisabled}>
    {isLoading ? <Loader /> : title}
  </ButtonContainer>
  )
};

export default Button;
