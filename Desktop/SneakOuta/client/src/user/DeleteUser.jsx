import React, {useState} from 'react';
import authHelper from '../auth/auth-helper.js';
import auth from '../auth/api-auth.js';
import userApi from './api-user.js';

export default function DeleteUser(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [redirect, setRedirect] = useState(false);
    
    const jwt = authHelper.isAuthenticated();
    
    const deleteUser = () => {
        userApi.remove({t: jwt.token}).then((data) => {
            if (data && data.error) {
                console.log(data.error);
            } else {
                auth.signout(() => console.log("User deleted."));
                setRedirect(true);
            }
        })
    };

    const completeRequest = () => {
        setIsOpen(true);
    };

    const requestClose = () => {
        setIsOpen(false);
    }

    if (redirect) {
        return <Redirect to='/'/>
    }

    return (
        <span>
            <IconButton aria-label="Delete" onClick={completeRequest} color="secondary">
                <DeleteIcon />
            </IconButton>

            <Dialog open={isOpen} onClose={requestClose}>
                <DialogTitle>{"Delete Account"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Confirm to delete your account.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={requestClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={deleteUser} color="secondary" autoFocus="autoFocus">
                        Confirm
                    </Button>
                </DialogActions>
                
            </Dialog>
        </span>
    )
    ;
}