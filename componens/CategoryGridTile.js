import {View, Pressable, Text, StyleSheet, Plataform} from "react-native"

function CategoryGrindTile({title, color, onPress}){
    return (
        <View style={[styles.grindItem,{ backgroundColor: color}]}>
            <Pressable android_ripple={{color: '#ccc'}}
            style={({ pressed})=> [styles.button, pressed ? styles.buttonPressed : null,]}
                onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                </Pressable>
                </View>
            
       
    )
}

const styles= StyleSheet.create({
    grindItem:{
        flex:1,
        margin:16,
        height: 150,
        borderRadius: 8,
        elevation: 4, 
        backgroundColor: 'white',
        shadowColor: 'black', 
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Plataform.OS === 'android' ? 'hidden' : 'visible'

    },
    button:{
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alingItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize:18,
    }
    
})

export default CategoryGrindTile