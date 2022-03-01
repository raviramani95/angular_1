import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    username: string;
    toggel = false;
    id = [];

    onToggel(){
        this.toggel = true;
        this.id.push(Math.random()*100)
        return this.toggel = false ? false : true;
    }
}