import { View, Image, TouchableOpacity, FlatList, Modal, Text } from 'react-native';
import { s } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { Categories } from '@/components/categories';
import { Link } from '@/components/link';
import { Option } from '@/components/option';

export default function Index() {
    return (
        <View style={s.container}>
            <View style={s.header}>
                <Image source={require('@/assets/logo.png')} style={s.logo}/>
                <TouchableOpacity>
                    <MaterialIcons name='add' size={32} color={colors.green[300]}/>
                </TouchableOpacity>
            </View>
            <Categories />
            <FlatList 
                data={["1", "2", "3", "4", "5"]}
                keyExtractor={(item) => item}
                renderItem={() => (
                    <Link 
                        name='Rocketseat' 
                        url='https://www.rocketseat.com.br/' 
                        onDetails={() => console.log("Clicou")}
                    />
                )}
                style={s.links}
                contentContainerStyle={s.linksContent}
                showsVerticalScrollIndicator={false}
            />
            <Modal transparent visible={true}>
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