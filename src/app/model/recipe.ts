export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    public title: string;
    public description: string;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public cover_photo: string;

    constructor(t: string, d: string, ing: Ingredient[], ins: Instruction[], cov: string) {
        this.title = t ;
        this.description = d; 
        this.ingredients = ing; 
        this.instructions = ins;
        this.cover_photo = cov;
    }
}

