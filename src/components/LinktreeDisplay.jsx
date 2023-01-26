import React, { useEffect } from "react";

export default function LinktreeDisplay({ list = [] }) {
  // console.log("LinktreeDisplay", list);
  useEffect(() => {
    // console.log("LinktreeDisplay", list);
  }, [list]);

  return (
    <>
      <ul>
      {list.map((item, idx) => {
        return (
          <li key={idx}>
            <a href={item.link} target="blank">{ item.title }</a>
          </li>
        )
      })}
    </ul>
    </>
  );
}
