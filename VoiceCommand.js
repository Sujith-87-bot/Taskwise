import React, { useEffect } from "react";

const VoiceCommand = () => {
    useEffect(() => {
        const recognition = new window.SpeechRecognition();
        recognition.onresult = (event) => {
            console.log("Command:", event.results[0][0].transcript);
        };
        recognition.start();
    }, []);

    return <h2>Speak to Add a Task</h2>;
};

export default VoiceCommand;