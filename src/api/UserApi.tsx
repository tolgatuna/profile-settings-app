type Address = {
    street: string,
    town: string,
    county: string,
    postcode: string
}

type Preferences = {
    contact: string[]
}

export type User = {
    id: string,
    user_name: string,
    password: string,
    first_name: string,
    other_names: string,
    address: Address,
    mobile: string,
    email: string,
    company: string
    preferences: Preferences
}

export type UserData = {
    users: User[]
}

const userData: UserData = {
    users: [
        {
            id: "1",
            user_name: "jon",
            password: "1234",
            first_name: "Jon",
            other_names: "Williams",
            address: {
                street: "1 Mill Street",
                town: "Northampton",
                county: "Northamponshire",
                postcode: "NU7 JK8"
            },
            mobile: "08982 92829",
            email: "jwlll@gmail.com",
            company: "Xerini",
            preferences: {
                contact: ["mail", "sms"]
            }
        }
    ]
}

export const authenticateUser = (userName: string, password: string): string | null => {
    const user = userData.users.find(t => t.user_name === userName && t.password === password);
    return !user ? null : user.id;
}

export const getUser = (id: string): User => {
    const user = userData.users.find(t => t.id === id);
    return user!;
}

export const updateUser = (id: string, updatedUser: User) => {
    const user = userData.users.find(t => t.id === id);
    if (!!user) {
        const index = userData.users.indexOf(user);
        userData.users[index] = updatedUser;
    }
}