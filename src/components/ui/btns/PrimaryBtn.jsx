const PrimaryBtn = ({ text,color }) => {
    return ( 
        <>
            <button style={color? { backgroundColor: color }:{ backgroundColor: "#DB4444" }} className="py-3 px-12 text-white rounded-[4px] font-medium w-fit">{text}</button>
        </>
     );
}
 
export default PrimaryBtn;