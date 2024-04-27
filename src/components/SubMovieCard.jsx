import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";

const SubMovieCard = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props?.cardFunction();
      }}
    >
      <View
        style={[
          styles.container,
          props?.shouldMarginatedAtEnd
            ? props?.isFirst
              ? { marginLeft: SPACING.space_36 }
              : props?.isLast
              ? { marginRight: SPACING.space_36 }
              : {}
            : {},
          props?.shouldMarginatedAtEnd ? { margin: SPACING.space_12 } : {},
          { maxWidth: props?.cardWidth },
        ]}
      >
        <Image
          source={{ uri: props.imgagePath }}
          style={[styles.cardImage, { width: props?.cardWidth }]}
          alt={"Alternate text that will be read be screen readers"}
        />
        <Text numberOfLines={1} style={styles.textTitle}>
          {props?.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.Black,
  },
  cardImage: {
    aspectRatio: 2 / 3,
    borderRadius: BORDERRADIUS.radius_20,
  },
  textTitle: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
    paddingVertical: SPACING.space_10,
  },
});

export default SubMovieCard;
