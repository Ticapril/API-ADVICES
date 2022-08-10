function getAdvice(id){
    axios.get(`https://api.adviceslip.com/advice/${id}`).then(function(response) {
        console.log(response);
        const adviceText = response.data.slip.advice;
        
    }).catch(function(error) {
        console.log(error);
    })
}
