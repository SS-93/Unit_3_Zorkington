/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'Game Title',
    desc: 'Welcome to the world of... here are some quick rules & concepts...',
    author: 'Student Name',
    cohort: 'SBPT-2022',
    startingRoomDescription: 'What you see before you is a shiny shimmering Lake',
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'view', 'add', 'pickup',
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

 // Rooms constructor and 4 rooms
class room {
    constructor (name, description, item, locked, exits) {
    this.name = name
    this.description = description
    this.item = []
    this.locked = false
    this.exits =[]
    console.log(`You have arrived at ${this.name} use the commands and items to figure out where to go next!`)
    }
     }
     const lake = new room (
        "Lake", 
"A shiny and shimmering body of water",
 ["key", "stone","kite"],
  false,
   ["Library", "Chamber","Garden"]
   );


    // console.log("Items", lake.item) 

   const garden = new room ( 
    "Garden", 
   "A lush and inviting garden",
   ["harp", "gnome", "fairy"],
   false,
   ["Library", "Chamber", "Lake"]
);

// console.log(garden.description) test II |Y|

const chamber = new room (
    "Chamber",
    "A dark and mysterious lair"
    ["cross", "artifact", "tomb"],
    false,
    ["Lake", "Garden", "Library"]
);

// console.log(chamber.item) test III |N|  console did not show list within the array

const library = new room (
    "Library",
    "an inviting and brightly lit library",
    ["book", "manuscript", "globe"],
    false,
    ["Lake", "Garden", "Chamber"]

    

    
);

// console.log(library.name)
// console.log(library.item) Test IV |Y| passed however no array items shown.

// Your code here

//Item constructor
// --------------------------------------------------------------------------//

class item {
constructor (name, description, location, visible, interaction) {
this.name = name
this.descritpion = description
this.location = location
this.visible = true
this.interaction = interaction
console.log (`You have interacted with ${this.name} what would you like to do? Type your command`)
}
}
const key = new item (
    "Key",
    "A shiny a golden key",
    "Lake",
    true,
    "pickup"
);

const map = new item (
    "Map",
    "an old and archaic map",
    "Chamber",
    true,
    "view",
);

const obsidian = new item (
    "Obsidian",
    "A dark and ominous stone",
    "Library",
    true,
    "add"
); 

const harp = new item (

"Harp",
"A beatiful and illustrious musical instrument",
"Garden",
true,
"Inspect"
)

export const domDisplay = (playerInput) => {

   
    console.log(playerInput)
return  playerInput

function itemInteractions
    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 