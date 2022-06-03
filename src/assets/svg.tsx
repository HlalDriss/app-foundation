import React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import './svg.css';

const makeIcon = (value: any, viewBox?: string) => {
    const Icon = ({
        size = 24,
        color = 'inherited',
        onClick = () => null,
        transform = '',
        className,
        ...otherProps
    }: any) => {
        const contains = typeof value === 'string' ? <path d={value} /> : value;

        return (
            <svg
                className={clsx('SvgIcon-root', className)}
                viewBox={viewBox ? viewBox : '0 0 24 24'}
                height={size}
                width={size}
                focusable="false"
                aria-hidden="true"
                color={color}
                onClick={onClick}
                transform={transform}
                {...otherProps}
            >
                {contains}
            </svg>
        );
    };
    Icon.displayName = 'Icon';
    Icon.propTypes = {
        size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        color: PropTypes.string,
        onClick: PropTypes.any,
        transform: PropTypes.any,
        className: PropTypes.string
    };

    return React.memo(Icon);
};

export const ProfileAccount = makeIcon(
    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'
);
export const FileOpenIcon = makeIcon(
    'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H15v-8h5V8l-6-6zm-1 7V3.5L18.5 9H13zm4 12.66V16h5.66v2h-2.24l2.95 2.95-1.41 1.41L19 19.41v2.24h-2z'
);
export const HelpIcon = makeIcon(
    'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z'
);
export const ExtensionsIcon = makeIcon(
    'M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z'
);
export const AddIcon = makeIcon('M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z');
export const AddBoxIcon = makeIcon(
    'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-8-2h2v-4h4v-2h-4V7h-2v4H7v2h4z'
);
export const PersonSmallIcon = makeIcon(
    'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z'
);
export const CloseIcon = makeIcon(
    'M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z'
);
export const DemandIcon = makeIcon('M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z');
export const ContractIcon = makeIcon(
    'M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z'
);
export const ContactIcon = makeIcon(
    'M13.17,4L18,8.83V20H6V4H13.17 M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2L14,2z M12,14 c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C10,13.1,10.9,14,12,14z M16,17.43c0-0.81-0.48-1.53-1.22-1.85 C13.93,15.21,12.99,15,12,15c-0.99,0-1.93,0.21-2.78,0.58C8.48,15.9,8,16.62,8,17.43V18h8V17.43z'
);
export const BusinessIcon = makeIcon(
    'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z'
);
export const PaymentIcon = makeIcon('M4 6h16v2H4zm0 6h16v6H4z');
export const DistributorIcon = makeIcon(
    <>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.22 0 .41.1.55.25.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5.14-.15.33-.25.55-.25zM19 19H5V5h14v14zM12 6c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 6.47V18h12v-1.53c0-2.5-3.97-3.58-6-3.58s-6 1.07-6 3.58zM8.31 16c.69-.56 2.38-1.12 3.69-1.12s3.01.56 3.69 1.12H8.31z" />
    </>
);
export const SupervisorAccountIcon = makeIcon(
    'M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm.05 10H4.77c.99-.5 2.7-1 4.23-1 .11 0 .23.01.34.01.34-.73.93-1.33 1.64-1.81-.73-.13-1.42-.2-1.98-.2-2.34 0-7 1.17-7 3.5V19h7v-1.5c0-.17.02-.34.05-.5zm7.45-2.5c-1.84 0-5.5 1.01-5.5 3V19h11v-1.5c0-1.99-3.66-3-5.5-3zm1.21-1.82c.76-.43 1.29-1.24 1.29-2.18C19 9.12 17.88 8 16.5 8S14 9.12 14 10.5c0 .94.53 1.75 1.29 2.18.36.2.77.32 1.21.32s.85-.12 1.21-.32z'
);
export const ModeEditIcon = makeIcon(
    'M3,21l3.75,0L17.81,9.94l-3.75-3.75L3,17.25L3,21z M5,18.08l9.06-9.06l0.92,0.92L5.92,19L5,19L5,18.08z'
);
export const ExpandMoreIcon = makeIcon('M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z');
export const ExpandLessIcon = makeIcon('M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z');
export const SupervisedUserCircleIcone = makeIcon(
    'M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6.5 2c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2.01.89-2 2 0 1.11.89 2 2 2zM11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM5.84 17.12c.68-.54 2.27-1.11 3.66-1.11.07 0 .15.01.23.01.24-.64.67-1.29 1.3-1.86-.56-.1-1.09-.16-1.53-.16-1.3 0-3.39.45-4.73 1.43-.5-1.04-.78-2.2-.78-3.43 0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37-1-.59-2.36-.87-3.24-.87-1.52 0-4.5.81-4.5 2.7v2.78c-2.27-.13-4.29-1.21-5.66-2.86z'
);
export const CreditCardIcon = makeIcon(
    'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'
);
export const DoneIcon = makeIcon('M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z');
export const StarIcon = makeIcon(
    'M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z'
);
export const EmailIcon = makeIcon(
    'M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z'
);
export const PhoneIcon = makeIcon(
    'M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z'
);
export const AccountBalanceIcon = makeIcon(
    'M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z'
);
export const AlternateEmailIcon = makeIcon(
    'M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'
);
export const ContactPhoneIcon = makeIcon(
    'M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zm0 16H2V5h20v14zm-2.99-1.01L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2h1.64L21 8l-1.99-1.99c-1.31.98-2.28 2.37-2.73 3.99-.18.64-.28 1.31-.28 2s.1 1.36.28 2c.45 1.61 1.42 3.01 2.73 3.99zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.59c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V18h12v-1.41zM5.48 16c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1H5.48z'
);
export const FmdGoodIcon = makeIcon(
    'M12,12c-1.1,0-2-0.9-2-2s0.9-2,2-2c1.1,0,2,0.9,2,2S13.1,12,12,12z M18,10.2C18,6.57,15.35,4,12,4s-6,2.57-6,6.2 c0,2.34,1.95,5.44,6,9.14C16.05,15.64,18,12.54,18,10.2z M12,2c4.2,0,8,3.22,8,8.2c0,3.32-2.67,7.25-8,11.8 c-5.33-4.55-8-8.48-8-11.8C4,5.22,7.8,2,12,2z'
);

