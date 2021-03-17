// react/react-native
import React from "react";
import { FlatList, StyleSheet, ViewStyle } from "react-native";

// model
import { PHOTOS } from "../../../../assets/model/album";

// components
import { PhotoList } from "./components/PhotoList";
import { MenuIcon } from "./components/MenuIcon";
import { SectionTitle } from "./components/SectionTitle";

export const PhotoLibrary: React.FC = () => {
  return (
    <FlatList
      data={PHOTOS}
      keyExtractor={(_, index) => `verticalList_${index}`}
      ListHeaderComponent={() => <MenuIcon />}
      renderItem={({ item }) => (
        <>
          <SectionTitle title={item.title} />
          <FlatList
            data={item.data}
            contentContainerStyle={styles.horizontalListBody}
            keyExtractor={(index) => `vertical_${item.title} ${index}`}
            horizontal
            renderItem={({ item }) => <PhotoList item={item} />}
          />
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  horizontalListBody: {
    paddingHorizontal: 10,
  } as ViewStyle,
});
