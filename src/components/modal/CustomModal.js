import React from 'react';
import {Modal} from "@mui/material";
import Roof from "./modalContents/Roof";
import Planks from "./modalContents/Planks";
import Bench from "./modalContents/Bench";
import Stairs from "./modalContents/Stairs";
import Pallets from "./modalContents/Pallets";
import Formwork from "./modalContents/Formwork";
import Transport from "./modalContents/Transport";

export default function CustomModal({handleClose, modalContent}) {

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {modalContent === "roof" ? <Roof handleClose={handleClose}/>
        :
        modalContent === "planks" ? <Planks handleClose={handleClose}/>
          :
          modalContent === "bench" ? <Bench handleClose={handleClose}/>
            :
            modalContent === "stairs" ? <Stairs handleClose={handleClose}/>
              :
              modalContent === "pallets" ? <Pallets handleClose={handleClose}/>
                :
                modalContent === "formwork" ? <Formwork handleClose={handleClose}/>
                  :
                  modalContent === "transport" ? <Transport handleClose={handleClose}/>
                    :
                    null
      }
    </Modal>
  )
}
