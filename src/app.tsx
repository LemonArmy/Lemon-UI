import Component from "vue-class-component";
import * as tsx from 'vue-tsx-support'

@Component
export default class App extends tsx.Component<{}>{
    name:string = 'demo'
    render(){
        return (
            <div>hello world {this.name}</div>
        )
    }
}