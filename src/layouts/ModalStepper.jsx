import { useImperativeHandle, useState, forwardRef } from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import HorizontalLinearStepper from "./../components/AssociateStepper";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const ModalStepper = forwardRef((_, ref) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  useImperativeHandle(ref, () => ({
    handleOpen: handleOpen,
  }));

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      maxWidth="md"
      fullWidth={true}
      open={openModal}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Associate technology to a team
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <HorizontalLinearStepper />
      </DialogContent>
    </BootstrapDialog>
  );
});

export default ModalStepper;
