import React, { ReactNode } from "react";


interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    btnType: "transparentWhiteborder" | "filledPrimary" | "neutral"
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    gotoSectionId?: string
    children?: ReactNode
}

export class Button extends React.Component<ButtonProps> {
    render(): React.ReactNode {
        const props: ButtonProps = {} as ButtonProps;
        Object.assign(props, this.props);
        props.className = `${props.btnType} button ${props?.className}`;

        const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
            if (props.gotoSectionId)
                window.location.hash = props.gotoSectionId;
    
            if (props.onClick)
                props.onClick(e);
        };

        return <button {...props} onClick={clickHandler}>
            {this.props.children}
        </button>
    }
}
