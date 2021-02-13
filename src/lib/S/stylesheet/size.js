export const size = (width = 'auto', height = 'auto') => `
    width:${width};
    height:${height};
`;

export const smSquare = size('20px', '20px');
export const mdSquare = size('30px', '30px');
export const lgSquare = size('40px', '40px');
export const xlSquare = size('60px', '60px');

export const smTwoSquare = size('20px', '40px');
export const mdTwoSquare = size('30px', '60px');
export const lgTwoSquare = size('40px', '80px');
export const xlTwoSquare = size('60px', '120px');

export const padding = (pad) => `
    padding: ${pad};
`;

export const padding2 = padding('2px 2px');
export const padding4 = padding('4px 5px');
export const padding6 = padding('6px 7px');
export const padding8 = padding('8px 9px');
export const padding10 = padding('10px 11px');
export const padding20 = padding('20px 22px');

export const smTwoPadding = padding('10px 20px');
export const mdTwoPadding = padding('20px 40px');
export const lgTwoPadding = padding('30px 60px');
export const xlTwoPadding = padding('40px 80px');
