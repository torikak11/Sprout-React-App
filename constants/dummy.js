import { TouchableHighlightComponent } from "react-native";
import { COLORS } from "./theme"

const GoalData = [
    {
        id: "Goal-01",
        name: "Create a mobile app",
        progress: 26,
        color: COLORS.green100,
        plant: 'sunflower',
    },
    {
        id: "Goal-02",
        name: "Read 10 books",
        progress: 30,
        color: COLORS.coral100,
        plant: 'tulip',
    },
    {
        id: "Goal-03",
        name: "Learn French",
        progress: 14,
        color: COLORS.blue,
        plant: 'fern',
    },
    {
        id: "Goal-04",
        name: "Run a 5k",
        progress: 45,
        color: COLORS.black,
        plant: 'lavender'
    },
]

const HabitData = [
    {
        id: "Habit-01",
        name: "Drink water",
        progress: 7,
        color: COLORS.black,
        plant: 'tomato',
    },
    {
        id: "Habit-02",
        name: "Stretch",
        progress: 10,
        color: COLORS.blue,
        plant: 'pea'
    },
    {
        id: "Habit-03",
        name: "Practice French",
        progress: 0,
        color: COLORS.green200,
        plant: 'onion'
    },
    {
        id: "Habit-04",
        name: "Exercise",
        progress: 4,
        color: COLORS.coral100,
        plant: 'corn',
    },
]

export { GoalData, HabitData };