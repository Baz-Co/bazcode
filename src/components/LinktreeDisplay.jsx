import React, { useEffect } from "react";

const LinkTreeBranch = ({ item, idx }) => {
  return (
    <div key={idx} className="rounded-full bg-slate-400 shadow-lg py-4 mb-1 w-full text-center text-black truncate text-truncate">
      <li key={idx}>
        <a href={item.link} target="blank">{ item.title }</a>
      </li>
    </div>
  )
}

export default function LinktreeDisplay({ list = [] }) {
  // console.log("LinktreeDisplay", list);
  useEffect(() => {
    // console.log("LinktreeDisplay", list);
  }, [list]);

  return (
    <div className="w-96 min-w-680 mx-auto">
      <ul className="w-full">
      {list.map((item, idx) => {
        // return (
        //   <li key={idx}>
        //     <a href={item.link} target="blank">{ item.title }</a>
        //   </li>
        // )
        return LinkTreeBranch({ item, idx });
      })}
    </ul>
    </div>
  );
}
