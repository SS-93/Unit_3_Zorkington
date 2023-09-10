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
    startingRoomDescription: 'What you see before you is... A shiny and shimmering body of water type enter to begin',
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'view', 'add', 'pickup','drop', 'enter', 'move', 'drop'
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
    hasItem(itemName) {
        return this.item.includes(itemName);
    }
}


const lake = new Room( "Lake","A shiny and shimmering body of water you see a lush green field to the east. Now you will see a list of items, one of these items will unlock the next location, type in the correct command and item to unlock the next location", ["key", "stone", "kite"],false,["Garden"]);

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
    hasItem(itemName) {
        return this.item.includes(itemName);
    }

}

const key = new GameItems( "Key", "A shiny golden key", "Lake")
const map = new GameItems( "Key", "An old an archaic map", "chamber")
const obsidian = new GameItems( "Key", "A dark and ominous stone", "Library")
const harp = new GameItems( "Key", "A beautiful harp", "Garden")

// Your code here

let currentPlayerRoom = lake;
let playerInventory = [];



export const domDisplay = (playerInput) => {
    const [command, ...args] = playerInput.split(' ');
    const argument = args.join(' ');

    switch (command) {
            case 'enter':
                if (playerInventory.includes("key")) {
                    currentPlayerRoom = garden; 
                }
            const roomDetails = `
               You have arrived at the ${currentPlayerRoom.name} : ${currentPlayerRoom.getDescription()}
                Items: ${currentPlayerRoom.getItemList()}`
                ;
            return roomDetails;
        case 'view':
            return `Items: ${currentPlayerRoom.getItemList()} \nExits: ${currentPlayerRoom.getExitList()}`;
            case 'pickup':
                if (currentPlayerRoom.hasItem(argument)) {
                    playerInventory.push(argument)

                    const itemIndex = currentPlayerRoom.item.indexOf(argument);
            currentPlayerRoom.item.splice(itemIndex, 1);

                   
                    if (argument === "key") {
                        
                        if (!currentPlayerRoom.exits.includes("Garden")) {
                            currentPlayerRoom.exits.push("Garden");
                        }
                        return `You picked up the ${argument}. Now you can see an exit leading to the Garden.`;
                    }
                    return `You picked up the ${argument}`;
                } else {
                return `There is no ${argument} here to pick up.`;
            }
            case 'move':

            const desiredRoom = allRooms.find(room => room.name === argument);

    if (!desiredRoom) {
        return `The ${argument} room does not exist.`;
    }
                if (currentPlayerRoom.exits.includes(argument)) {
    
                    currentPlayerRoom = allRooms.find(room => room.name === argument);
                
                    if (!currentPlayerRoom.exits.includes(argument)) {
                        return `The ${argument} room cannot be accessed from here.`;
                    }

                    currentPlayerRoom = desiredRoom;
        
                    const roomDetails = `
                        You have arrived at the ${currentPlayerRoom.name} : ${currentPlayerRoom.getDescription()}
                        Items: ${currentPlayerRoom.getItemList()}`;
                    return roomDetails;
                } else {
                    return `The ${argument} room cannot be accessed from here.`;
                }
    
        default:
            return `I don't know how to ${command}`;
    }


}

// next steps set the statement 1) the exits 2 state that you see 3 items before one of these items and commands will unlock the next location type the command and item. when the correct item and command is selected you will move on to the next room 



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




    