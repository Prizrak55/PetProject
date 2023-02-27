import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className } = props;

  return (
    <Modal className={classNames(cls.loginModal, {}, [className])}>
      <LoginForm />
    </Modal>
  );
};
