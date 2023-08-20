import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./QuestionList.module.scss";




import ReactPaginate from "react-paginate";
import QuestionItems from "./QuestionItems";
import { ArrowLeft, ArrowRight } from "../Icons";

QuestionList.propTypes = {};

const cx = classNames.bind(styles);

const listQuestion = [];

for (let i = 0; i < 100; i++) {
  listQuestion.push({
    question:
      "Dáng vẻ bề ngoài của Hiên trong truyện “Gió lạnh đầu mùa” được miêu tả như thế nào? " + i,
  });
}

function QuestionList({itemsPerPage}) {
  const [ipp, setIPP] = useState(itemsPerPage);
 // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + ipp;
  const currentItems = listQuestion.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(listQuestion.length / ipp);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * ipp) % listQuestion.length;
    
    setItemOffset(newOffset);
  };
 useEffect(() => {

  const handlePageResize = () => {
      const width = window.innerWidth;
      if (width < 744) {
       setIPP(4)
      } else if (width < 1024) {

        setIPP(8)
      } else {
        setIPP(12)
      }
  }
  window.addEventListener('resize', handlePageResize)

  return () => {
    window.removeEventListener('resize', handlePageResize);
  }

 }, [ipp])
  return (
    <>
      <QuestionItems currentItems={currentItems} />
      <ReactPaginate
      
        breakLabel="..."
        nextLabel={<ArrowRight className={cx('button')} />}
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed = { 0 } 
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<ArrowLeft className={cx('button')} />}
        renderOnZeroPageCount={null}
        previousLinkClassName={cx('previous-button')}
        nextLinkClassName={cx('next-button')}
        disabledLinkClassName={cx('disabled-button')}
        breakLinkClassName={cx('break')}
        pageLinkClassName={cx('page-link')}
        activeLinkClassName={cx('active-link')}
        className={cx('pagination-wrapper')}
      />
    </>
  );
}

export default QuestionList;
