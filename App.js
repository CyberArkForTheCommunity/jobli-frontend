// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SkillsQuestionsScreen from './screens/SkillsQuestionsScreen'
import SkillsSummary from './components/skills-wizard/skills-summary';
import AddLanguageScreen from './screens/AddLanguageScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="SkillsQuestions" component={SkillsQuestionsScreen} />
        <Stack.Screen name="SkillsSummary" component={SkillsSummary} />
        <Stack.Screen name="AddLanguage" component={AddLanguageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;