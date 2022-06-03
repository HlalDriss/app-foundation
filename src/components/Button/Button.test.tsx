export {}
// import React from 'react';

// import { customRender as render, screen } from 'utils/test-utils';

// import Button from './Button';

// describe('Button', () => {
//     it('should render all types of Button component', () => {
//         render(
//             <>
//                 <Button buttonType="primary">Primary</Button>
//                 <Button buttonType="secondary">secondary</Button>
//                 <Button buttonType="tertiary">tertiary</Button>
//                 <Button buttonType="iconOnly" icon={<div>svg</div>} />
//             </>
//         );
//         expect(screen.getByText('Primary')).toBeInTheDocument();
//         expect(screen.getByText('secondary')).toBeInTheDocument();
//         expect(screen.getByText('tertiary')).toBeInTheDocument();
//         expect(screen.getByText('svg')).toBeInTheDocument();
//     });

//     it('should render a disabled Button with Tooltip', () => {
//         render(
//             <Button disabled data-testid="primary" buttonType="primary" tooltip="random text">
//                 Primary
//             </Button>
//         );

//         expect(screen.getByTestId('primary')).toHaveClass('Mui-disabled');
//     });

//     it('should fire the callback function', () => {
//         let numbers = [1, 2, 3];
//         const mockCallback: () => void = jest.fn(() => {
//             numbers = [...numbers, 4];
//         });
//         render(
//             <Button onClick={mockCallback} data-testid="primary" buttonType="primary" tooltip="random text">
//                 Primary
//             </Button>
//         );

//         expect(numbers).toEqual([1, 2, 3]);
//         screen.getByTestId('primary').click();
//         expect(numbers).toEqual([1, 2, 3, 4]);
//     });
// });
