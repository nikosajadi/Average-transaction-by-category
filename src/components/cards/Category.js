import { Link } from "react-router-dom";

const Category = ({ ID, Title }) => {
  return (
    <>
      <Link
        to={`/category/${ID}`}
        className="col-md-4 single-note-item all-category note-business"
      >
        <div className="card card-body">
          <span className="side-stick"></span>
          <h5 className="note-title text-truncate w-75 mb-0"> {Title} </h5>
          <p className="note-date font-12 text-muted"> ID : {ID}</p>
        </div>
      </Link>
    </>
  );
};

export default Category;
