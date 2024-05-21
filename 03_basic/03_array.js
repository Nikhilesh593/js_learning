const user = {
    username : "hitesh",
    price : 999 ,

    welcomemessage : function(){
        console.log(`${this.username}  , welcome to website`);//this used for acess cureent context
        console.log(this);
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this); //this output {} bczz there is no context in the global

// browser global object is windo obj so tha when we are writttiing this in website windo output commming

function cahi(){
    console.log(this);
    console.log(this.username);
}
cahi()