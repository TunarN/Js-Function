const personRovshen = {
    firstname: "Rovshan",
    lastname: "Khalilov",
    salary: 140,
};

const personElnur = {
    firstname: "Elnur",
    lastname: "Azizov",
    salary: 150,
};
const personTunar = {
    firstname: "Tunar",
    lastname: "Namazov",
    salary: 300,
};

const personLeman = {
    firstname: "Leman",
    lastname: "Yaqubova",
    salary: 250,
};
const personKamran = {
    firstname: "Kamran",
    lastname: "Huseynov",
    salary: 200,
};

const personEsger = {
    firstname: "Esger",
    lastname: "Esgerov",
    salary: 150,
};
const personFerid = {
    firstname: "Ferid",
    lastname: "Haciyev",
    salary: 190,
};

const personIsmayil = {
    firstname: "Ismayil",
    lastname: "Zeynalov",
    salary: 400,
};
const personTogrul = {
    firstname: "Togrul",
    lastname: "Salmanzade",
    salary: 200,
};

const personNicat = {
    firstname: "Nicat",
    lastname: "Tahmazov",
    salary: 130,
};

const person = [personNicat, personTogrul, personIsmayil, personFerid, personEsger, personKamran, personLeman, personTunar, personElnur, personRovshen]

function myForEachFunc(person,callback){
    for (let i = 0; i < person.length; i++) {
        callback(person[i])
    }
}

function callback(item){
    let avarage = 0;
    let sum = 0;
    sum+=item.salary
    avarage=sum/person.length;
    console.log(avarage);
} 
myForEachFunc(person,callback)

 
