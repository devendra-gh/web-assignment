import React, { useContext } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { Box, MenuItem, FormControl, OutlinedInput } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// ** Internationalization Context
import { IntlContext } from '../../utility/context/Internationalization';
import { useRTL } from '../../utility/hooks';
import { MUIWrapperContext } from '../MUIWrapper';

// ** Vars
const langTitles: { [Key: string]: string } = {
  en: 'USA',
  ae: 'UAE',
  de: 'Germany',
  fr: 'France'
}

// ** lang with directions
export const names: { [Key: string]: string }[] = [
  { lang: "en", direction: "ltr" },
  { lang: "ae", direction: "rtl" },
  { lang: "de", direction: "ltr" },
  { lang: "fr", direction: "ltr" },
];

export const Themes: any = {
  "en": {
    name: 'english',
    palette: { primary: { main: "#1976d2" }, secondary: { main: "#769fc7" } },
  },
  "ae": {
    name: 'arabic',
    palette: { primary: { main: "#665a6f" }, secondary: { main: "#9986a7" } },
  },
  "de": {
    name: 'german',
    palette: { primary: { main: "#303f9f" }, secondary: { main: "#656ea8" } },
  },
  "fr": {
    name: 'frence',
    palette: { primary: { main: "#d32f2f" }, secondary: { main: "#d16d6d" } },
  }
}


const MultipleSelectPlaceholder = () => {
  const intlContext = useContext(IntlContext);
  const [, setIsRtl] = useRTL();
  const { setLocale } = React.useContext(MUIWrapperContext);
  const { updateTheme } = React.useContext(MUIWrapperContext);

  // ** Function to switch Language
  const handleChange = (event: SelectChangeEvent) => {
    const { target: { value } } = event;

    intlContext.switchLanguage(value);
    updateTheme(Themes?.[value]);

    const _locale = names.find((name: { [Key: string]: string }) => name.lang === value);
    setLocale(_locale);

    // ** Update language Direction
    setIsRtl(!!(_locale?.direction === "rtl"));
  };

  return (
    <div>
      <FormControl sx={{ width: 200 }}>
        <Select
          displayEmpty
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={() => (
            <Box display="flex" alignItems="center">
              <ReactCountryFlag countryCode={intlContext.locale === 'en' ? 'us' : intlContext.locale} svg />
              <Box mx={2}>{langTitles[intlContext.locale]}</Box>
            </Box>
          )}
        >
          {
            names.map((name) => (
              <MenuItem key={name?.lang} value={name?.lang}>
                <ReactCountryFlag countryCode={name?.lang === 'en' ? 'us' : name?.lang} svg />
                <Box mx={2}>{langTitles[name?.lang]}</Box>
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelectPlaceholder;
