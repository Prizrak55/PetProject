import { Counter } from 'entities/Counter';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage: FC = () => {
  const { t } = useTranslation();
  return (
    <div style={{ color: 'red' }}>
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
