import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ABOUT_CAR_FIELDS, ABOUT_ME_FIELDS, ABOUT_SECTION_TITLES } from './consts';
import { CustomSwitch, DetailsContainer, CustomButton } from '@core/bricks';
import AboutSection from './AboutSection';

const Input = styled('input')({
  display: 'none',
});
// TODO: добавить поле "мои поездки" перед боольшой аватаркой, если у водителя есть поездки
// TODO: заменить label на компонент из material-ui

const UserProfile: React.FC = () => {
  // TODO: получать инфу с бека
  const [isDriver, setIsDriver] = React.useState<Boolean>(false);

  const onSwitchToggle = React.useCallback((event: Event): void => {
    const target = event?.target as HTMLInputElement;
    const isChecked = target?.checked;
    setIsDriver(isChecked);
  }, []);

  return (
    <DetailsContainer
      headerPanelTitle={'Личный профиль'}
      avatarSrc={''}
      contentAfterAvatar={
        <Box
          sx={{
            mt: 4.75,
          }}
        >
          <label htmlFor="change-photo-button">
            <Input accept="image/*" id="change-photo-button" multiple type="file" />
            <CustomButton variant="contained" color="neutral" component="span">
              Изменить фото
            </CustomButton>
          </label>
        </Box>
      }
    >
      <>
        <AboutSection title={ABOUT_SECTION_TITLES.ME} fields={ABOUT_ME_FIELDS} />
        <Stack
          direction={'row'}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Я водитель</Typography>
          <CustomSwitch onChange={onSwitchToggle} />
        </Stack>
        {isDriver && <AboutSection title={ABOUT_SECTION_TITLES.CAR} fields={ABOUT_CAR_FIELDS} />}
        <CustomButton
          color={'dark'}
          variant="contained"
          sx={{
            mt: 3.75,
          }}
        >
          Сохранить изменения
        </CustomButton>
      </>
    </DetailsContainer>
  );
};

export default UserProfile;
