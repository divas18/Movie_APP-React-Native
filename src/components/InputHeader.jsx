import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputHeader = (props) => {
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(false);

  const handleChangeText = (textInput) => {
    setSearchText(textInput);
  };

  const handleSearchPress = () => {
    if (searchText != "") {
      props.searchFunction(searchText);
    } else {
        setError(true)
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
        setError(false)
    }, 3000);

    return () => {
        clearInterval(interval);
    }
  }, [error])
  return (
    <View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.textInput}
          placeholder="search your movies ..."
          placeholderTextColor={COLORS.WhiteRGBA32}
          value={searchText}
          onChangeText={handleChangeText}
        />
        <TouchableOpacity style={styles.searchIcon} onPress={handleSearchPress}>
          <Ionicons
            name="search-outline"
            size={FONTSIZE.size_20}
            color={COLORS.Orange}
          />
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.error}>Kindly type something </Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_24,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: BORDERRADIUS.radius_25,
  },
  textInput: {
    width: "90%",
    // fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  searchIcon: {},
  error: {
    color: "red",
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
  },
});

export default InputHeader;
