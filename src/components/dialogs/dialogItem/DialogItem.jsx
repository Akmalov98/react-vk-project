import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Dialog from "../dialog/Dialog";
import S from "./DialogItem.module.css";

const DialogItem = ({...props}) => {
  let path = "/dialogs/" + props.id;

  console.log(props.messages, 'askjcfkef')

  return (
    <div className={S.dialogItem}>
      <NavLink to={path}>
        <div className={S.dialog}>
          <div className={S.leftBlock}>
            <div className={S.dialogPersonAvatarDiv}>
                <img
                    src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                    alt=""
                    className={S.dialogPersonAvatarImg}
                />
            </div>
            <div className={S.dialogPersonNameDiv}>{props.name}</div>
          </div>
          <div className={S.dialogPersonNameMessageCountDiv}>
            <div className={S.dialogMessageCountDiv}>
              {props.messages.map((message) => (
                <div key={message.id} className={S.dialogMessage}>
                  {message.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;