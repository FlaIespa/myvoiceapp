import React, {useState} from 'react';

const MainContent = () => {
    const voices = [
        {id: 'voice1', name:'Voice 1'},
        {id: 'voice2', name:'Voice 2'},
        {id: 'voice3', name:'Voice 3'},

    ]
    const [text, setText] = useState('')
    const[selectedVoice, setSelectedVoice] = useState('')
    const[isLoading, setIsLoading] = useState(false);

    const handleGenerate = () => {

        // if (!text || !selectedVoice) {
        //     alert('Please enter text and select a voice')
        //     return;
        // }

        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            alert('Voice generated!'); // simulates the API Call
        }, 2000);
    };

    return(
        <main className="p-4">
            <div className="mb-4">
                <input type="text" placeholder="Enter text" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
                <select className="w-full p-2 border border-gray-300-rounded">
                    <option value ="" disabled selected>Select an option</option>
                    {voices.map((voice) => (
                        <option key={voice.id} value={voice.id}>
                            {voice.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <button onClick = {handleGenerate} className="bg-blue-600 text-white p-2 rounded"> Generate </button>
            </div>
            <div>
                <audio controls>
                    <source src="placeholder.mp3" type="audio.mpeg" />
                    Your browser does not support the audio type
                </audio>
            </div>
        </main>
    );
};

export default MainContent;