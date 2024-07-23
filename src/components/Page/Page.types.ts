import React from "react";

export interface EPageProps {
    title: string;
    children: React.ReactNode;
    actions?: React.ReactNode;
    isWithBack?: boolean;
    isLoading?: boolean;
}