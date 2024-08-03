import { createContext, ReactNode, useState } from "react";
import { IShowList, IShow } from "@/typings/Show.type";
import useSWR from "swr";
import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";

interface IPickerContext {
  currentStep: number;
  setCurrentStep: (newStep: number) => void;
  showLists?: Array<IShowList>;
  selectedShows: Array<IShow>;
  setSelectedShows: (newTodos: Array<IShow>) => void;
}
export const PickerContext = createContext<IPickerContext>(
  {} as IPickerContext
);

interface IPickerContextProviderProps {
  children: ReactNode;
}

export const PickerContextProvider = ({
  children,
}: IPickerContextProviderProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedShows, setSelectedShows] = useState<Array<IShow>>([]);
  const { data: showLists } = useSWR<Array<IShowList>>(
    swrKeys.showsParams(`page=${currentStep}&items=4`),
    fetcher
  );

  return (
    <PickerContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        showLists,
        selectedShows,
        setSelectedShows,
      }}
    >
      {children}
    </PickerContext.Provider>
  );
};
