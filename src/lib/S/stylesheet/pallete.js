import { pallete as palleteVariables } from '@variable';

export const pallete = { ...palleteVariables };

Object.keys(pallete).forEach((key) => (pallete[key] += ';'));
