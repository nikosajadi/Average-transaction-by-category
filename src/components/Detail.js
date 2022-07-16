import CategoryDetal from "../components/cards/CategoryDetail";
import { data } from "./assets/data/transaction";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Detail() {
  const params = useParams();
  const [average, setAverage] = useState(0);
  const [catTitle, setCatTitle] = useState("");
  const [subCatTitle, setSubCatTitle] = useState("");
  const [records, setRecords] = useState([]);
  const transactions = data.transactions;

  useEffect(() => {
    document.title = `My Footprint Detail`;
    console.log("Update");
    findData();
  }, []);

  function findData() {
    var temporary = [];
    transactions.forEach((item) => {
      if (parseInt(item.transaction.categoryID) === parseInt(params.id))
        temporary.push(item);
    });
    setRecords(temporary);
    if (temporary.length > 0) {
      setCatTitle(temporary[0].mainCategory);
      setSubCatTitle(temporary[0].subCategory);
      calc(temporary);
    }
  }

  function calc(data) {
    var footprints = 0;
    data.forEach((item) => {
      footprints += parseFloat(
        item.transaction.footprint.carbonEmissionInGrams
      );
    });
    setAverage(footprints / data.length);
  }

  return (
    <>
      <Link to={`/category`} className="btn btn-warning mb-3">
        {" "}
        Back To Categories{" "}
      </Link>
      {records.length > 0 ? (
        <div className="page-content container note-has-grid">
          <div className="tab-content bg-transparent">
            <div className="note-has-grid row text-center">
              <div className="col-md-5 single-note-item all-category note-important m-auto">
                <div className="card card-body">
                  <span className="side-stick"></span>
                  <h5 className="note-title text-truncate w-75 mb-0"> </h5>
                  <p className="note-date font-12 text-muted">
                    {" "}
                    Average footprint per category : <b>{average}</b> kg CO2e{" "}
                  </p>
                  <div className="note-content">
                    <p className="note-inner-content text-muted">
                      {" "}
                      <b> {catTitle} </b> / <b> {subCatTitle} </b>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Split Head & Body */}

            <div className="note-has-grid row text-center">
              {records.map((item) => {
                return (
                  <CategoryDetal
                    key={item.transaction.categoryID}
                    amount={`${item.transaction.amount.value} ${item.transaction.amount.currency}`}
                    category={item.transaction.category}
                    description={item.transaction.description}
                    footprint={item.transaction.footprint.carbonEmissionInGrams}
                    madeOn={item.transaction.madeOn}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <h5 className="text-center mt-3">
          {" "}
          No Result For Category ID : {params.id}{" "}
        </h5>
      )}
    </>
  );
}

export default Detail;
