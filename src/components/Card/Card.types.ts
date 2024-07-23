import React from "react";

export interface ICardProps {
    title: string | React.ReactNode;
    body: string | React.ReactNode;
    actions?: React.ReactNode;
}