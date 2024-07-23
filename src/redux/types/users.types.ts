export type TNameDB = {
    title: string;
    first: string;
    last: string;
};
export type TStreetDB = {
    number: number;
    name: string;
};

export type TLocationDB = {
    street: TStreetDB;
    city: string;
    state: string;
    country: string;
    postcode: string | number;
};

export type TDateOfBirthDB = {
    date: string;
    age: number;
};

export type TIdDB = {
    name: string;
    value: string | null;
};

export type TPictureDB = {
    large: string;
    medium: string;
    thumbnail: string;
};

export type TUserDB = {
    name: TNameDB;
    location: TLocationDB;
    email: string;
    dob: TDateOfBirthDB;
    phone: string;
    id: TIdDB;
    picture: TPictureDB;
};

export type TNameUI = {
    firstName: string;
    lastName: string;
    fullName: string;
};

export type TPictureUI = {
    large: string;
    medium: string;
    thumbnail: string;
};

export type TUserUI = {
    firstName: string,
    lastName: string,
    fullName: string,
    location: string;
    email: string;
    age: number;
    phone: string;
    id: string;
    picture: TPictureUI;
};

