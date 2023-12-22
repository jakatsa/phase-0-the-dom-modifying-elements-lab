const mainElement = document.getElementById("main");
mainElement.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
document.body.append(newHeader);

const yourName = "Joe";
newHeader.innerHTML = "Akatsa is the champion";
