//===================Hooks===================

import { useEffect } from 'react';
import s from './modal.module.css';
import propTypes from 'prop-types';

export default function Modal({ onClose, modalImage }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <img src={modalImage} alt="Large_image" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: propTypes.func,
  modalImage: propTypes.string,
};

//======================Class=================================

// export default class Modal extends Component {
//   // Esc close Modal
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentDidUpdate() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };
//======================

//Bacdrop close Modal

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     return (
//       <div className={s.overlay} onClick={this.handleBackdropClick}>
//         <div className={s.modal}>
//           <img src={this.props.modalImage} alt="Large_image" />
//         </div>
//       </div>
//     );
//   }
// }

// Modal.propTypes = {
//   onClose: propTypes.func,
//   modalImage: propTypes.string,
// };
