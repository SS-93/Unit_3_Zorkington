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
    title: 'Choose your own Adventure',
    desc: 'Welcome to the world of... here are some quick rules & concepts...',
    author: 'Student Name',
    cohort: 'SBPT-2022',
    startingRoomDescription: 'What you see before you is...',
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'view', 'add', 'pickup','drop', 'enter'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

class Room {
    constructor(name, description, item, locked, exits) {
        this.name = name;
        this.description = description;
        this.item = item || [];
        this.locked = locked || false;
        this.exits = exits || [];
    }

    getDescription() {
        return this.description;
    }

    getItemList() {
        return this.item.join(', ');
    }

    getExitList() {
        return this.exits.join(', ');
    }
}

const lake = new Room( "Lake","A shiny and shimmering body of water you see a lush green field to the east", ["key", "stone", "kite"],false,["Library", "Chamber", "Garden"]);

const garden = new Room("Garden","A lush and inviting garden you see dark and mysterious opening to the north",["harp", "gnome", "fairy"],false,["Library", "Chamber", "Lake"]);

const chamber = new Room("Chamber","A dark and mysterious lair you see a brightly lit and archaic building to the North",["cross", "artifact", "tomb"],false,["Lake", "Garden", "Library"]);

const library = new Room( "Library","an inviting and brightly lit library",["book", "manuscript", "globe"],false,["Lake", "Garden", "Chamber"]);

const allRooms = [lake, garden, chamber, library];
allRooms.forEach(room => {
    console.log(`Items in ${room.name}: ${room.getItemList()}`);
});

allRooms.forEach(room => {
    console.log(`Exits from ${room.name}: ${room.getExitList()}`);
});


class GameItems {
    constructor(name, description, location,) {
    this.name = name
    this.description = description
    this.location = location
    }
    interact() {
        console.log(`You interacted with the ${this.name}.`);
    }
}

const key = new GameItems( "Key", "A shiny golden key", "Lake")
const map = new GameItems( "Key", "An old an archaic map", "chamber")
const obsidian = new GameItems( "Key", "A dark and ominous stone", "Library")
const harp = new GameItems( "Key", "A beautiful harp", "Garden")

// Your code here

export const domDisplay = (playerInput) => {
    console.log(playerInput)
    return  playerInput

}
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

    