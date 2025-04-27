import { FaAngleRight } from "react-icons/fa6";

const RightNav = ({text,hasIcon}) => {


    
    return (
        <>
        <p className="flex justify-between mr-4">{text}{hasIcon && <FaAngleRight />}</p>
        </>
    );
}

export default RightNav;