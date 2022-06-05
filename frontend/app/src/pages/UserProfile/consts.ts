export const ABOUT_SECTION_TITLES = {
  ME: 'О себе:',
  CAR: 'О машине:',
} as const;

export const ABOUT_ME_FIELDS = [
  {
    label: 'Имя',
    placeholder: 'Введите имя',
    type: 'text',
  },
  {
    label: 'Номер телефона',
    placeholder: 'Введите номер телефона',
    type: 'tel',
  },
] as const;

export const ABOUT_CAR_FIELDS = [
  {
    label: 'Марка',
    placeholder: 'Введите название',
    type: 'text',
  },
  {
    label: 'Вместимость',
    placeholder: 'Введите кол-во человек',
    type: 'number',
  },
  {
    label: 'Цвет',
    placeholder: 'Введите цвет',
    type: 'text',
  },
  {
    label: 'Номер',
    placeholder: 'Введите номер машины',
    type: 'text',
  },
] as const;
