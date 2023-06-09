import { TypographyCustomOptions } from '../types'

export const defaultFont = {
  fontFamily: 'Source Sans Pro',
  fontSize: 14,
  lineHeight: '1.5em',
  fontWeight: '300',
  letterSpacing: '0.02857em'
}

const typography: TypographyCustomOptions = {
  ...defaultFont,
  defaultFont,
  useNextVariants: true,
  htmlFontSize: 14,
  fontWeightMedium: 300,
  button: {
    ...defaultFont,
    textAlign: 'center',
    fontStretch: 'normal',
    fontStyle: 'normal'
  },
  body: defaultFont
}

export default typography
