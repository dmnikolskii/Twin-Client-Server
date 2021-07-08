function LargeButton({onClick, caption}) {
    return (
      <>
        <button onClick={onClick} className="button button1 reg_label">{caption}</button>
      </>
    );
  }
  
  export default LargeButton;
  