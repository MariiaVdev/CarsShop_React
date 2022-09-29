import { useState } from "react";
import ViewContext from "./ViewContext";

const ViewContextProvider = (props) => {
    const { children } = props;

    const [isCardThem, setIsCardTheme] = useState(true);

    return (
        <ViewContext.Provider value={{ isCardThem, setIsCardTheme }}>
            {children}
        </ViewContext.Provider>
    )
}

export default ViewContextProvider;