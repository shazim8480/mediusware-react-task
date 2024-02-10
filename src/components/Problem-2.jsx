import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Modal from "./Modal";
import { ALL_CONTACTS_URL, US_CONTACTS_URL } from "../constants/url";

const Problem2 = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: allContacts } = useSWR(ALL_CONTACTS_URL, fetcher);
  const { data: USContacts } = useSWR(US_CONTACTS_URL, fetcher);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [contactData, setContactData] = useState([]);

  const handleAllContactsClick = () => {
    setModalTitle("All Contacts");
    setContactData(allContacts?.results);
    setModalVisible(true);
  };

  const handleUSContactsClick = () => {
    setModalTitle("US Contacts");
    setContactData(USContacts?.results);
    setModalVisible(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => handleAllContactsClick()}
            className="btn btn-lg btn-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-secondary"
            onClick={() => handleUSContactsClick()}
            type="button"
          >
            US Contacts
          </button>
        </div>
        {modalVisible && (
          <Modal
            title={modalTitle}
            data={contactData}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            handleAllContactsClick={handleAllContactsClick}
            handleUSContactsClick={handleUSContactsClick}
          />
        )}
      </div>
    </div>
  );
};

export default Problem2;
