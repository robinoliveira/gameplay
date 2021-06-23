import React from "react";
import {Text, View, Image, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import {styles} from './style'

import DiscordImg from '../../assets/discord.png'

type Props= TouchableOpacityProps &{
    title:string;
    //title?:string;-> significa que title é uma prop não obrigatória

}

export const ButtonIcon= ({title, ...rest}:Props)=>{

    return(

       <TouchableOpacity style = {styles.container} {...rest}>
           <View style= {styles.iconWrapper}>
           <Image source={DiscordImg} style = {styles.icon}/>
           </View>
           <Text style = {styles.buttonText}>{title}</Text>
       </TouchableOpacity>

    )


}