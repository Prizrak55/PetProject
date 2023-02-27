/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModaln] = useState(false);

  const onClose = useCallback(() => {
    setIsAuthModaln(false);
  }, []);

  const onShow = useCallback(() => {
    setIsAuthModaln(true);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShow} className={cls.links}>
        {t('login')}
      </Button>
      <LoginModal onClose={onClose} isOpen={isAuthModal} />
    </div>
  );
};
