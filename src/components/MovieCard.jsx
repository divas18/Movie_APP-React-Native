import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";

const genres = {
  28: "Action",
  80: "Adventures",
  53: "Animation",
};

const MovieCard = (props) => {
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
        <View>
          <View style={styles.rateContainer}>
            <Ionicons
              name="star"
              size={FONTSIZE.size_20}
              color={COLORS.Yellow}
            />
            <Text style={styles.voteText}>
              {props.vote_average} {`(${props.vote_count})`}
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.textTitle}>
            {props?.title}
          </Text>
        </View>
        <View style={styles.genreContainer}>
          {props.genre.map((item, index) => (
            <View key={item} style={styles.genreBox}>
              <Text style={styles.genreText}>{genres[item]}</Text>
            </View>
          ))}
        </View>
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
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
    paddingVertical: SPACING.space_10,
  },
  rateContainer: {
    display: "flex",
    flexDirection: "row",
    gap: SPACING.space_10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.space_10,
  },
  voteText: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_14,
  },
  genreContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    gap: SPACING.space_20,
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  genreBox: {
    borderColor: COLORS.WhiteRGBA50,
    borderWidth: 1,
    paddingVertical: SPACING.space_4,
    paddingHorizontal: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
  },
  genreText: {
    color: COLORS.WhiteRGBA75,
    fontSize: FONTSIZE.size_10
  }
});

export default MovieCard;
