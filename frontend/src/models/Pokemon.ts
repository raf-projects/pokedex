export interface Pokemon{
    name: string;
    sprites : {
        front_default: string;
        front_shiny: string;
    };
    moves : [
        {
            move: {
                name : string;
            }
        }
    ];
}