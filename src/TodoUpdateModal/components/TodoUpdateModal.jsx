import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "../../core/context/TodoContext";
import { CustomButton } from "../../core/share/CustomButton/components/CustomButton";
import { CustomModal } from "../../core/share/CustomModal/components/CustomModal";
import { useUpdateModal } from "../hooks/useUpdateModal";
import { selectPriority } from "../../core/share/CustomModal/constants/todoModalApp.constants";
import "../../core/share/ModalStyles/styles.css";

export const TodoUpdateModal = () => {

  const {
    openUpdateModal,
    setOpenUpdateModal,
    updateId,
    updateInput: contextUpdateInput,
    updatePriority: contextUpdatePriority,
  } = useContext(TodoContext);

  const { 
    handleItemUpdate,
     handlePriorityUpdate, 
     handleUpdateSubmit,
     updateInputLocal, 
     setUpdateInputLocal,
     updatePriorityLocal, 
     setUpdatePriorityLocal,
    } = useUpdateModal()


  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
 useEffect(() => {
   setUpdateInputLocal(contextUpdateInput);
   setUpdatePriorityLocal(contextUpdatePriority);
 }, [openUpdateModal, contextUpdateInput, contextUpdatePriority]);


  return (
    <>
      <CustomModal 
         title="Edit a task"
         viewHeader={true}
        clickAction={() => setOpenUpdateModal(false)}
      >
        <form>
        <div className="modal__inputContainer">
            <label htmlFor='updateTask' className="modal__label" >Task</label>
            <input
              id='updateTask'
              type="text"
              placeholder="Type your task here..."
              onChange={handleItemUpdate}
              value={updateInputLocal}
              error='error'
              className="modal__input"
              ref={inputRef}
        
            />
      </div>
    <div className="modal__priorityContainer">
    <span className="modal__priority">Priority</span>

    <ul className="priority-list" >
      {selectPriority.map((priorityItem, index) => {
        return (
          <li
            key={index}
            onClick={() => handlePriorityUpdate(priorityItem)}
           className={
            `${priorityItem}-select priority ${updatePriorityLocal === priorityItem ? `${priorityItem}-active` : ""} `
          
          }
          >
            {priorityItem}
          </li>
        );
      })}
    </ul>
  </div>
  <div className="add-item-button-container">
      <CustomButton
        onClick={() =>handleUpdateSubmit(updateId, updateInputLocal, updatePriorityLocal)  }
        value= 'Edit'/>
  </div>
</form>
      </CustomModal>
    </>
  );
};
