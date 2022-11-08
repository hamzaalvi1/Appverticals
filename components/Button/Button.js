import styles from "../Button/Button.module.scss";
import { useRef } from "react";
function Button(props) {
  const spanRef = useRef();
  const btnRef = useRef();


  const { title, classes, onClick, color} = props;

  const onMouseEnterEffect = (e) => {
    let parentOffset = btnRef.current.getBoundingClientRect(),

      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    spanRef.current.style.top = relY;
    spanRef.current.style.left = relX;
  };
  const onMouseOutEffect = (e) => {
    let parentOffset = btnRef.current.getBoundingClientRect(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;

    spanRef.current.style.top = relY;
    spanRef.current.style.left = relX;
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={onMouseEnterEffect}
      onMouseOut={onMouseOutEffect}
      onClick={onClick}
      className={`${styles[`btn`]} ${classes ? classes : null}`}
    >
      {title}
      <span style={{backgroundColor: color}} ref={spanRef}></span>
    </button>
  );
}

export default Button;