export const FavoriteIcon = makeIcon(
    'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'
);

export const EuroIcon = makeIcon(
    'M15,18.5c-2.51,0-4.68-1.42-5.76-3.5H15l1-2H8.58c-0.05-0.33-0.08-0.66-0.08-1s0.03-0.67,0.08-1H15l1-2H9.24 C10.32,6.92,12.5,5.5,15,5.5c1.61,0,3.09,0.59,4.23,1.57L21,5.3C19.41,3.87,17.3,3,15,3c-3.92,0-7.24,2.51-8.48,6H3l-1,2h4.06 C6.02,11.33,6,11.66,6,12s0.02,0.67,0.06,1H3l-1,2h4.52c1.24,3.49,4.56,6,8.48,6c2.31,0,4.41-0.87,6-2.3l-1.78-1.77 C18.09,17.91,16.62,18.5,15,18.5z'
);

export const DoubleArrowRightIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        focusable="false"
        aria-hidden="true"
        className="SvgIcon-root"
    >
        <g>
            <g>
                <polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12" />
                <polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12" />
            </g>
        </g>
    </svg>
);
export const DoubleArrowLeftIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        focusable="false"
        aria-hidden="true"
        className="SvgIcon-root"
    >
        <g>
            <g>
                <polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12" transform="rotate(180, 12, 12)" />
                <polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12" transform="rotate(180, 12, 12)" />
            </g>
        </g>
    </svg>
);
export const OpenInNewWindowIcon = makeIcon(
    'M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'
);
export const OpenInNewTabIcon = makeIcon(
    'M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z'
);
export const SearchIcon = makeIcon(
    'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'
);
export const EyeIcon = makeIcon(
    'M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 000 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 000-1zm-9.87 4a3.5 3.5 0 113.5-3.5 3.5 3.5 0 01-3.5 3.5z'
);
export const EyeNoFillIcon = makeIcon(
    'M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z'
);
export const LeftChevronIcon = makeIcon(
    'M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z'
);
export const RightChevronIcon = makeIcon(
    'M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z'
);
export const RightArrow = makeIcon('M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z');
export const LeftArrow = makeIcon('M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z');
export const ThreeDots = makeIcon(
    'M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'
);
export const Bell = makeIcon(
    'M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z'
);
export const PlusSquare = makeIcon(
    'M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2zm2-10h4V7h2v4h4v2h-4v4h-2v-4H7v-2z'
);
export const History = makeIcon(
    'M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z'
);
export const CrossIcon = makeIcon(
    'M10 1.6a8.4 8.4 0 100 16.8 8.4 8.4 0 000-16.8zm4.789 11.461L13.06 14.79 10 11.729l-3.061 3.06L5.21 13.06 8.272 10 5.211 6.939 6.94 5.211 10 8.271l3.061-3.061 1.729 1.729L11.728 10l3.061 3.061z'
);
export const RightActiveArrow = makeIcon(
    'M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z'
);
export const PencilIcon = makeIcon(
    'M8.707 19.707L18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 00-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 000-2.828L19.414 3a2 2 0 00-2.828 0L15 4.586 19.414 9 21 7.414z'
);
export const MoreVert = makeIcon(
    'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
);
export const CircleFull = () => (
    <svg className="SvgIcon-root" viewBox="0 0 24 24" height="24px" width="24px">
        <circle cx="12" cy="12" r="8" />
    </svg>
);
export const NotificationBellAdd = makeIcon(
    'M16,14v3H8v-7c0-2.21,1.79-4,4-4c0.85,0,1.64,0.26,2.28,0.72l1.43-1.43c-0.64-0.51-1.39-0.88-2.21-1.09V3.5 C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5v0.7C7.91,4.86,6,7.21,6,10v7H4v2h16v-2h-2v-3H16z M12,22c1.1,0,2-0.9,2-2h-4 C10,21.1,10.9,22,12,22z M24,8h-3V5h-2v3h-3v2h3v3h2v-3h3V8z'
);
export const MaterialEye = makeIcon(
    'M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z'
);
export const FilterIcon = makeIcon('M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z');
export const DeleteIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="SvgIcon-root"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    </svg>
);
export const ContactsIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="SvgIcon-root"
        height="16px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
    >
        <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none" />
        <path d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z" />
    </svg>
);
export const SquaredAddIcon = makeIcon(
    'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'
);
export const ExpandMore = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" />
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
);
export const UpDownArrow = makeIcon(
    'M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z',
    '0 0 256 512'
);
export const AddFolderIcon = makeIcon(
    'M86.016 24.091H49.313c-1.979-2.37-4.013-4.865-4.541-5.624a3.18 3.18 0 00-2.875-1.808h-14.53c-.964 0-1.875.435-2.479 1.185l-5.021 6.247h-5.884a5.492 5.492 0 00-5.484 5.484v48.284a5.49 5.49 0 005.484 5.482h72.032a5.49 5.49 0 005.484-5.482V29.575a5.49 5.49 0 00-5.483-5.484zm-4.473 39.195a.649.649 0 01-.195.465.651.651 0 01-.464.194h-8.779v8.78c0 .174-.07.341-.193.466a.666.666 0 01-.465.193h-6.15a.66.66 0 01-.658-.659v-8.78h-8.78a.656.656 0 01-.465-.194.654.654 0 01-.193-.465v-6.149a.678.678 0 01.658-.659h8.779v-8.78c0-.363.294-.658.659-.658l6.15.001c.364 0 .659.293.659.658v8.778h8.78c.364 0 .659.294.659.659l-.002 6.15z',
    '0 0 100 100'
);
export const ArrowDropUpIcon = makeIcon(
    <>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 14l5-5 5 5z" />
    </>
);
export const ArrowDropDownIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="SvgIcon-root"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10l5 5 5-5z" />
    </svg>
);

