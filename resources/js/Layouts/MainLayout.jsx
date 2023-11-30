import React from "react";

export default function MainLayout({children}) {
    return (
        <>
            <div className={"mainlayout"}>

                <div className={"root"}>
                    {children}
                </div>

            </div>
        </>
    );
}
