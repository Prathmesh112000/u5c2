export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input data-testid="inp" className={`input`} type={type||"text"}  style={{fontSize:size}}    onChange={(e)=>onChange(e)}/>
        <img src={rightLogo} alt=""  width={"20px"} height={"20px"} onClick={()=>rightLogoOnClick()}/>
        {/* </input> */}
    </div>
  );
};
