import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";

const DeleteItem = ({ targetItem, removeFunc, onClose }) => {
  console.log("delete");
  const FormParent = styled(Paper)`
    background-color: #00000044;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
  `;

  const FormContainer = styled(Paper)`
    background-color: #ffffff;
    border-radius: 15px;
    padding: 1rem 2rem;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;

    .button-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      & > button {
        background-color: #3f3f3f;
        opacity: 50%;
        transition: opacity 0.2s ease-in-out;
        &:hover {
          opacity: 100%;
        }
      }
    }

    #deleteButton {
      background-color: #ff4213;
    }
  `;

  async function removeButtonHandler() {
    await removeFunc(targetItem.id);
    onClose();
  }

  return (
    <>
      <FormParent>
        <FormContainer>
          <h2>Hang on!</h2>
          <p>Are you sure you want to remove {targetItem.name}?</p>
          <div className="button-container">
            <button onClick={removeButtonHandler} id="deleteButton">
              Delete
            </button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </FormContainer>
      </FormParent>
    </>
  );
};

DeleteItem.propTypes = {
  targetItem: PropTypes.object,
  onClose: PropTypes.func,
  removeFunc: PropTypes.func,
};

export default DeleteItem;
