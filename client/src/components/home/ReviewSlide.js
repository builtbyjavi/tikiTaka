import React from "react";

const ReviewSlide = () => {
  return (
    <div className="py-3">
      <div className="news py-5 bg-light">
        <ul className="list-group list-group-horizontal justify-content-center ">
          <li className="list-group-item px-3 border-0 bg-light border-bottom">
            INDEPENDENT
          </li>
          <li className="list-group-item px-3 border-0 bg-light border-bottom">
            GQ
          </li>
          <li className="list-group-item px-3 border-0 bg-light border-bottom">
            THE TIMES
          </li>
        </ul>
        <div className="pt-5 px-5 text-center">
          <h3>
            "TikiTaka, an award-winning soccer gear supplier, has considered
            what it takes to create the best products"
          </h3>
          {/* <h3>
            "TikiTaka classic cleats gain top points for their well-considered
            construction... literal layers of pure comfort here"
          </h3>
          <h3>
            "These days the brand to show off is TikiTaka. The hip soccer gear
            supplier of choice"
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewSlide;
