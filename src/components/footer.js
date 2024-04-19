var footer = document.createElement('footer');

const currentDate = new Date();
const currentFullYear = currentDate.getFullYear();

const dateParagraph = document.createElement('p');
dateParagraph.textContent = `\u00A9 ${currentFullYear} ${brandName}`;

footer.appendChild(dateParagraph);

document.body.appendChild(footer);