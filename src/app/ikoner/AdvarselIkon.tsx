import * as React from 'react';

interface IAdvarselIkonProps {
    className: string;
}

const AdvarselIkon: React.FunctionComponent<IAdvarselIkonProps> = ({ className }) => {
    return (
        <svg
            className={className}
            height={24}
            width={24}
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g>
                <path
                    d="m12.199 0h-0.19922c-3.1992 0.039062-6.2383 1.3594-8.5195 3.6406-2.3203 2.3203-3.5195 5.3594-3.4805 8.5586 0.12109 6.6406 5.2812 11.801 11.801 11.801h0.19922c6.7188-0.12109 12.121-5.6016 12-12.199-0.12109-6.6406-5.2812-11.801-11.801-11.801z"
                    fill="#ffb249"
                />
                <path
                    d="m12 5.4414c0.60156 0 1.0781 0.48047 1.0781 1.0781v6.2812c0 0.59766-0.47656 1.0781-1.0781 1.0781s-1.0781-0.48047-1.0781-1.0781v-6.2422c0-0.59766 0.47656-1.1172 1.0781-1.1172z"
                    fill="#3d3731"
                />
                <path
                    d="m12.039 19.359c-0.039062 0-0.039062 0 0 0-0.91797 0-1.6406-0.71875-1.6797-1.5977 0-0.92188 0.71875-1.6406 1.6016-1.6836h0.039062c0.87891 0 1.6016 0.72266 1.6406 1.6016 0 0.92187-0.71875 1.6797-1.6016 1.6797z"
                    fill="#3d3731"
                />
            </g>
        </svg>
    );
};

export { AdvarselIkon };
