import { CSSProperties, ReactNode } from "react";
import {
  CLOSE_MODAL,
  OPEN_AND_SET_MODAL_CONTENT,
} from "../../actions/constants";

interface ModalActionInterface {
  type: string;
  modalContent: ReactNode;
}

interface ModalInterface {
  modalOpened: boolean;
  modalContent: ReactNode;
}

const initialModalState: ModalInterface = {
  modalContent: "",
  modalOpened: false,
};

const modalReducer = (
  state = initialModalState,
  action: ModalActionInterface
) => {
  switch (action.type) {
    case CLOSE_MODAL: {
      return { ...state, modalOpened: false };
    }
    case OPEN_AND_SET_MODAL_CONTENT: {
      return {
        ...state,
        modalOpened: true,
        modalContent: action.modalContent,
      };
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;
