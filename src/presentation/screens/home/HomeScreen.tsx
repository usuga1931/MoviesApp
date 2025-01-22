/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

  if (isLoading) {
    return (<FullScreenLoader />);
  }

  return (
    <ScrollView>
      <View style={{
        marginTop: top + 20,
        paddingBottom: 30,
      }}>
        {/* Movies now playing */}
        <PosterCarousel movies={nowPlaying} />

        {/* Popular movies */}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        {/* TopRated movies */}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

        {/* UpComnig movies */}
        <HorizontalCarousel movies={upcoming} title="Próximamente" />
      </View>
    </ScrollView>
  );
};
