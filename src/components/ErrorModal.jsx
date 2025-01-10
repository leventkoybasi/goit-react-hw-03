/* eslint-disable react/no-unescaped-entities */
import style from "../App.module.css";

function ErrorModal() {
  return (
    <>
      <div className={`${style.modalBackdrop} `}>
        <span className={`${style.closeButton} `}></span>
        <div className={`${style.modal} `}>
          <p className=''>We couldn't find anything matching your search. </p>
        </div>
      </div>
    </>
  );
}

export default ErrorModal;
