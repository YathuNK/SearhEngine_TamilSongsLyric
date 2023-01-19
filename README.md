# Search Engine Application for Tamil Song Lyrics
Elasticsearch search application with text corpus of metaphors with 100 unique songs. 

## Example item from the text corpus

```
{
    "album": "Sachin A Billion Dreams",
    "composer": "A. R. Rahman",
    "lyricist": "Madhan Karky",
    "lyrics": "ஆண் : சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n\nஆண் : நீல நெருப்பே\n நீல நெருப்பே\n காலம் உனக்கென\n புறப்பட டா…\n கனவின் எல்லை கடக்க வேண்டும்\n தூக்கம் விழித்தே புறப்பட டா…\n\nஆண் : மனம் போதும் என்ற\n ஒரு சொல்லை\n ஒரு நாளும் ஏற்று கொண்டதில்லை\n பயம் என்ன என்று கண்டதில்லை\n காற்றெங்கும் உன் பெயரே\n எதிர் ஒலிக்குது\n\nஆண் : சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n\nஆண் : வீசும் காற்றும்\n பாதை மாற்றும்\n உந்தன் வேகம் ரகசியமோ\n எதிரி கூட்டம் உனக்கு மட்டும்\n கைகள் தட்டும் அதிசயமோ\n\nஆண் : உன்னை போல யாரும் இங்கு இல்லை\n நீ தோன்ற போவதும் இல்லை\n நீ இந்த மண்ணின் செல்ல பிள்ளை\n காற்றெங்கும் உன் பெயரே\n எதிர் ஒலிக்குது\n\nஆண் : சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n\nஆண் : I was born with the game\n You weren’t born with the same\n I do this for my people\n I don’t do this for the fame\n\nஆண் : I was born with the game\n You weren’t born with the same\n I do this for my people\n I don’t do this for the fame\n\nஆண் : You keep chance\n Keep the change\n Just give me my reign\n And leave me my lane\n And just remember my name\n\nஆண் : சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n\nபெண் : ஆ..ஆஅ..ஆ…ஆஅ..ஆ…ஆ..\n ஆ..ஆஅ..ஆ…ஆஅ..ஆ…ஆ..\n ஹா…ஆ..ஹா…ஆ…ஆஅ…ஆஅ…\n ஹா…ஆ..ஹா…ஆ…ஆஅ…ஆஅ…\n\nஆண் : சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n\nகுழு : {நீயே நீயே\n எங்கும் பேச்சாய்\n நீயே நீயே\n எங்கள் மூச்சாய்} (2)\n\nஆண் : சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…\n சச்சின்… சச்சின்…",
    "metaphors": [
        {
            "interpretation": "ஆண் தன் பயணத்தை எதற்காகவும் நிறுத்துவதில்லை",
            "metaphor": "மனம் போதும் என்ற\n ஒரு சொல்லை\n ஒரு நாளும் ஏற்று கொண்டதில்லை",
            "source": "ஆண்",
            "target": "பொது"
        }
    ],
    "singers": "Sid Sriram, Poorvi Koutish and Nikhita Gandhi",
    "song_name": "Sachin Sachin",
    "year": 2018
}

```