const teamMeber =
    [
        {
            name: "Wayne Barnett",
            role: "Founder & CEO",
            photos:"wayne-barnett-founder-ceo.jpg",
        },
        {
            name: "Angela Caroll",
            role: "Chief Editor",
            photos: "angela-caroll-chief-editor.jpg",
        },
        {
            name: "Walter Gordon",
            role: "Office Manager",
            photos: "walter-gordon-office-manager.jpg",
        },
        {
            name: "Angela Lopez",
            role: "Social Media Manager",
            photos: "angela-lopez-social-media-manager.jpg",
        },
        {
            name: "Scott Estrada",
            role: "Developer",
            photos: "scott-estrada-developer.jpg",
        },
        {
            name: "Barbara Ramos",
            role: "Graphic Designer",
            photos: "barbara-ramos-graphic-designer.jpg",
        },
    ]
const rowElement = document.querySelector(".row")
let meamberElement = ""


for (let i = 0; i < teamMeber.length; i++) {
    const info = teamMeber[i];
    meamberElement +=
        `
    <div class="col">
    <div class="card" style="width: 18rem;">
        <img src="img/${info.photos}" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${info.name}</h5>
          <h6 class="card-text">${info.role}</h6>

        </div>
      </div>
</div>
    `

}
console.log(meamberElement);
rowElement.innerHTML = meamberElement
