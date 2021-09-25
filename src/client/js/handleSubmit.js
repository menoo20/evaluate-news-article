const { isValidUrl } = require("./checkURL");
const { fetchData } = require("./fetchingURL");
const { useData} = require("./useData")

 const handleSubmit = async (e) => {
     e.preventDefault();
     const articel_URL = document.getElementById("article-url");
     const {value} = articel_URL
     if (isValidUrl(value)){
       console.log("form submitted", value); 
         const data = await fetchData('http://localhost:8081/detect', { url: value });
        
         useData({data});
               

         }else{
            alert('The Url you entered is not valid. Please try again');
          }
     }
 

export { handleSubmit }


