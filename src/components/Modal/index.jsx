import React, { useEffect } from 'react'

import Portal from './Portal'

import { Dialog, Overlay } from './styles'

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose()
    }

    window.addEventListener('keydown', onEsc)

    return () => {
      window.removeEventListener('keydown', onEsc)
    }
  }, [onClose])

  if(!open) return null

  function onOverlayClick() {
    onClose();
  }

  function onDalogClick(e) {
    e.stopPropagation()
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDalogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  )
}

export default Modal