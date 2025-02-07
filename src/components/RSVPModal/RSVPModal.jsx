import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';

import CloseIcon from 'assets/icons/close-icon.svg';

import './RSVPModal.styles.scss';

const RSVPModal = ({ isOpen, setIsOpen, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment} data-testid="Modal">
      <Dialog as="div" data-testid="Modal" className="RSVPModal relative" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="modal-overlay fixed inset-0" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-150"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="modal-container relative min-h-[100px] w-full max-w-[90%] transform overflow-hidden rounded-[10px] p-[30px] transition-all md:max-w-[600px]">
                <div className="close-btn">
                  <img
                    className="duration-250 transition-all hover:opacity-70"
                    src={CloseIcon}
                    alt="Close"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

RSVPModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default RSVPModal;
