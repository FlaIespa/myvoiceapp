import React, {useState} from 'react';

const voices = [
    {id: 'voice1', name: "Voice 1" , thumbnail:'https://via.placeholder.com/150'},
    {id: 'voice2', name: "Voice 2" , thumbnail:'https://via.placeholder.com/150'},
    {id: 'voice3', name: "Voice 3" , thumbnail:'https://via.placeholder.com/150'},

];

const VoiceList = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredVoices = voices.filter(voice => voice.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    return(
        <div className="p-4">
            <input 
            type="text" 
            placeholder="Search voices"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="w-full p-2 mb-4 border border-gray-300 rounded" />
            <div className="grid grid-cols-2 gap-4">
                {voices.map((voice,index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded">
                        <img src="placeholder.jpg" alt={voice.name} className="w-full h-3 2 object-cover mb-2" />
                        <div> {voice.name}</div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default VoiceList;