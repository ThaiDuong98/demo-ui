import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';

const DialogInform = ({ isOpen, onClose }) => {
    const buttonSx = {
        ...(true && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };

    return (


        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth={'xs'}
        >
            <DialogTitle>

            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <section style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <Fab
                            color="primary"
                            sx={buttonSx}
                            size='small'
                        >
                            <CheckIcon />
                        </Fab>
                        <p style={{textAlign: 'center'}}>Bạn đã thanh toán thành công!</p>
                    </section>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant='contained'>OK</Button>
            </DialogActions>
        </Dialog>
    )
}


export default DialogInform
