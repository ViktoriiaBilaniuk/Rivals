import "./modal.scss";
import { FC, useState } from "react";
import IconClose from "../../assets/icons/x-circle.svg?react";

interface IModal {
  isModalOpen?: boolean;
  children: JSX.Element | JSX.Element[];
  onClose?: () => void;
}

export const Modal: FC<IModal> = (props) => {
  const { isModalOpen = false, onClose, children } = props;

  const [isOpen, setIsOpen] = useState(isModalOpen);

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal__wrapper">
            <div className="modal__content">
              <button
                className="close-btn"
                onClick={() => onClose ?? setIsOpen(false)}
              >
                <IconClose></IconClose>
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
