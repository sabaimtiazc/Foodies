import React from 'react';
//ccc

// This context's -value- attribute will keep track
// of the state
const UserStateContext = React.createContext();

// This context's -value- attribute will give the consumer
// a way to update the state.
const UserDispatchContext = React.createContext();

function UserProvider({children}) {
    const raw = localStorage.getItem("user");
    const json = JSON.parse(raw);

    console.log(json);

    const [user, setUser] = React.useState(json);

    return (
        <UserStateContext.Provider value={user}>
            <UserDispatchContext.Provider
                value={
                    (user) => {
                        localStorage.setItem("user", JSON.stringify(user));
                        setUser(user);
                    }
                }>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}

function useUserState() {
    const context = React.useContext(UserStateContext);

    if(context === undefined) throw new Error("useUserState must be used within a UserProvider.");

    return context;
}

function useUserDispatch() {
    const context = React.useContext(UserDispatchContext);

    if(context === undefined) throw new Error("useUserDispath must be used within a UserProvider.");

    return context;
}

export {
    UserProvider,
    useUserState,
    useUserDispatch
};