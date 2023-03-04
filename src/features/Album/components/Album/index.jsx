import PropTypes from "prop-types";
import React from "react";
import "./styles.scss";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <div className="card mb-3" style={{ maxWidth: "540px;" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="imgBook" src={album.image} alt={album.id} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-monospace text-start">
                <small>{album.title}</small>
              </h5>
              <p className="card-text text-monospace text-start">
                <small>{album.description}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
