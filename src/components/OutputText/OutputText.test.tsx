// import React from 'react';

// import { customRender as render, screen } from 'utils/test-utils';

// import OutputText from './OutputText';

// describe('OutputText', () => {
//     it('renders OutputText with vertical orientation', () => {
//         render(<OutputText label="label" value="Output" data-testid="test-output-text" />);
//         expect(screen.getByTestId('test-output-text')).toHaveStyle('flex-direction: column');
//         expect(screen.getByText('label')).toBeInTheDocument();
//         expect(screen.getByText('Output')).toBeInTheDocument();
//     });

//     it('renders OutputText with horizontal orientation', () => {
//         render(<OutputText label="label" value="Output" orientation="horizontal" data-testid="test-output-text" />);
//         expect(screen.getByTestId('test-output-text')).toHaveStyle('flex-direction: row');
//     });

//     it('should render OutputText with button icon', () => {
//         let array = [1, 2, 3, 4];
//         const mockCallback = jest.fn(() => {
//             array.pop();
//         });
//         render(<OutputText label="label" value="Output" buttonIcon={<div>Svg</div>} onClick={mockCallback} />);
//         expect(screen.getByText('Svg')).toBeInTheDocument();
//         expect(array).toHaveLength(4);
//         screen.getByRole('icon-button').click();
//         expect(array).toHaveLength(3);
//     });

//     it('should display loading state', () => {
//         const { rerender } = render(
//             <OutputText
//                 label="label"
//                 value="Output"
//                 buttonIcon={<div>Svg</div>}
//                 loading
//                 htmlTooltipMode
//                 tooltipTitle="tooltip text"
//             />
//         );
//         expect(screen.queryByText('Output')).not.toBeInTheDocument();
//         rerender(
//             <OutputText
//                 label="label"
//                 value="Output"
//                 orientation="horizontal"
//                 buttonIcon={<div>Svg</div>}
//                 loading={false}
//                 tooltipTitle="tooltip text"
//             />
//         );
//         expect(screen.getByText('Output')).toBeInTheDocument();
//     });

//     it('should format the value', () => {
//         render(<OutputText label="label" value="3000" formatValue={(value) => `${value} €`} />);
//         expect(screen.queryByText('Output')).not.toBeInTheDocument();
//         expect(screen.getByText('3000 €')).toBeInTheDocument();
//     });
// });
export {}