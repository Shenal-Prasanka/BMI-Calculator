import {
  UserGroupIcon,
  ChartBarIcon,
  PlayIcon,
  CakeIcon,
  UserIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

export const contactData = [
  {
    title: "Gender",
    icon: UserGroupIcon,
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    title: "Age",
    icon: CakeIcon,
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    title: "Muscle",
    icon: BoltIcon,
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    title: "Pregnancy",
    icon: UserIcon,
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    title: "Race",
    icon: PlayIcon,
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
  {
    title: "Fatigue",
    icon: ChartBarIcon,
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
];

export default contactData;
