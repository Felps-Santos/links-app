import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { s } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={s.container} {...rest} activeOpacity={0.7}>
            <Text style={s.title}>{title}</Text>
        </TouchableOpacity>
    )
}