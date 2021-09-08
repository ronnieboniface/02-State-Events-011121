const Events = () => {

  const handleClick = () => {
    alert('The button has been clicked!')
  };

  const handleMouseOver = (e) => {
    e.target.style.background = '#F2CC8F';
  };

  const handleMouseOut = (e) => {
    e.target.style.background = '#F4F1DE';
  };

  const handleKeyDown = () => {
    console.log("We hacked the mainframe!")
  };

  return (
    <div className="event-grp">
      <button 
        onClick={handleClick}>Click Me!</button>

      <button 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Mouse Over Me!
      </button>

      <input onKeyDown={handleKeyDown} />
    </div>
  );
};

export default Events;
