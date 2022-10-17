import { createContext, useState } from "react";
// import useWindowDimensions from './window'


export const Direction = {
    direction: {HomeStartX:0, HomeStartY:0, 
        ProjectsStartX:(1980), ProjectsStartY:0,
        AboutStartX:0, AboutStartY:(1980)
      },
        setDirection: () => {}
}

export type DirectionContextType = {
    direction: { HomeStartX: number, HomeStartY: number, 
        ProjectsStartX: number, ProjectsStartY: number, AboutStartX: number,
        AboutStartY: number, };
    setDirection: React.Dispatch<React.SetStateAction<{ 
            HomeStartX: number, HomeStartY: number, 
            ProjectsStartX: number, ProjectsStartY: number, 
            AboutStartX: number, AboutStartY: number}>>
}

type DirectionContextProps = {
    children: React.ReactNode
}



export const DirectionContext = createContext<DirectionContextType>(Direction);

export function DirectionContextProvider({children}: DirectionContextProps) {
    // const { height, width } = useWindowDimensions();
    const [direction, setDirection] = useState(
    Direction.direction);
    return <DirectionContext.Provider value = {{direction, setDirection}}>{children}</DirectionContext.Provider>
}