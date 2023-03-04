import PropTypes from "prop-types";
import React from "react";
import AlbumList from "../AlbumList";

TableList.propTypes = {
  keyId: PropTypes.array.isRequired,
  albumList: PropTypes.array.isRequired,
};

function TableList({ keyId, albumList }) {
  console.log(keyId);

  return (
    <>
      <thead>
        <tr>
          <th scope="col" className="col-5">
            Book
          </th>
          <th className="col-2 text-monospace">Type</th>
          <th className="col-2 text-monospace">Author</th>
          <th className="col-1 text-monospace">Price</th>
          <th className="col-2 text-monospace">Public date</th>
        </tr>
      </thead>
      <tbody>
        <AlbumList albumList={albumList} />
      </tbody>
    </>
  );
}

export default TableList;
