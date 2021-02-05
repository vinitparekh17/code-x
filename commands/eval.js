module.exports.run=async(bot,message,args) => {
var result=message.split(" ")
        let evaled=eval(result);
        const.log(result)
        message.chennal.send(evaled)
}        
