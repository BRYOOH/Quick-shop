import { createContext } from "react";

export const ClothingContext = createContext(null);

const ClothingContextProvider = (props) => {

    const contextValue = {};

    return(
        <ClothingContext.Provider value={contextValue}>
            {props.children}
        </ClothingContext.Provider>
    )
}

export default ClothingContextProvider;