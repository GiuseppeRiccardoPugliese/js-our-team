/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sotto forma di stringhe
*/

const teamNames = document.getElementById('member_team');

//MILESTONE 0:
//Creo il mio array di oggetti (con i dati forniti)
const arrayTeam = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "image": "walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer.jpg"
    }
];

//MILESTONE 1:
//Creo il mio ciclo for per stampare in console nome, ruolo e la stringa della foto per ogni componente del team
for (let i = 0; i < arrayTeam.length; i++) {

    let teamMemberIesimo = arrayTeam[i];
    // console.log(teamMemberIesimo);

    let memberName = teamMemberIesimo.name;
    let memberRole = teamMemberIesimo.role;
    let memberPhotoString = teamMemberIesimo.image;

    console.log(memberName, memberRole, memberPhotoString);
}

//MILESTONE 2:
//Stampare le stesse informazioni su DOM sotto forma di stringhe
for (let key in arrayTeam) {
    console.log(key, arrayTeam[key]);
    teamNames.innerHTML = arrayTeam;
}