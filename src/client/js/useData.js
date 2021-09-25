const useData = ({ data }) => {
    document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`;
  }
  
  module.exports = {
    useData,
  }