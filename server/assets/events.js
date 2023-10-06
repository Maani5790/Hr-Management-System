const eventEmitter  = require("node:events");

const emitter = new eventEmitter();

emitter.on("order-pizza", (size,flavour)=>{
    console.log(`order recieved size is ${size} ${flavour}`)
})

emitter.emit("order-pizza", "large", "Chicken");