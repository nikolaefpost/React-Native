import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView from 'react-native-maps';
import { Shadow } from 'react-native-neomorph-shadows';





import MenuIcon from "../Icon/MenuIcon";
import Star from "../Icon/Star";
import StarFill from "../Icon/StarFill";
import Round from "../Icon/Round";
import Distance from "../Icon/Distance";
import Discount from "../Icon/Discount";
import Home from "../Icon/Home";
import Time from "../Icon/Time";
import ButtonScanner from "../Icon/ButtonScanner";
import Point from "../Icon/Point";
import More from "../Icon/More";






const CarWashRoute: () => Node = () => {
    return (
       <SafeAreaView style={styles.container}>
           <View style={styles.top_field}>
            <MenuIcon/>


           </View>
           <View style={styles.bottom_field}>

               <View style={styles.main_container}>
                   <View style={styles.main_button1}>
                       <Text style={styles.main_button}>
                           НАЙБЛИЖЧА АВТОМИЙКА
                       </Text>
                   </View>

                   <View style={styles.main_data}>
                       <View style={styles.main_container_info1}>
                           <View>
                               <Text style={styles.main_container_info1_title}>ICW</Text>
                               <Text style={styles.main_container_info1_adress}>г. Николаев ул. Даля 12</Text>
                               <View style={styles.main_container_info1_star}>
                                   <StarFill/><StarFill/><StarFill/><StarFill/><Star/>
                                   <Text style={styles.main_container_info1_star_text}>4.2</Text>
                               </View>
                           </View>
                           <Image source={require('./Item.png')} />
                       </View>
                       <View style={styles.main_container_info2}>
                           <View style={styles.main_container_info2_block}>
                            <Round/>
                            <Text style={[styles.main_container_info2_block_text,{backgroundColor: '#06C975',}]}>22</Text>
                           </View>
                           <View style={styles.main_container_info2_block}>
                               <Distance/>
                               <Text style={[styles.main_container_info2_block_text,{backgroundColor: '#D0C02B',}]}>1.4</Text>
                           </View>
                           <View style={styles.main_container_info2_block}>
                               <Discount/>
                               <Text style={[styles.main_container_info2_block_text,{backgroundColor: '#D0C02B',}]}>5%</Text>
                           </View>
                       </View>
                       <Text style={styles.main_container_rout}>Прокласти маршрут</Text>
                       <Text style={styles.main_container_pay}>Обрати бокс та сплатити</Text>


                   </View>

                   <View style={styles.bottom_menu}>


                        <View style={styles.bottom_menu_bottom}>
                                    <Home/><Time/><ButtonScanner style={{marginBottom: -6}}/><Point/><More style={{marginBottom: 6}}/>
                        </View>

                   </View>

               </View>
           </View>
       </SafeAreaView>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top_field: {
        flex: 5,
        padding: 20,
    },
    bottom_field: {
        flex: 6,
    },
    main_container: {
        flex: 1,
        padding: 16,
    },
    main_button: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        color: "#000000",

        borderRadius: 18,
        textAlign: "center",

        fontSize: 12,
        marginBottom: -2,
    },
    main_button1: {

        paddingTop: 8,

        marginBottom: 6,
        borderRadius: 18,
        textAlign: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 2,

    },
    main_container_info1: {

        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-between',

    },
    main_container_info1_title: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 18,

    },
    main_container_info1_adress: {
        fontSize: 12,
    },
    main_container_info1_star: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    main_container_info1_star_text:{
        fontSize: 11,
        marginLeft: 4,
        fontWeight: '800',
        color: '#000000',
    },
    main_container_info2: {
        flexDirection: 'row',
        marginBottom: 8,
        justifyContent: 'space-between',

    },
    main_container_info2_block: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_container_info2_block_text: {
        fontSize: 15,

        paddingHorizontal: 10,
        paddingVertical: 1,
        color: '#FFFFFF',
        fontWeight: '800',
        borderRadius: 13,
        marginLeft: 5,
        marginBottom: 1,
    },
    main_container_pay: {
        marginBottom: 8,
        borderRadius: 10,
        backgroundColor: '#06C975',
        textAlign: "center",
        paddingVertical: 8,
        borderColor: "#00B7F1",
        borderWidth: 1,
        color: '#FFFFFF',
        fontSize: 13,
    },
    main_container_rout: {
        marginBottom: 8,
        borderRadius: 10,
        backgroundColor: '#FAF9FE',
        textAlign: "center",
        paddingVertical: 8,
        borderColor: "#00B7F1",
        borderWidth: 1,
        color: '#000000',
        fontSize: 12,
    },
    main_data: {
        flex: 7,
        padding: 16,
        backgroundColor: '#FFFFFF',
        paddingVertical: 6,
        color: "#000000",
        marginBottom: 8,
        borderRadius: 18,
        textAlign: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,

        elevation: 5,
    },
    bottom_menu: {
        flex: 1.1,
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        borderRadius: 24,

        elevation: 5,

        justifyContent: 'flex-end',

    },

    bottom_menu_bottom:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderRadius: 24,
        paddingHorizontal: 16,

    },


});

export default CarWashRoute;
