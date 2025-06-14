function ChangeButton({btnBgColor, setMainBgColor})
{
  
  function setBgColor(){
    setMainBgColor(btnBgColor)
  }
  return(
    <button className="border-0 px-8 py-4 bg-red-500 text-white rounded-3xl" style={{backgroundColor: btnBgColor}} onClick={setBgColor}>Red</button>
    )
}

export default ChangeButton