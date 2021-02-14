import { pallete as _pallete } from '@variable';

export const pallete = { ..._pallete };

Object.keys(pallete).forEach((key) => (pallete[key] += ';'));
