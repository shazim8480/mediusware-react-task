import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Modal from "./Modal";
import { ALL_CONTACTS_URL, US_CONTACTS_URL } from "../constants/url";

const Problem2 = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const [allContactsModalVisible, setAllContactsModalVisible] = useState(false);
  const [USContactsModalVisible, setUSContactsModalVisible] = useState(false);

  const { data: contacts } = useSWR(ALL_CONTACTS_URL, fetcher);
  const { data: USContacts } = useSWR(US_CONTACTS_URL, fetcher);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => {
              setUSContactsModalVisible(false);
              setAllContactsModalVisible(true);
            }}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            onClick={() => {
              setAllContactsModalVisible(false);
              setUSContactsModalVisible(true);
            }}
            type="button"
          >
            US Contacts
          </button>
        </div>
        {allContactsModalVisible && (
          <Modal
            title={"All Contacts"}
            data={contacts?.results}
            modalVisible={allContactsModalVisible}
            setModalVisible={setAllContactsModalVisible}
          />
        )}
        {USContactsModalVisible && (
          <Modal
            title={"US Contacts"}
            data={USContacts?.results}
            modalVisible={USContactsModalVisible}
            setModalVisible={setUSContactsModalVisible}
          />
        )}
      </div>
    </div>
  );
};

export default Problem2;
