import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  upcomingMovies,
  nowPlayingMovies,
  popularMovies,
  baseImagePath,
} from "../api/apicalls";
import { COLORS, SPACING } from "../theme/theme";
import InputHeader from "../components/InputHeader";
import dummyData from "../../dummyData";
import CategoryHeader from "../components/CategoryHeader";
import SubMovieCard from "../components/SubMovieCard";
import MovieCard from "../components/MovieCard";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState(null);
  const [popularMoviesList, setPopularMoviesList] = useState(null);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState(null);

  const handleSearchMovies = () => {
    navigation.navigate("Search");
  };

  const getNowPlayingMoviesList = async () => {
    return dummyData.results;

    try {
      let resp = await fetch(nowPlayingMovies);
      return resp.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const getPopularMoviesList = async () => {
    return dummyData.results;

    try {
      let resp = await fetch(popularMovies);
      return resp.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const getUpcomingMoviesList = async () => {
    return dummyData.results;

    try {
      let resp = await fetch(upcomingMovies);
      return resp.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    async function getData() {
      const tmpNowPlayingMoviesList = await getNowPlayingMoviesList();
      const tempGetPopularMoviesList = await getPopularMoviesList();
      const tempGetUpcomingMoviesList = await getUpcomingMoviesList();

      setNowPlayingMoviesList([{id: "dummy1"}, ...tmpNowPlayingMoviesList, {id: "dummy2"}]);
      setPopularMoviesList(tempGetPopularMoviesList);
      setUpcomingMoviesList(tempGetUpcomingMoviesList);
    }
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <StatusBar hidden={true} backgroundColor={COLORS.Orange} />

        <View style={styles.inputHeaderContainer}>
          <InputHeader searchFunction={handleSearchMovies} />
        </View>

        <CategoryHeader title="Now Playing" />
        <FlatList
          data={popularMoviesList}
          keyExtractor={(item) => item.id}
          snapToInterval={width * 0.7 + SPACING.space_36}
          renderItem={({ item, index }) => (
            <MovieCard
              title={item?.titleText?.text}
              imgagePath={item?.primaryImage?.url}
              shouldMarginatedAtEnd={true}
              cardFunction={() => {
                navigation.push("MovieDetails", { movieId: item?.id });
              }}
              cardWidth={width * 0.7}
              isFirst={index == 0 ? true : false}
              isLast={index == upcomingMoviesList?.length - 1 ? true : false}
              genre={[28, 80, 53]}
              vote_average={2.5}
              vote_count={1002}
            />
          )}
          contentContainerStyle={styles.containerGap36}
          horizontal
        />
        <CategoryHeader title="Popular" />
        {/* <SubmovieCard/> for popular movies */}
        <FlatList
          data={popularMoviesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <SubMovieCard
              title={item?.titleText?.text}
              imgagePath={item?.primaryImage?.url}
              shouldMarginatedAtEnd={true}
              cardFunction={() => {
                navigation.push("MovieDetails", { movieId: item?.id });
              }}
              cardWidth={width / 3}
              isFirst={index == 0 ? true : false}
              isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            />
          )}
          contentContainerStyle={styles.containerGap36}
          horizontal
        />

        <CategoryHeader title="Upcoming" />
        {/* <SubMovieCard /> for upcoming movies */}
        <FlatList
          data={upcomingMoviesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <SubMovieCard
              title={item?.titleText?.text}
              imgagePath={item?.primaryImage?.url}
              shouldMarginatedAtEnd={true}
              cardFunction={() => {
                navigation.push("MovieDetails", { movieId: item?.id });
              }}
              cardWidth={width / 3}
              isFirst={index == 0 ? true : false}
              isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            />
          )}
          contentContainerStyle={styles.containerGap36}
          horizontal
        />

        {/* {nowPlayingMoviesList == null ? (
          <View style={styles.loadingState}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <View></View>
        )} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Black,
    display: "flex",
    height: "100%",
  },
  scrollViewContainer: {
    // flex: 1,
  },
  loadingState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  containerGap36: {
    gap: SPACING.space_20,
  },
});
