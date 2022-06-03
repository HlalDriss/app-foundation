// import React from 'react';
// import { Meta, Story } from '@storybook/react';

// import Grid, { GridProps } from 'components/Grid/Grid';

// export default {
//     title: 'Components/Grid',
//     component: Grid
// } as Meta;

// const style = {
//     height: 36,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 700,
//     fontSize: 18,
//     fontFamily: 'Open Sans, sans-serif'
// };

// const colors = ['#267A9E', '#51A885', '#F5A936', '#ED8C37', '#DB7476', '#FBDB5F'];

// const Items = ({ width, name }: { width: number; name: string }) => (
//     <>
//         {colors.map((color, index) => (
//             <div
//                 key={index}
//                 style={{
//                     backgroundColor: color,
//                     width: width,
//                     ...style
//                 }}
//             >
//                 {name} {index + 1}
//             </div>
//         ))}
//     </>
// );

// const Template: Story<GridProps> = (args) => (
//     <div>
//         <Grid {...args}>
//             <Items width={278} name="Input" />
//         </Grid>
//         <div style={{ marginTop: 32 }}>
//             <Grid {...args}>
//                 <Items width={368} name="Card" />
//             </Grid>
//         </div>
//     </div>
// );

// const TemplateGrid: Story<GridProps> = (args) => <Grid {...args}></Grid>;

// export const Default = Template.bind({});

// export const GridInputs = TemplateGrid.bind({});
// GridInputs.args = {
//     children: <Items width={278} name="Input" />
// };

// export const GridCards = TemplateGrid.bind({});
// GridCards.args = {
//     children: <Items width={368} name="Card" />
// };
export {}