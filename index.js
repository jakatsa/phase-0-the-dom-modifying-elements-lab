const mainElement = document.getElementById("main");
mainElement.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
document.body.append(newHeader);

const victory = document.getElementById("victory");
const yourName = "Joe";
victory.textContent = `${yourName} is the champion`;
