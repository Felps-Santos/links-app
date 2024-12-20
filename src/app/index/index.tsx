import { View, Image, TouchableOpacity, FlatList, Modal, Text, Alert } from 'react-native';
import { useState, useCallback } from 'react';
import { router, useFocusEffect } from 'expo-router';
import { s } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { Categories } from '@/components/categories';
import { Link } from '@/components/link';
import { Option } from '@/components/option';
import { categories } from '@/utils/categories';
import { LinkStorage, linkStorage } from '@/storage/link-storage';

export default function Index() {
    const [category, setCategory] = useState(categories[0].name)
    const [links, setLinks] = useState<LinkStorage[]>([])

    async function getLinks() {
        try {
            const response = await linkStorage.get()
            setLinks(response)
        } catch(error) {
            Alert.alert('Erro', 'Não foi possível listar os links')
        }
    }

    useFocusEffect(useCallback(() => {
        getLinks()
    }, []))

    return (
        <View style={s.container}>
            <View style={s.header}>
                <Image source={require('@/assets/logo.png')} style={s.logo}/>
                <TouchableOpacity onPress={() => router.navigate('/add')}>
                    <MaterialIcons name='add' size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>
            <Categories onChange={setCategory} selected={category}/>
            <FlatList 
                data={links}
                keyExtractor={(item) => item.id}
                renderItem={( {item }) => (
                    <Link 
                        name={item.name} 
                        url={item.url} 
                        onDetails={() => console.log("Clicou")}
                    />
                )}
                style={s.links}
                contentContainerStyle={s.linksContent}
                showsVerticalScrollIndicator={false}
            />
            <Modal transparent visible={false}>
                <View style={s.modal}>
                    <View style={s.modalContent}>
                        <View style={s.modalHeader}>
                            <Text style={s.modalCategory}>
                                Curso
                            </Text>
                            <TouchableOpacity>
                                <MaterialIcons 
                                    name='close' 
                                    size={20} 
                                    color={colors.gray[400]}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={s.modalLinkName}>
                            Rocketseat
                        </Text>
                        <Text style={s.modalUrl}>
                            https://www.rocketseat.com.br/
                        </Text>
                        <View style={s.modalFooter}>
                            <Option name='Excluir' icon='delete' variant='secondary'/>
                            <Option name='Abrir' icon='language'/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}