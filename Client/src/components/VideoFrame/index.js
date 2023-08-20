import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./VideoFrame.module.scss";
import ReactPlayer from "react-player/lazy";

VideoFrame.propTypes = {};

const cx = classNames.bind(styles);

function VideoFrame({ title, des, leftText, isColumn }) {
  return (
    <div
      className={cx("wrapper", {
        leftText,
      })}
    >
        <div className={cx('video')}>

       <ReactPlayer style={{width: '100%'}} url={'https://youtu.be/HHLrhBancJQ'} controls />
        </div>
      
      <div className={cx("text")}>
        <p className={cx("title")}>{title}</p>
        <p className={cx("des")}>{des}</p>
      </div>
    </div>
  );
}

export default VideoFrame;
