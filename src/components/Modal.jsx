import React, { useState } from "react";

const Modal = ({
  setModalVisible,
  data,
  title,
  handleAllContactsClick,
  handleUSContactsClick,
}) => {
  const [showEvenIndices, setShowEvenIndices] = useState(false);

  const filteredData = showEvenIndices
    ? data.filter((_, index) => index % 2 === 0)
    : data;

  return (
    <div
      tabIndex="-1"
      className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setModalVisible(false)}
          ></button>
        </div>
        <div className="modal-body">
          <div className="col-12">
            <div className="tab-content"></div>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Phone</th>
                  <th scope="col">Country</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((contact) => (
                  <tr key={contact?.id}>
                    <td>{contact?.phone}</td>
                    <td>{contact?.country?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked={showEvenIndices}
            onChange={() => setShowEvenIndices(!showEvenIndices)}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Only Even
          </label>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => handleAllContactsClick()}
            type="button"
            className="btn btn-primary"
          >
            All Contacts
          </button>
          <button
            onClick={() => handleUSContactsClick()}
            type="button"
            className="btn btn-warning"
          >
            US Contacts
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => setModalVisible(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
