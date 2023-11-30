import React from 'react'
import {Head} from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout.jsx";
import {Container, Image} from "react-bootstrap";

export default function Home()
{
    return(
        <>
            <Head title="Home" />

            <MainLayout>
                <div className={"page-home"}>
                    <Container className={"text-center"}>
                        <Image src={"./img/Subway-logo.png"} className={"text-center rounded mx-auto d-block img-fluid"} height={400} width={600}></Image>
                        <h2 className={"text-center fw-bolder"}><a className={"link-warning text-decoration-none"} href={"/login"}>Login </a></h2>
                    </Container>
                </div>
            </MainLayout>
        </>
    )
}
