import React from "react";

export default function Book(props) {
  // console.log(props)
    const {isComplete,author,title,img} = props

    const clickHandler = (title) => {
      alert('Thank you for the purchase !'+ title)
    }
  return (
    <div className="bg-white p-5 flex flex-col mx-auto">
      {img && (
        <img className="w-96" src={img} alt="" />
      )}
      {isComplete && (
        <h2 className="font-bold font-xl">{title}</h2>
      )}
      <small>{author}</small>
      {props.children}
      <button type="button" className="py-1 bg-green-600 text-white hover:bg-green-900 hover:shadow" onClick={() => {clickHandler(title)}}>BUY</button>
    </div>
  );
}
