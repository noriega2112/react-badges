import React from 'react';
import Modal from './Modal';
import './styles/DeleteBadgeModal.css';
function DeleteBadgeModal(props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose}> 
        <div className="DeleteBadgeModal">
            <h2>Are you sure?</h2>
            <p className="delete__info">You are about to delete this badge.</p>
            <div>
                <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal;