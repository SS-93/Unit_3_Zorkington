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
    author: 'SS',
    cohort: 'PTSB-2023',
    startingRoomDescription: 'What you see before you is...',
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'view', 'add to bag', 'pickup',
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}


// Your code here

let gameDetails = {};

const dictionary = {
    locations: ["Metallic Lake", "Eden's Garden", "Alchemists Library", "Chamber of Hearts"],
    exitLocation: [
         { location: "Metallic Lake", exitName: "Icarian Dreams," },
         { location: "Eden's Garden", exitName: "Jacob's Ladder"},
         { location: "Alchemists Library", exitName: "Edward's Lab"},
         { location: "Chamber of Hearts", exitName: "Hollow Bastion"}
    ],

    items: [ "Key", "Map", "Harp", "Obsidian" ],
    itemLocation: [ 
        { item: "Key", itemLocation: "Metallic Lake",},
        {item: "Map", itemLocation: "Chamber of Hearts"},
        {item: "Harp", itemLocation: "Eden's Garden"},
        {item: "Obsidian", itemLocation: "Alchemists Library"} 
    ],
         
itemInteractions: [
    {item: "Map", itemInteractions: "view"},
    {item: "Key", itemInteractions: "pickup"},
    {item: "Harp", itemInteractions: "inspect"},
    {item: "Obsidian", itemInteractions: "add to bag"}

]
    

}


gamdeDetails.items = [];

gameDetails.locations = {};

function createItem(name, description,location)
let item = {
    name: name,
    description: description,
    location: location,
    interact: function() {
        console.log(`You interacted with ${this.name}.`);
    }
};


         let key = createItem ("Key", "A shiny golden key is before you", "Metallic Lake") 
        


    //    let key = {name: "Key",
    //     description: "A shiny golden key is before you",
    //     location: "Metallic Lake",
    //    interact: function() {
    //     console.log( `You interacted with ${this.name}.`);
    //    }
    //    };

    //   key.interact() 
        
        let Map = createItem("Map", "An old map with ancient and mysterious markings", "Chamber of Hearts") 

        let Harp = createItem("Harp", "The sound of a beautiful harp has drawn in you in to the garden", "Eden's Garden")
         let Obsidan = createItem("Obsidian", "Stone to stone and dust dust in the black obsidian the alchemist trusts", "Alchemists Library")
     
    
  

gameDetails.items.push(item);

function createLocation(name, exits, description) {
    gameDetails.locations[name] = {
        exits: exits,
        description: description,
        items: [],

        
    }

    let metallicLake = createLocation("Metallic Lake", "Icarian Dreams", "Your flight and freedom is what is at stake. Take the leap or face your fate. You have arrived at the Metallic Lake" )

    {gameDetails.locations[metallicLake] = 
        {exits: "Icarian Dreams", 
          description: "Your flight and freedom is what is at stake. Take the leap or face your fate. You have arrived at the Metallic Lake",
        items: "Key",
        }
    }

   let chamberOfHearts = createLocation("Chamber of Hearts", "Hollow Bastion", "To unlock this chamber x marks the spot. X is what you feel not something you thought You have now entered the Chamber of Hearts")
   {gameDetails.locations[chamberOfHearts] = 
    {exits: "Hollow Bastion", 
      description: "To unlock this chamber x marks the spot. X is what you feel not something you thought You have now entered the Chamber of Hearts",
    items: "Map"
    }

   }
    let aclhemistsLibrary = createLocation("Alchemists Library", "Edward's Lab", "Goodbye and bye when two becomes one you may one day find out why? Welcome to the Alchemist's Library")
    {gameDetails.locations[aclhemistsLibrary] = 
        {exits: "Edward's Lab", 
          description: "Goodbye and bye when two becomes one you may one day find out why? Welcome to the Alchemist's Library",
        items: "Obsidian"
        }

    let edensGarden = createLocation("Eden's Garden", "Jacob's Ladder", "Who was first deceived the one who ate the apple or the one who believed. Your journey begins at Eden's Garden")
    {gameDetails.locations[edensGarden] = 
        {exits: "Jacob's Ladder", 
          description: "Who was first deceived the one who ate the apple or the one who believed. Your journey begins at Eden's Garden",
        items: "Harp"
        }

    
    }
    function assignItemToLocation (itemName, locationName) {
        if (gameDetails.locations[locationName]) {
            gameDetails.locations[locationName].items.push(itemName);
        }
      let keyLocation =  assignItemToLocation("Key", "Metallic Lake")
      {if (gameDetails.locations ["Metallic Lake"])
    {gameDetails.locations["Metallic Lake"].items.push(keyItem)



    }

    console.log(keyLocation)
}
    let mapLocation = assignItemToLocation("Map", "Chamber of Hearts")
   let harpLocation = assignItemToLocation("Harp", "Eden's Garden")
    let obsidianLocation = assignItemToLocation("Obsidian", "Alchemists Library") 
    
    }
    
    
}


export const domDisplay = (playerInput) => {
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
