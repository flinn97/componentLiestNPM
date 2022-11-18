import {Character} from "../model/myComponents.js"
import BaseClass from "./baseClass";

class Factory {
    operationsFactory;

    factory ={
        character: Character,
        baseClass: BaseClass,

    }
    registerComponents(register){
        this.factory[register.name]= register.component;
    }
    setOperationsFactory(operationsFactory){
        this.operationsFactory= operationsFactory
    }

    getComponent(obj){
        // 
        let key = Object.keys(this.factory).includes(obj.component)? obj.component:"baseClass"
        let comp = new this.factory[key](this.operationsFactory);
        comp.setJson({...comp.getJson(), ...obj.json});
        return comp;      
    }
}
export default Factory;