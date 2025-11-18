import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login";


export default function Rutas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}