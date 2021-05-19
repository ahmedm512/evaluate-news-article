import checkURL from './checkURL';

const handleSubmit = (event) => {
    event.preventDefault();
    const btn = document.getElementById("btn");
    btn.disabled = true;

    let url = document.getElementById('url').value;
    console.log(url);
    
    if(checkURL(url)){
        
        document.getElementById('error').innerHTML = ``;
        fetch("http://localhost:8081/getData", {
                method: "POST",
                mode: 'cors',
                body: JSON.stringify({url}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const {text, score_tag, agreement, subjectivity, confidence, irony } = data;
            document.getElementById('text').innerHTML = `Text: ${text}`;
            document.getElementById('score_tag').innerHTML = `Score Tag: ${score_tag}`;
            document.getElementById('agreement').innerHTML = `Agreement: ${agreement}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${subjectivity}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${confidence}`;
            document.getElementById('irony').innerHTML = `Irony: ${irony}`;
            const btn = document.getElementById("btn");
            btn.disabled = false;
        
        });

    }
    else{
        document.getElementById("btn").disabled = false;
        document.getElementById('error').innerHTML = `Invalid URL`;
        document.getElementById('text').innerHTML = '';
        document.getElementById('score_tag').innerHTML = '';
        document.getElementById('agreement').innerHTML = '';
        document.getElementById('subjectivity').innerHTML = '';
        document.getElementById('confidence').innerHTML ='';
        document.getElementById('irony').innerHTML = '';
    }
    

}

export default handleSubmit;