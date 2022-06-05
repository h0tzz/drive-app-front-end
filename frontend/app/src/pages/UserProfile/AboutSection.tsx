import React from 'react';
import { Box } from '@mui/material';
import { CustomInput } from '@shared/components';

type TAboutSection = {
  title: string;
  fields: readonly { label: string; type: string; placeholder: string }[];
};

const AboutSection: React.FC<TAboutSection> = ({ title, fields = [] }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 7.75,
        mb: 3.75,
      }}
    >
      <Box
        sx={{
          fontFamily: 'Libre Franklin',
          fontWeight: 600,
          pb: 1.5,
        }}
        component="span"
      >
        {title}
      </Box>
      {fields.map(({ label, placeholder, type }, i) => (
        <CustomInput
          key={label}
          sx={{
            mb: i === fields.length - 1 ? 0 : 3.75,
          }}
          placeholder={placeholder}
          label={label}
          type={type}
          variant={'outlined'}
          fullWidth
        />
      ))}
    </Box>
  );
};

export default AboutSection;
