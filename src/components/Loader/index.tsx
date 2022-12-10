import ReactLoading from 'react-loading';
import { ILoaderProps } from "./types";


const Loader = ({ type = 'spinningBubbles', color = '#FFFFFF' }: ILoaderProps) => {
  return (
    <ReactLoading type={type} color={color} width={20} height={20} />
  )
};

export default Loader;
