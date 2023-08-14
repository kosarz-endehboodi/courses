export default function course({ course }) {
  //   console.log(props.course.rate);
  return (
    <div className="course-item" key={course.key}>
      <div className="course-item__img">
        <img src={course.imageUrl} alt="" />
      </div>
      <div className="course-item__detail">
        <CourseCardBody course={course} />
        <CourseCardFooter course={course} />
      </div>
    </div>
  );
}

function CourseCardBody({ course }) {
  return (
    <div className="course-item__body">
      <div>
        <h1 className="title">{course.title}</h1>
        <p className="desc">{course.description}</p>
      </div>
      <div className="rate">{course.rate}</div>
    </div>
  );
}

function CourseCardFooter({ course }) {
  const started = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((t) => (
          <span key={t} className="badge badge--secondary">
            {t}
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">{started}</div>
        <span
          className={`badge ${
            course.status === "Active"
              ? "badge--primary"
              : course.status === "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          }`}
        >
          {" "}
          {course.status}
        </span>
      </div>
    </div>
  );
}
