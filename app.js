module.exports = {
   SayHello:function () {
        return 'hello';

    },
    GetSelection:function(){
        var selection = { name:'Chai' , serve:'with Spices'};
        return selection;
    },
    GetMyteam:function(){
        var myTeam = [ 'Galal' , 'khaled' , 'ahmed' ,'Alzhary' ,'Wessam'];
        return myTeam;
    },
    GetName:function(name){
        this.name = name;
    },
    CallMe:function (callback) {
        callback();
    }
}