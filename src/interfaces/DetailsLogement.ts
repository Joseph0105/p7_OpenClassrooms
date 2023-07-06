export interface HostInterface {
    name: string;
    picture: string;
}

export interface Appartment {
    pictures: string[];
    tags: string[];
    equipments: string[];
    title: string;
    location: string;
    host: HostInterface;
    rating: number;
    description: string;
    id: number | string;
}