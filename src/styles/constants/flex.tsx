export const flex = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexStart: `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  flexBetweenCenter: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexColumnCenter: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
} as const
