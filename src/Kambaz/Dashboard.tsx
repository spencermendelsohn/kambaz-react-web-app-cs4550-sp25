import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <div className="wd-dashboard-course">
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link">
              <img src="/images/reactjs.jpg" width={200}/>
              <div>
                <h5> CS1234 React JS </h5>
                <p className="wd-dashboard-course-title">
                  Full Stack software developer </p>
                <button> Go</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link">
            <img src="/images/drums.png" width={200}/>
            <div>
              <h5> CS1235 Intro to Drums </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Drums 1235 </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link">
            <img src="/images/writing.png" width={200}/>
            <div>
              <h5> CS1236 Intro to Writing </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Writing</p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200}/>
            <div>
              <h5> CS1237 Intro to Math </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Math </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200}/>
            <div>
              <h5> CS1238 Intro to English </h5>
              <p className="wd-dashboard-course-title">
                Introduction to English </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200}/>
            <div>
              <h5> CS1239 Intro to Spanish </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Spanish </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200}/>
            <div>
              <h5> CS1240 Intro to French </h5>
              <p className="wd-dashboard-course-title">
                Introduction to French </p>
              <button> Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
