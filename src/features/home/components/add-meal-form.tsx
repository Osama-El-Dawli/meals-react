import { View } from "react-native";
import CustomButton from "./custom-button";
import InputField from "./input-field";


export default function AddMealForm() {


  return (
    <View>
      <InputField title="Meal Name" />
      <InputField title="Image Url" numberOfLines={3} />
      <InputField title="Rate" />
      <InputField title="Time" />
      <InputField title="Description" numberOfLines={5} />
      <View style={{ marginTop: 12 }}>
        <CustomButton text="Save" />
      </View>
    </View>
  );
}
