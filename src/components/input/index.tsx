import { TextInput, TextInputProps } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/colors";

export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput 
            style={s.container} {...rest}
            placeholderTextColor={colors.gray[400]}    
        />
    )
}