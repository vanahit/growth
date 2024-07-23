import {TFetchConverter} from "redux/types/converters.types.ts";
import {TUserDB, TUserUI} from "redux/types/users.types.ts";


export const usersConverter: TFetchConverter<TUserUI, TUserDB> = {
    fromDb: (data) => {
        return {
            firstName: data.name.first,
            lastName: data.name.last,
            fullName: `${data.name.first} ${data.name.last}`,
            location: `${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state}, ${data.location.country}, ${data.location.postcode}`,
            email: data.email,
            age: data.dob.age,
            phone: data.phone,
            id: data.id.value ?? "",
            picture: {
                large: data.picture.large,
                medium: data.picture.medium,
                thumbnail: data.picture.thumbnail,
            },
        };
    },
};
