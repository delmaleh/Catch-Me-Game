const people=[{name:"meir",password:1234},
{name:"bob",password:9876},
{name:"tim",password:4567},
{name:"daniel",password:1234}
]

function matchInfo(name,pass) {
    
   
    return people.some(person => {
        return person.name == name && person.password== pass;
    })
}

export {matchInfo};