export const BlankIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="SvgIcon-root" height="24px" width="24px" />
);
export const UnlinkIcon = makeIcon(
    'M14.39 11L16 12.61V11zM17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.27-.77 2.37-1.87 2.84l1.4 1.4C21.05 15.36 22 13.79 22 12c0-2.76-2.24-5-5-5zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4.01 1.41-1.41L3.41 2.86 2 4.27z'
);

export const UnlockRessourceIcon = makeIcon(
    'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'
);

export const FindReplaceIcon = makeIcon(
    'M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z'
);

export const DeleteIconV2 = makeIcon('M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z');

export const FolderOutlinedIcon = makeIcon(
    'M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z'
);

export const ShieldIcon = makeIcon(
    'M12,2L4,5v6.09c0,5.05,3.41,9.76,8,10.91c4.59-1.15,8-5.86,8-10.91V5L12,2z M18,11.09c0,4-2.55,7.7-6,8.83 c-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25l6,2.25V11.09z'
);

export const InfoIcon = makeIcon(
    'M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
);

export const WarningIcon = makeIcon('M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z');

export const ErrorIcon = makeIcon(
    'M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
);

export const DeleteIconOutlined = makeIcon(
    'M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'
);

export const PaymentsIcon = makeIcon(
    'M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z'
);

