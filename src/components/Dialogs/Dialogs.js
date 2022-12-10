import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./DialogsElements/DialogElements";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} photo={dialog.photo}/>
  ));

  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={styles.Dialogs}>
      <div className={styles.DialogsNames}>
        <h1 className={styles.name}>Dialogs</h1>
        {dialogsElements}
      </div>
      <div className={styles.DialogsMessages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
