import React from "react";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaraunt/compact-restaraunt-info.component";

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
