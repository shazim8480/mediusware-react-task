import React, { useState } from "react";

const Modal = ({
  setModalVisible,
  data,
  title,
  handleAllContactsClick,
  handleUSContactsClick,
}) => {
  const [showEvenIndices, setShowEvenIndices] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const filteredData = showEvenIndices
    ? data?.filter((_, index) => index % 2 === 0)
    : data;

  const DetailedModal = ({ details }) => {
    return (
      <div className="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">Details</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
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
                    {details?.map((contact) => (
                      <tr
                        onClick={() => setDetailsVisible(true)}
                        key={contact?.id}
                      >
                        <td>{contact?.phone}</td>
                        <td>{contact?.country?.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
                {filteredData?.map((contact) => (
                  <tr onClick={() => setDetailsVisible(true)} key={contact?.id}>
                    <td>{contact?.phone}</td>
                    <td>{contact?.country?.name}</td>
                    {detailsVisible && <DetailedModal details={filteredData} />}
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
            className="btn btn-secondary"
          >
            US Contacts
          </button>

          <button
            type="button"
            className="btn btn-tertiary"
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