export const CalendarIcon = makeIcon(
    'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z'
);

export const EditIcon = makeIcon(
    'M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z'
);

export const CategoryIcon = makeIcon(
    <>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2l-5.5 9h11z" />
        <circle cx="17.5" cy="17.5" r="4.5" />
        <path d="M3 13.5h8v8H3z" />
    </>
);

export const PdfIcon = makeIcon(
    'M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z'
);

export const RefreshIcon = makeIcon(
    'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
);

export const FilterArrowIcon = makeIcon(
    'M12 18.88A1 1 0 0 1 11.71 19.71A1 1 0 0 1 10.3 19.71L6.3 15.71A1 1 0 0 1 6 14.87V9.75L1.21 3.62A1 1 0 0 1 1.38 2.22A1 1 0 0 1 2 2H16A1 1 0 0 1 16.62 2.22A1 1 0 0 1 16.79 3.62L12 9.75V18.88M4 4L8 9.06V14.58L10 16.58V9.05L14 4M13 16L18 21L23 16Z'
);

export const ProductIcon = makeIcon(
    <>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
    </>
);

export const QuestionIcon = makeIcon(
    <>
        <g>
            <rect fill="none" height="24" width="24" />
        </g>
        <g>
            <path d="M11.07,12.85c0.77-1.39,2.25-2.21,3.11-3.44c0.91-1.29,0.4-3.7-2.18-3.7c-1.69,0-2.52,1.28-2.87,2.34L6.54,6.96 C7.25,4.83,9.18,3,11.99,3c2.35,0,3.96,1.07,4.78,2.41c0.7,1.15,1.11,3.3,0.03,4.9c-1.2,1.77-2.35,2.31-2.97,3.45 c-0.25,0.46-0.35,0.76-0.35,2.24h-2.89C10.58,15.22,10.46,13.95,11.07,12.85z M14,20c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-1.1,0.9-2,2-2 S14,18.9,14,20z" />
        </g>
    </>
);

export const AccountCircle = makeIcon(
    <>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
    </>
);

export const CheckList = makeIcon(
    <>
        <g>
            <rect fill="none" height="24" width="24" />
        </g>
        <g>
            <g>
                <rect height="2" width="11" x="3" y="10" />
                <rect height="2" width="11" x="3" y="6" />
                <rect height="2" width="7" x="3" y="14" />
                <polygon points="20.59,11.93 16.34,16.17 14.22,14.05 12.81,15.46 16.34,19 22,13.34" />
            </g>
        </g>
    </>
);

