const URL = "https://cat-fact.herokuapp.com/facts/umair";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


// ASYNC AWAIT
const getFacts = async ()=>{
    try{
        console.log("getting data....")
        let response = await fetch(URL);
        console.log(response);
        if(!response.ok){
            throw new Error(`HTTP ERROR: ${response.status}`)
        }
        let data = await response.json();
       factPara.innerText = data[1].text;
    } catch(error){
        console.error("Error fetching data:", error);
        factPara.innerText = "Failed to load fact.";
    }
   
}


// promise chainig
// function getFacts(){
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data)
//         factPara.innerText = data[1].text;
//     })
    
// }



btn.addEventListener("click",getFacts)