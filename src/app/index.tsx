import { StatusBar, Text, TouchableOpacity, View } from 'react-native'


export default function App(){


    return (
        <View>
            <StatusBar barStyle="dark-content"/>
            <Text>Olá App!</Text>
            <TouchableOpacity onPress={() => alert('Clicado!')}>
                <Text>Clique aqui</Text>
            </TouchableOpacity>
        </View>
    )
}