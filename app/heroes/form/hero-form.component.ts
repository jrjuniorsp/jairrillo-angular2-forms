import { Component } from "@angular/core";

import { Hero } from "../../shared/heroes/hero";

@Component({
    selector: "hero-form",
    templateUrl: "app/heroes/form/hero-form.html"
})

export class HeroFormComponent {
    
    powers = [ 'Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer' ];
    
    submitted = false;
    active = true;
    
    hero = new Hero(18, "Dr IQ", this.powers[0], "Chick Overstreet");
    
    onSubmit() {
        this.submitted = true;
    }
    
    newHero() {
        this.hero = new Hero(1,"","");
        this.active = false;
        setTimeout(()=> this.active=true, 0);        
    }
    
    get diagnostic() {
        return JSON.stringify(this.hero);
    }
    
}