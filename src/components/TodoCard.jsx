import React from "react";

import "./TodoCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TodoCard = ({ cardTitle, cardTags, handleDelete, index }) => {
  return (
    <article className="todo_card">
      <p className="todo_text">{cardTitle}</p>
      <div className="todo_card_bottom_line">
        <div className="todo_card_tags">
          {cardTags.map((cardTag, index) => (
            <Tag key={index} tagName={cardTag} selected={true} />
          ))}
        </div>
        <div className="todo_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt=""></img>
        </div>
      </div>
    </article>
  );
};

export default TodoCard;
