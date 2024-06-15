interface PopulationValue{
    year: number;
    value:number;
    rate?: number;

}

interface PopulationLabel{
    label: string;
    data: PopulationValue[];
}

interface Boundary{
    boundary:number;
    data:PopulationLabel;
}

export interface Prefecture{
    prefCode: number;
    prefName: string;
    data: Boundary[];
}