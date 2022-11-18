export default class Updater{
    componentUpdate={
        add:[],
        update:[],
        del:[],
        lastChange:[]
    }
    getJson(){
        return this.componentUpdate;
    }
    setJson(json){
        this.componentUpdate=json;
    }
}