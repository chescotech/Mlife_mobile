import React, { memo, useCallback, useRef } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WalkthroughScreen from './components/WalkthroughScreen';
import Dots from './components/Dots';
import ButtonLinear from 'app/components/ButtonLinear';
import FONTS from 'app/ultis/fonts';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import { heightScreen, widthScreen } from 'app/ultis/layout';
const data = [
  {
    img: require('app/assets/Walkthrough/bg1.png'),
    title: 'Domestic Travel Insurance',
    intro: 'It provides key travel benefits in case of an emergency.',
  },
  {
    img: require('app/assets/Walkthrough/bg2.png'),
    title: 'Our Benefits',
    intro:
      'Personal accident cover, Medical expenses, Emergency cash, Aid for spouse and dependent children',
  },
  {
    img: require('app/assets/Walkthrough/bg3.png'),
    title: 'Types of Domestic cover',
    intro:
      'Accidental death cover only, Combined Insurance cover, Way of Life Cover',
  },
];

const Walkthrough = memo(() => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const onGetStarted = useCallback(() => {
    navigation.navigate(ROUTES.SelectPlan);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.btnView}>
        <ButtonLinear title={'GET STARTED'} onPress={onGetStarted} />
      </View>

      <View style={styles.content}>
        <ScrollView
          horizontal={true}
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}>
          {data.map((item, index) => {
            return (
              <WalkthroughScreen
                title={item.title}
                intro={item.intro}
                image={item.img}
                key={index}
              />
            );
          })}
        </ScrollView>
      </View>

      <Dots scrollX={scrollX} />
    </View>
  );
});

export default Walkthrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'red',
  },
  accountAsk: {
    padding: 8,
    marginTop: 28,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textAccountAsk: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#000',
  },
  btnLogin: {
    padding: 4,
  },
  textLogin: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#FE9870',
  },
  haveAccount: {
    position: 'absolute',
    left: 0,
    top: heightScreen / 2 + 130,
    width: widthScreen,
    paddingHorizontal: 24,
    zIndex: 100,
  },
  btnView: {
    position: 'absolute',
    left: 0,
    top: heightScreen / 2 + 48,
    width: widthScreen,
    paddingHorizontal: 24,
    zIndex: 100,
  },
});
