import { Grid } from "@chakra-ui/react";
import { ShowCard } from "../../ShowCard/ShowCard";
import { IShowList, IShow } from "@/typings/Show.type";

export interface IShowsListProps {
  showLists: IShowList;
}

export const ShowsList = ({ showLists }: IShowsListProps) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap="5"
    >
      {showLists.shows.map((show: IShow) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </Grid>
  );
};
