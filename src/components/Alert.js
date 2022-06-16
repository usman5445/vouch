import React from "react";

export const Alert = ({ alertData }) => {
  return (
    <div
      className={`alert alert-${alertData.variant} alert-dismissible fade ${
        alertData.text && "show"
      } `}
      role="alert"
    >
      {alertData.text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};
