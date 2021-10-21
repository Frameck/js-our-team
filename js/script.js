const inputText = ['Wayne Barnett,Founder & CEO,wayne-barnett-founder-ceo.jpg',
'Angela Caroll,Chief Editor,angela-caroll-chief-editor.jpg',
'Walter Gordon,Office Manager,walter-gordon-office-manager.jpg',
'Angela Lopez,Social Media Manager,angela-lopez-social-media-manager.jpg',
'Scott Estrada,Developer,scott-estrada-developer.jpg',
'Barbara Ramos,Graphic Designer,barbara-ramos-graphic-designer.jpg']

const teamContainer = document.querySelector('.team-container')
const inputButton = document.getElementById('addMemberButton')
teamContainer.innerHTML = ''


// inizializzo un array vuoto
const team = []


// leggo l'anagrafica per ogni membro fornito e lo inserisco nell'array
for (let i = 0; i < inputText.length; i++) {
    const element = inputText[i]
    const memberArray = element.split(',')
    let name = memberArray[0]
    let role = memberArray[1]
    let image = memberArray[2]

    // creo un nuovo user
    createUser(i, name, role, image)

    // creo una card
    generateCardElement(i)
}

console.log(team)



inputButton.addEventListener('click', function() {
    // leggo i valori al click
    const inputName = document.getElementById('name').value
    const inputRole = document.getElementById('role').value
    const inputImage = document.getElementById('image').value
    const teamArrayLength = team.length

    // creo un nuovo user
    createUser(teamArrayLength, inputName, inputRole, inputImage)

    console.log(team)

    teamContainer.innerHTML = ''

    // ricreo tutte le card
    for (let i = 0; i < team.length; i++) {
        generateCardElement(i)
    }
})


// funzione che crea un nuovo user nell'array 'team'
function createUser(key, name, role, image) {
    team[key] = {}
    team[key].name = name
    team[key].role = role
    team[key].image = 'img/' + image
}

// funzione che creaun elemento card per ogni user presente nell'array 'team'
function generateCardElement(j) {
    const member = team[j]

    const cardElement = `<div class="team-card">
        <div class="card-image">
            <img
                src="${member.image}"
                alt="${member.name}"
            />
        </div>
        <div class="card-text">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        </div>
    </div>`

    teamContainer.innerHTML += cardElement
}