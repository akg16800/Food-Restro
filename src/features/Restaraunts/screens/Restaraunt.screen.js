import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
// import { RestarauntContext } from "../../../services/Restaurant.Context";
import { SafeArea } from "../../../components/utility/safe-area";
import { Spacer } from "../../../components/spacer/spacer.component";

import RestaurantInfo from "../components/Restaraunts-info";
import { ActivityIndicator, Colors } from "react-native-paper";

import styled from "styled-components";
import { RestaurantContext } from "../../../services/Restaurant-context";
import { Search } from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites-context";
import { FavouritesBar } from "../../../components/favourites/favourite-bar-component";
import { RestaurantList } from "../components/restaurant-list.style";

// const RestaurantList = styled(FlatList).attrs({
//   contentContainerStyle: {
//     padding: 16,
//   },
// })``;
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const { restaraunts, isLoading, error } = useContext(RestaurantContext);
  const [isToggled, setToggled] = useState(false);

  // console.log("inside RestaurantScreen");

  console.log(isLoading);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaraunts}
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
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight,
//   },
//   search: {
//     padding: 16,
//   },
//   list: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "blue",
//   },
// });
