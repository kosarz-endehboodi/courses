import { useState } from "react";

const coursestatus = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 1,
    title: "Active",
  },
  {
    id: 2,
    title: "Complated",
  },
  {
    id: 3,
    title: "Upcoming",
  },
];

export default function header() {
  //   setactive(s);
  // };
  const [active, setactive] = useState(0);
  function handleractive(id){
    setactive(id)
  }
  return (
    <div>
      <h1>my courses</h1>
      <div>
        <ul className="course-status">
          {coursestatus.map((item) => (
            <li
              onClick={()=> handleractive(item.id)}
              key={item.id}
              className={active === item.id ? "active" : ""}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
