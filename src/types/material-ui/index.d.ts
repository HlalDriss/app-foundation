declare module '@mui/material/styles/createPalette' {
    interface Neutral {
        white: string;
        black: string;
        neutral_01: string;
        neutral_02: string;
        neutral_03: string;
        neutral_04: string;
        neutral_05: string;
    }
    interface Interactive {
        interactive_01: string;
        interactive_02: string;
        interactive_01_hover: string;
    }
    interface Supporting {
        supporting_01: string;
        supporting_02: string;
        supporting_03: string;
        supporting_04: string;
        supporting_05: string;
        supporting_06: string;
        supporting_01_hover: string;
    }
    interface Hover {
        hover_01: string;
    }
    interface Project {
        neutral: Neutral;
        interactive: Interactive;
        supporting: Supporting;
        hover: Hover;
        chartColors: string[];
    }

    interface Palette {
        project: Project;
    }
}

declare module '@mui/material/styles/createTypography' {
    interface Typography {
        body: {};
        bodySmall: {};
        title: {};
        subTitle: {};
        h1: {};
        h2: {};
        h3: {};
        button: {};
        body1: {};
        tableHeader: {};
    }
}

export {};
