import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { t } from 'i18next';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCanceEdit = useCallback(() => {
    dispatch(profileActions.cancelEdin());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Profile user')} />
      {readonly
        ? (
          <Button
            onClick={onEdit}
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE}
          >
            {t('edit')}
          </Button>
        )
        : (
          <>
            <Button
              onClick={onCanceEdit}
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE_RED}
            >
              {t('cancel')}
            </Button>
            <Button
              onClick={onSave}
              className={cls.saveBtn}
              theme={ButtonTheme.OUTLINE}
            >
              {t('save')}
            </Button>
          </>
        )}
    </div>
  );
};
