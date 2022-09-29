import { useState } from "react";
import ViewContext from "../../contexts/viewContext/ViewContext";

const UtilsViewContextProvider = (props) => {
    const { children } = props;

    const [isCardThem, setIsCardTheme] = useState(false);

    return (
        <ViewContext.Provider value={{ isCardThem, setIsCardTheme }}>
            {children}
        </ViewContext.Provider>
    )
}

export default UtilsViewContextProvider;