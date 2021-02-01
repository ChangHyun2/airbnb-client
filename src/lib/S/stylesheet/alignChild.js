export const flex = `
    display:flex;
`;
export const row = `
    ${flex}
    align-items:center;
`;
export const rowCenter = `
    ${row}
    justify-content:center;
`;

export const rowSpaceBetween = `
    ${row}
    justify-content:space-between;
`;

export const col = `
    ${row}
    flex-direction:column;
`;
export const colCenter = `
    ${col}
    justify-content:center;
`;
export const colSpaceBetween = `
    ${col}
    justify-content:space-between;
`;
