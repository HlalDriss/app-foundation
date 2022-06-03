import React from 'react';
import {makeStyles} from '@mui/styles';

import clsx from 'clsx';

export interface GridProps {

    /**
     * Grid max columns.
     */
    cols?: number;

    /**
     * Rows  gap between items.
     */
    rowGap?: number;

    /**
     * Columns gap between items.
     */
    columnGap?: number;

    /**
     * Override or extend the styles applied to the component.
     */
    className?: Object;

    /**
     * The minimum column width.
     */
    minColWidth?: number;

    /**
     * Children.
     */
    children?: any;

    /**
     * Defines the justify-items style property.
     */
    justifyItems?: 'flex-start' | 'center' | 'flex-end';

    /**
     * Defines the justify-items style property.
     */
    alignItems?: 'flex-start' | 'center' | 'flex-end';

    /**
     * Override or extend the styles applied to the component.
     */
    style?: Object;
}

const useStyles = makeStyles(() => ({
    gridContainer: ({
        cols = 3,
        rowGap = 8,
        columnGap = 24,
        minColWidth = 368,
        justifyItems = 'flex-start',
        alignItems = 'flex-end'
    }: GridProps) => ({
        display: 'grid',
        rowGap: rowGap,
        columnGap: columnGap,
        gridTemplateColumns: `repeat(auto-fill, minmax(max(${minColWidth}px,(100% - ${
            (cols - 1) * columnGap
        }px)/${cols}),1fr))`,
        justifyItems: justifyItems,
        alignItems: alignItems
    }),
    flex: {
        display: 'flex',
        justifyContent: 'center'
    }
}));
// Grid
export const Grid: React.FC<GridProps> = (props: GridProps) => {
    const { children, className, style } = props;
    const classes = useStyles(props);

    return (
        <div style={style} className={clsx(classes.gridContainer, className)}>
            {children}
        </div>
    );
};

Grid.defaultProps = {
    cols: 3,
    rowGap: 8,
    columnGap: 24,
    minColWidth: 368,
    justifyItems: 'flex-start',
    alignItems: 'flex-start'
};

export default React.memo(Grid);
