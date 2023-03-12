import React from "react";
import style from "./Card.module.css";

const Card = (props) => { 
       const commonStyle = props.className + " " + style.card;
    //    {`${props.className} ${style.card}`}
  return <div className={commonStyle}>{props.children}</div>;
};

export default Card;
