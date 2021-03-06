import React, { useState } from "react";
import ReactPlayer from "react-player";
import useDatabase from "../hooks/useDatabase";
import classes from "../style/Course.module.css";
import CourseLists from "./CourseLists";

const CourseItem = ({ item, title }) => {
  const { videos } = useDatabase(item);
  const [video, setVideo] = useState();

  return (
    <section className={classes.course__content}>
      <div className="container">
        <h2 className="text-center mt-5">{title}</h2>

        <div className="row mt-5">
          <div className="col-lg-4">
            <ul className={`list-group ${classes.videos__list}`}>
              {videos.map((video) => {
                return (
                  <CourseLists
                    id={video.id}
                    page={item}
                    key={video.title}
                    title={video.title}
                    onClick={() => setVideo(video.videoID)}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <div className={classes.video__play}>
              <ReactPlayer url={`https://www.youtube.com/embed/${video}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseItem;
