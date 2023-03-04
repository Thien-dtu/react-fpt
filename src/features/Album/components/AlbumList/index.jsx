import PropTypes from "prop-types";
import React from "react";
import Album from "../Album";
import "./styles.scss";

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
  return (
    <>
      {albumList.map((data) => (
        <tr key={data.id}>
          <th scope="row" className="col-5">
            <Album album={data} />
          </th>
          <td className="text-monospace">{data.type}</td>
          <td className="text-monospace">{data.author}</td>
          <td className="text-monospace">{data.price}</td>
          <td className="text-monospace">{data.public_date}</td>
        </tr>
      ))}
    </>
  );
}

export default AlbumList;
