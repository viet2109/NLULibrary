import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SmoothSlide.module.scss";
SmoothSlide.propTypes = {};

const cx = classNames.bind(styles);

function SmoothSlide({ transition = 1, className}) {
  const [distance, setDistance] = useState(0);
  const [flag, setFlag] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const slide = () => {
        const time = setTimeout(() => {
            if (wrapRef.current && window.innerWidth<1024) {
              wrapRef.current.style.left = `${distance}px`;
              wrapRef.current.style.top = '0';

              
            } else {
              wrapRef.current.style.top = `${distance}px`;
              wrapRef.current.style.left = '0';
      
            }

            if (distance >= -850 && !flag) {
              setDistance(distance - transition);
            } else if (distance < -850 && !flag) {
              setDistance(distance + transition);
              setFlag(true);
      
            } else if (distance >=0 && flag) {
              setDistance(distance-transition)
              setFlag(false)
            }
            else if (distance >= -850 && flag) {
              setDistance(distance + transition);
      
            } 
          }, 10);
          return time;
      }
    const timeID =  slide();
   
    window.addEventListener('resize', slide);
    return () => {
      clearTimeout(timeID);
      window.removeEventListener('resize', slide);
    };
  }, [distance])

  return (
    <div className={cx("wrapper", className)}>
      <div className={cx("img-wrapper")} ref={wrapRef}>
        <img
          className={cx("img")}
          src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/LinearOne/School1.png"
          alt=""
        />
        <img
          className={cx("img")}
          src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/LinearOne/School1.png"
          alt=""
        />
        <img
          className={cx("img")}
          src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/LinearOne/School1.png"
          alt=""
        />
        <img
          className={cx("img")}
          src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/LinearOne/School1.png"
          alt=""
        />
        <img
          className={cx("img")}
          src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/LinearOne/School1.png"
          alt=""
        />
        <img
          className={cx("img")}
          src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/LinearOne/School1.png"
          alt=""
        />
        <img
          className={cx("img")}
          src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/LinearOne/School1.png"
          alt=""
        />
        <img
          className={cx("img")}
          src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/LinearOne/School1.png"
          alt=""
        />
        <img
          className={cx("img")}
          src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/LinearOne/School1.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SmoothSlide;
