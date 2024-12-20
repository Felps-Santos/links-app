import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { s } from "./styles";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function add() {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');

    function handleAdd() {
        if (!category) {
            return Alert.alert('Categoria', 'Selecione a categoria')
        }

        if (!name.trim()) {
            return Alert.alert('Nome', 'Informe o nome')
        }

        if (!url.trim()) {
            return Alert.alert('URL', 'Informe a URL')
        }
        console.log({ category, name, url })
    }

    return (
        <View style={s.container}>
            <View style={s.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]}/>
                </TouchableOpacity>
                <Text style={s.title}>Novo</Text>
            </View>
            <Text style={s.label}>Selecione uma categoria</Text>
            <Categories onChange={setCategory} selected={category}/>
            <View style={s.form}>
                <Input placeholder="Nome" onChangeText={setName} autoCorrect={false}/>
                <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false}/>
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
        </View>
    )
}