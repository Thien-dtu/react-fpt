import React, { useEffect, useState } from "react";
import "../bootstrap/bootstrap.css";
import DataJson from "../data.json";
import TableList from "./Album/components/TableList";
import "./styles.scss";

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const [data, setData] = useState(DataJson);
  const [dataView, setDataView] = useState([]);

  const getUserData = () => {
    const arr = data.map((data) => {
      return data;
    });
    setData(arr);
    setDataView(arr);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const keys = [];

  dataView.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    });
  });

  return (
    <div>
      <div className="bg-admin" style={{ backgroundColor: "#0e64c7" }}>
        <div className="row row-two mt-2 ml-2">
          <div className="col">
            <div className="row">
              <div className="card" style={{ width: "18rem;" }}>
                <div
                  className="card-header text-start "
                  style={{ margin: "10px" }}
                >
                  <p
                    className="mb-0"
                    style={{ fontWeight: "800", fontSize: "16px" }}
                  >
                    Book-list
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <table class="table">
                    <TableList keyId={keys} albumList={dataView} />
                  </table>
                </ul>
              </div>
            </div>
          </div>
          <div class="col row_two_col_40">
            <div class="row child_row">Form</div>
            <div class="row child_row">Card-list</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumFeatures;
