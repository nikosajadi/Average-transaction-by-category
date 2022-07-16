import Category from "./cards/Category";
import { data } from "./assets/data/categories";
import { data as transaction } from "./assets/data/transaction";

import React, { useEffect, useState } from "react";

const Categories = () => {
  const categories = data.categories;
  const transactions = transaction.transactions;
  const [average, setAverage] = useState(0);
  const [SelectedCat, setSelectedCat] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    document.title = `My Footprint`;
  });

  function fillSubCat(CatID, CatTitle) {
    setSelectedCat(CatTitle);
    var temporary = [];
    categories.forEach((item) => {
      if (parseInt(item.mainCategoryID) === parseInt(CatID)) {
        temporary = item.subcategories;
      }
    });
    setSubCategories(temporary);
    calcAverage(temporary);
  }

  function calcAverage(Cats) {
    var footprints = 0;
    var recordsLen = 0;
    Cats.forEach((subCat) => {
      transactions.forEach((item) => {
        if (parseInt(item.transaction.categoryID) === parseInt(subCat.id)) {
          recordsLen++;
          footprints += parseFloat(
            item.transaction.footprint.carbonEmissionInGrams
          );
        }
      });
    });
    setAverage(footprints / recordsLen);
  }

  return (
    <>
      <div className="container-fluid bd-masthead">
        <div className="row">
          <div className="col-3">
            <ul className="list-group">

              {categories.map((cat) => {
                return (
                  <li
                    className="list-group-item menuItem"
                    key={cat.mainCategoryID}
                    onClick={() => {
                      fillSubCat(cat.mainCategoryID, cat.mainCategory);
                    }}
                  >
                    <i class="fa-solid fa-thumbs-up fa-1x"></i>
                    <span> {cat.mainCategory} </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-9">
            <div className="page-content container note-has-grid">
              <div className="tab-content bg-transparent">
                <div className="note-has-grid row">
                  {subCategories.length > 0 ? (
                    <>
                      <h5 className="pt-4"> {SelectedCat} </h5>
                      <h5 className="mb-5 pt-1">
                        <span className="badge text-bg-danger">
                          Average footprint : <b>{average}</b> kg CO2e{" "}
                        </span>{" "}
                      </h5>
                      {subCategories.map((cat) => {
                        return (
                          <Category key={cat.id} ID={cat.id} Title={cat.name} />
                        );
                      })}
                    </>
                  ) : (
                    <h2 className="text-center pt-5 mt-5">Select a Category</h2>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
