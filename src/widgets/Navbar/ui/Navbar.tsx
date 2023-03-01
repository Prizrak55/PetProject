/* eslint-disable i18next/no-literal-string */
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModaln] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    setIsAuthModaln(false);
  }, []);

  const onShow = useCallback(() => {
    setIsAuthModaln(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout} className={cls.links}>
          {t('sign out')}
        </Button>
        <LoginModal onClose={onClose} isOpen={isAuthModal} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShow} className={cls.links}>
        {t('login')}
      </Button>
      {isAuthModal && <LoginModal onClose={onClose} isOpen={isAuthModal} />}
    </div>
  );
};
