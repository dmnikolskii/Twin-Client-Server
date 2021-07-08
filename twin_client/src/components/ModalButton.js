import React from 'react'

function ModalButton({onClick, caption}) {
    return (
        <div>
            <button onClick={onClick} className="modal_button reg_label">{caption}</button>            
        </div>
    )
}

export default ModalButton
