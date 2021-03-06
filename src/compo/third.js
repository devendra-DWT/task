import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAc, editTodo } from "../slices/todoslice";

export default function Third() {
  const [editFormCntrl, seteditFormCntrl] = useState(false);
  const [edit, setEdit] = useState("");
  const data = useSelector((state) => state.todo.state);
  const toggle = useSelector((state) => state.toggle.state);
  const [editableId, setEditableId] = useState(null);
  const dispatch = useDispatch();

  const handleDelete = (el) => {
    const rand = el.rand;
    dispatch(deleteAc({ rand }));
  };

  const handleEdit = (e, el) => {
    console.log(e.target.id, el.rand);
    const id = e.target.id;

    if (id == el.rand) {
      seteditFormCntrl(true);
      setEditableId(id);
    }
    if (editFormCntrl) {
      dispatch(editTodo({ el, edit }));
      seteditFormCntrl(false);
      setEdit("");
    }
    // hhh
  };

  return (
    <>
      <div>
        {toggle && (
          <div>
            {data.map((el) => {
              return (
                <li key={el.rand}>
                  <span>{el.task}</span>
                  <button onClick={() => handleDelete(el)}>Delete</button>

                  {editableId == el.rand && editFormCntrl && (
                    <input
                      value={edit}
                      onChange={(e) => {
                        setEdit(e.target.value);
                      }}
                      placeholder="Edit"
                      type="text"
                    />
                  )}
                  <button
                    id={el.rand}
                    onClick={(e) => {
                      handleEdit(e, el);
                    }}
                  >
                    Edit
                  </button>
                </li>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
