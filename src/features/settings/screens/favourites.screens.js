import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites-context";
import { SafeArea } from "../../../components/utility/safe-area";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text-components";
import { RestaurantList } from "../../Restaraunts/components/restaurant-list.style";
// import { RestaurantCard } from "../../Restaraunts/components/Restaurant-info-styles";
import RestarauntInfo from "../../Restaraunts/components/Restaraunts-info";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouriteScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  //   console.log(favourites);
  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restro: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestarauntInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
