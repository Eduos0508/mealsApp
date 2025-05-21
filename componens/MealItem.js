import { View, Text, Image, Pressable, StyleSheet, Platform } from "react-native";
import { useNavigation} from '@rect-navigation/native'
import MealDetails from "./MealDetals"

function MealItem({id, imageURL, duration, complexity, addordability}){
    console.log('title', title)
    console.log('imageURL', imageURL)

    const navigation = useNavigation()

    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {mealId: id})

    }

    return(
        <View style={styles.mealItem}>
            <Pressable
            androd_ripple={{color:'#ccc'}}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null) }
            onPress={selectMealItemHandler}
            >
                <View>
                    <View>
                        <Image
                        source={{uri: imageURL}}
                        style={styles.image}
                        />
                        <Text style= {styles.title}>
                            {title}
                        </Text>
                    </View>
                    <MealDetails
                    duration={duration}
                    complexity={complexity}
                    />
                </View>
            </Pressable>
        </View>
    )
}
    export default MealItem

    const styles = StyleSheet.create({
        mealItem:{
            margin: 16, 
            borderRadius: 8,
            overflow: Plataform.OS === 'android' ? 'hidden' : 'visible',
            backgroundColor: 'white',
            elevation: 4,
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 8,

        },
        buttonPressed:{
            opacity: 0.5

        },
        innerContainer:{
            borderRadius: 8,
            overflow: 'hidden'
        },
        image:{
            width: '100%',
            height: 200

        },
        title:{
            fontWeight:'bolt',
            textAling: 'center',
            fontSize: 18,
            margin: 8
        },
        
    })