export const ColumnSortArrowDown = makeIcon(
    <>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7 10l5 5 5-5H7z" />
    </>
);

export const PrintIcon = makeIcon(
    <>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
    </>
);

export const RenewIcon = makeIcon(
    <>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
    </>
);

export const EmptyChartData = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="256.212" height="246.159" viewBox="0 0 256.212 246.159">
        <g id="Empty_State" data-name="Empty State" transform="translate(-93.931 -768.999)">
            <g id="no_results" data-name="no results" transform="translate(111.002 771)">
                <path
                    id="Tracé_3611"
                    data-name="Tracé 3611"
                    d="M275.13,107.9C309.8,164.083,291.829,237.415,235,271.7S103.985,288.2,69.312,232.02,94.24,155,109.442,68.228C115.451,16.427,240.458,51.715,275.13,107.9Z"
                    transform="translate(-53.641 -44.992)"
                    fill="#f5f7fa"
                />
                <g id="Content" transform="translate(0 -25)">
                    <g id="Chart" transform="translate(-15 18)">
                        <g id="Rectangle_2615" data-name="Rectangle 2615" opacity="0">
                            <rect
                                id="Rectangle_2615-2"
                                data-name="Rectangle 2615"
                                width="145"
                                height="141"
                                transform="translate(64 58)"
                                fill="#fff"
                            />
                            <path
                                id="Rectangle_2615_-_Contour"
                                data-name="Rectangle 2615 - Contour"
                                d="M1,1V140H144V1H1M0,0H145V141H0Z"
                                transform="translate(64 58)"
                                fill="#707070"
                            />
                        </g>
                        <g id="Draw" transform="translate(15.001 -10)">
                            <g id="Groupe_6335" data-name="Groupe 6335" transform="translate(-12 4)">
                                <rect
                                    id="Rectangle_2616"
                                    data-name="Rectangle 2616"
                                    width="102"
                                    height="5"
                                    rx="2.5"
                                    transform="translate(82 185)"
                                    fill="#f5f7fa"
                                />
                                <path
                                    id="Rectangle_2616_-_Contour"
                                    data-name="Rectangle 2616 - Contour"
                                    d="M2.5,0h97a2.5,2.5,0,0,1,0,5H2.5a2.5,2.5,0,0,1,0-5Z"
                                    transform="translate(82 185)"
                                    fill="#d9e2ec"
                                />
                                <path
                                    id="Rectangle_2617"
                                    data-name="Rectangle 2617"
                                    d="M9,5A4,4,0,0,0,5,9v6a4,4,0,0,0,4,4H59a4,4,0,0,0,4-4V9a4,4,0,0,0-4-4H9M9,0H59a9,9,0,0,1,9,9v6a9,9,0,0,1-9,9H9a9,9,0,0,1-9-9V9A9,9,0,0,1,9,0Z"
                                    transform="translate(88 179) rotate(-90)"
                                    fill="#d9e2ec"
                                />
                                <path
                                    id="Rectangle_2618"
                                    data-name="Rectangle 2618"
                                    d="M9,5A4,4,0,0,0,5,9v6a4,4,0,0,0,4,4H51a4,4,0,0,0,4-4V9a4,4,0,0,0-4-4H9M9,0H51a9,9,0,0,1,9,9v6a9,9,0,0,1-9,9H9a9,9,0,0,1-9-9V9A9,9,0,0,1,9,0Z"
                                    transform="translate(122 179) rotate(-90)"
                                    fill="#d9e2ec"
                                />
                                <path
                                    id="Rectangle_2619"
                                    data-name="Rectangle 2619"
                                    d="M9,5A4,4,0,0,0,5,9v6a4,4,0,0,0,4,4H70a4,4,0,0,0,4-4V9a4,4,0,0,0-4-4H9M9,0H70a9,9,0,0,1,9,9v6a9,9,0,0,1-9,9H9a9,9,0,0,1-9-9V9A9,9,0,0,1,9,0Z"
                                    transform="translate(156 179) rotate(-90)"
                                    fill="#d9e2ec"
                                />
                            </g>
                            <g id="Groupe_6337" data-name="Groupe 6337" transform="translate(-1 13)">
                                <rect
                                    id="Rectangle_2621"
                                    data-name="Rectangle 2621"
                                    width="4"
                                    height="23.683"
                                    transform="translate(118.493 89.887) rotate(108)"
                                    fill="#d9e2ec"
                                />
                                <path
                                    id="Ellipse_680"
                                    data-name="Ellipse 680"
                                    d="M7,3a4,4,0,1,0,4,4A4,4,0,0,0,7,3M7,0A7,7,0,1,1,0,7,7,7,0,0,1,7,0Z"
                                    transform="translate(116 87)"
                                    fill="#d9e2ec"
                                />
                                <path
                                    id="Ellipse_681"
                                    data-name="Ellipse 681"
                                    d="M7,3a4,4,0,1,0,4,4A4,4,0,0,0,7,3M7,0A7,7,0,1,1,0,7,7,7,0,0,1,7,0Z"
                                    transform="translate(148 70)"
                                    fill="#d9e2ec"
                                />
                                <path
                                    id="Rectangle_2623"
                                    data-name="Rectangle 2623"
                                    d="M2,0H2A2,2,0,0,1,4,2V13.471a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V2A2,2,0,0,1,2,0Z"
                                    transform="translate(174.498 79.246) rotate(104)"
                                    fill="#d9e2ec"
                                />
                                <rect
                                    id="Rectangle_2624"
                                    data-name="Rectangle 2624"
                                    width="4"
                                    height="25.313"
                                    transform="translate(149.049 78.202) rotate(59)"
                                    fill="#d9e2ec"
                                />
                                <path
                                    id="Rectangle_2620"
                                    data-name="Rectangle 2620"
                                    d="M0,0H4A0,0,0,0,1,4,0V12.052a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V0A0,0,0,0,1,0,0Z"
                                    transform="translate(84.277 84.98) rotate(59)"
                                    fill="#d9e2ec"
                                />
                                <path
                                    id="Ellipse_679"
                                    data-name="Ellipse 679"
                                    d="M7,3a4,4,0,1,0,4,4A4,4,0,0,0,7,3M7,0A7,7,0,1,1,0,7,7,7,0,0,1,7,0Z"
                                    transform="translate(83 77)"
                                    fill="#d9e2ec"
                                />
                            </g>
                        </g>
                    </g>
                </g>
                <path
                    id="Tracé_3612"
                    data-name="Tracé 3612"
                    d="M33.589,313.813a115.533,115.533,0,0,1-8.426-16.536A89.763,89.763,0,0,1,20.2,280.795a82.283,82.283,0,0,1-1.526-16.673,90.946,90.946,0,0,1,1.863-17.083c3.709-18.256,13.77-33.4,26.508-52.575.893-1.345,1.816-2.734,2.745-4.136a40.495,40.495,0,0,1,2.731-4.29c1.782-2.534,3.465-4.927,5.679-11.495l3.79,1.278c-2.4,7.117-4.33,9.863-6.2,12.518a36.387,36.387,0,0,0-2.524,3.965l-.044.081-.051.077c-.947,1.43-1.888,2.847-2.8,4.217-6.416,9.658-11.957,18-16.423,26.258-4.85,8.969-7.868,16.881-9.5,24.9a80.763,80.763,0,0,0-.332,32.191c2.057,10.5,6.271,20.868,12.882,31.7Z"
                    transform="translate(-35.736 -114.27)"
                    fill="#d9e2ec"
                />
            </g>
        </g>
    </svg>
);

export const CheckCircle = makeIcon(
    <>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
    </>
);

export const LockIcon = makeIcon(
    <>
        <g fill="none">
            <path d="M0 0h24v24H0V0z" />
            <path d="M0 0h24v24H0V0z" opacity=".87" />
        </g>
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
    </>
);
