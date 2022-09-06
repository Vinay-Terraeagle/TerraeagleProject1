import React, { useEffect, useState } from "react";
import styled from "styled-components";

const App = () => {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = "https://api.adviceslip.com/advice";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.slip.advice);
                setAdvice(json.slip.advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);
