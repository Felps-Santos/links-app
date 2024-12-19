import { FlatList } from "react-native";
import { s } from "./styles";
import { categories } from "@/utils/categories";
import { Category } from "../category";

export function Categories() {
    return (
        <FlatList 
            data={categories}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Category name={item.name} icon={item.icon} isSelected={false}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={s.container}
            contentContainerStyle={s.content}
        />
    )
}