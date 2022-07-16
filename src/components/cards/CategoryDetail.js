const CategoryDetail = ({ amount, category, description, footprint, madeOn }) => {
    return (

        <div className="col-md-4 single-note-item all-category note-business text-center">
            <div className="card card-body">
                <span className="side-stick"></span>
                <h6 className="note-title text-truncate w-100 mb-2"> {category} </h6>
                <p className="note-date font-12 text-muted">{description}</p>
                <p className="note-date font-12 text-muted">amount : <b>{amount}</b></p>
                <p className="note-date font-12 text-muted">footprint : <b>{footprint}</b></p>
                <p className="note-date font-12 text-muted">madeOn : <b>{madeOn}</b></p>
            </div>
        </div>

    );
}

export default CategoryDetail;