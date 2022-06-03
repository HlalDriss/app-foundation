// import React from 'react';
// import { Meta, Story } from '@storybook/react';

// import { EditIcon, InfoIcon } from 'assets/svg';

// import OutputText from './OutputText';

// export default {
//     title: 'Components/OutputText',
//     component: OutputText
// } as Meta;

// const Template: Story<{}> = () => <OutputText label="label" value="Output" />;
// const LoadingStateTemplate: Story<{}> = () => <OutputText label="label" value="Output" loading />;
// const TemplateHorizontal: Story<{}> = () => <OutputText label="Label" value="Output" orientation="horizontal" />;
// const EditableOrInfoTemplate: Story<{}> = () => (
//     <OutputText
//         label="label"
//         value="Output"
//         orientation="vertical"
//         buttonIcon={<EditIcon />}
//         onClick={() => alert('you clicked the icon button!!')}
//     />
// );
// const WithTooltipTemplate: Story<{}> = () => (
//     <OutputText
//         label="label"
//         value="Output"
//         orientation="vertical"
//         buttonIcon={<EditIcon />}
//         tooltipTitle="Edit"
//         onClick={() => alert('you clicked the icon button!!')}
//     />
// );

// const ValueFormatTemplate: Story<{}> = () => (
//     <OutputText
//         label="Amount"
//         value="33405.32"
//         buttonIcon={<EditIcon />}
//         tooltipTitle="Edit"
//         format="currencyLong"
//         onClick={() => alert('you clicked the icon button!!')}
//     />
// );
// const FormatFunctionTemplate: Story<{}> = () => (
//     <OutputText
//         label="Amount"
//         value="33405.32"
//         buttonIcon={<EditIcon />}
//         tooltipTitle="Edit"
//         formatValue={(value: string) => `${value} euro/month`}
//         onClick={() => alert('you clicked the icon button!!')}
//     />
// );

// const HtmlTooltipTemplate: Story<{}> = () => (
//     <OutputText
//         label="label"
//         value="Output"
//         orientation="vertical"
//         buttonIcon={<InfoIcon />}
//         tooltipTitle={
//             <>
//                 <strong>Tooltip with HTML</strong>
//                 <em>{'And here\'s'}</em> <b>{'some'}</b> <u>{'amazing content'}</u>. {'It\'s very engaging. Right?'}
//             </>
//         }
//         interactiveTooltip
//         htmlTooltipMode
//     />
// );

// export const Default = Template.bind({});
// export const ValueFormat = ValueFormatTemplate.bind({});
// export const Horizontal = TemplateHorizontal.bind({});
// export const EditableOrInfo = EditableOrInfoTemplate.bind({});
// export const WithTooltip = WithTooltipTemplate.bind({});
// export const interactiveHtmlTooltip = HtmlTooltipTemplate.bind({});
// export const LoadingState = LoadingStateTemplate.bind({});
// export const FormatFunction = FormatFunctionTemplate.bind({});
export {}