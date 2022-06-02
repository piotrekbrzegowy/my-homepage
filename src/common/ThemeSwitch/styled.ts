import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as SunIcon } from "./img/sun-icon.svg";

interface Props {
    moveToRight: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Text = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.textSecondary};
    margin: 0 13px 0 0;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    outline-offset: 8px;
    color: inherit;
`;

export const Box = styled.span`
    display: flex;
    background-color: ${({ theme }) => theme.color.background};
    width: 48px;
    padding: 3px;
    border: 1px solid ${({ theme }) => theme.color.buttonBorder};
    border-radius: 12px;
`;

export const IconWrapper = styled.div<Props>`
    display: flex;
    padding: 3px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.background};
    transition: transform 0.3s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.color.sunIcon};
`;