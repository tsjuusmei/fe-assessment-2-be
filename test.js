const users = [
    {
        id: "5e6a2a4f05bc310f94b75ba8",
        name: "Sophie",
        age: 22,
        likedBy: ["5e6ba1bde4b2e66c746a4df7"],
        visitedBy: [""]
    },
    {
        id: "5e6ba1bde4b2e66c746a4df7",
        name: "Guus",
        age: 21,
        likedBy: ["5e6a2a4f05bc310f94b75ba8", "5e6ed3ed1c9d440000983905"],
        visitedBy: ["5e6a2a4f05bc310f94b75ba8", "5e6ed3ed1c9d440000983905", "5e6ed3d91c9d440000983904", "5e6ed43e1c9d440000983906"]
    },
    {
        id: "5e6ed3d91c9d440000983904",
        name: "Lindy",
        age: 20,
        likedBy: [""],
        visitedBy: [""]
    },
    {
        id: "5e6ed3ed1c9d440000983905",
        name: "Layla",
        age: 21,
        likedBy: [""],
        visitedBy: [""]
    },
    {
        id: "5e6ed43e1c9d440000983906",
        name: "Sara",
        age: 19,
        likedBy: [""],
        visitedBy: [""]
    }
]

const id = 5e6a2a4f05bc310f94b75ba8;


console.log(users.filter(data => { return data.id == id })[0])