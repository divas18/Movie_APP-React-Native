import { Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTSIZE, SPACING } from "../theme/theme";

const CategoryHeader = (props) => {
  return <Text style={styles.title}>{props?.title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.White,
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_28,
  },
});

export default CategoryHeader;
