import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Theme from './theme';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SkillsQuestionsScreen from './screens/SkillsQuestionsScreen';
import ChooseUserTypeScreen from './screens/ChooseUserTypeScreen';
import { useFonts, Rubik_400Regular } from '@expo-google-fonts/rubik';
import JobliLoader from './components/JobliLoader';
import { StyleSheet, I18nManager } from 'react-native';

import SkillsSummary from './components/skills-wizard/skills-summary';
import AddLanguageScreen from './screens/AddLanguageScreen';
import AboutMeProfileScreen from './screens/AboutMeProfileScreen';
import CreateProfileSeeker, { CreateProfileSeekerScreenName, CreateProfileSeekerScreenOptions } from './screens/create-profile/CreateProfileSeeker';
import CreateProfileEmployer, { CreateProfileEmployerScreenName, CreateProfileEmployerScreenOptions } from './screens/create-profile/CreateProfileEmployer';
import PostJobWizard, { PostJobWizardScreenName, PostJobWizardScreenOptions } from './screens/post-job-wizard/post-job-wizard';
import SummaryScreen from './screens/SummaryScreen';

const Stack = createStackNavigator();

const navTheme = {
  dark: false,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Theme.c1,
    colors: Theme.textColor,
    text: Theme.textColor,
    border: Theme.c1
  },
};

function App() {
  I18nManager.forceRTL(true);
  I18nManager.allowRTL(true);

  let [fontsLoaded] = useFonts({
    Rubik_400Regular
  });
  if (!fontsLoaded) {
    return <JobliLoader />
  } else return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator initialRouteName="Summary">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name={CreateProfileSeekerScreenName} options={CreateProfileSeekerScreenOptions} component={CreateProfileSeeker} />
        <Stack.Screen name={CreateProfileEmployerScreenName} options={CreateProfileEmployerScreenOptions} component={CreateProfileEmployer} />
        <Stack.Screen name={PostJobWizardScreenName} options={PostJobWizardScreenOptions} component={PostJobWizard} />
        <Stack.Screen name="SkillsQuestions" component={SkillsQuestionsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="ChooseUserTypeScreen" component={ChooseUserTypeScreen} />
        <Stack.Screen name="SkillsSummary" component={SkillsSummary} />
        <Stack.Screen name="AddLanguage" component={AddLanguageScreen} options={{ title: 'בחירת שפה' }} />
        <Stack.Screen name="AboutMeProfile" component={AboutMeProfileScreen} options={{ title: 'יצירת פרופיל' }} />
        <Stack.Screen name="Summary" component={SummaryScreen} options={{ title: 'סיכום' }} />
      </Stack.Navigator>
    </NavigationContainer>);

}

export default App;

const styles = StyleSheet.create({

})