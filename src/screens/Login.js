import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { connect } from "react-redux";
import loginStyle from "../assets/css/loginStyle.js";


import { Form, Item, Body, CheckBox, Button, Input } from "native-base";

const Login = () => {
    state = {
        counter: 0
    }
    return(
        <View style={loginStyle.container}>
            <View style={loginStyle.top}>
                <Image source={require('../assets/Images/chartprepre.jpg')} style={loginStyle.backgroundImage} />
            </View>
            <View style={loginStyle.middle}>
                <Text style={loginStyle.textContainer}>Welcome</Text>
                <View style={loginStyle.formArea}>
                    <Text style={[loginStyle.textContainer, loginStyle.signin ]}>Sign In</Text>
                    <Form style={loginStyle.mainForm}>
                        <Item style={loginStyle.formItems}>
                            <Input placeholder="Username" style={loginStyle.Input} />
                        </Item>
                        <Item style={loginStyle.formItems}>
                            <Input placeholder="Password" style={loginStyle.Input} />
                        </Item>
                        <View style={loginStyle.Button}>
                            <Button block style={loginStyle.mainBtn}>
                                <Text style={loginStyle.btnText}>Submit</Text>
                            </Button>
                        </View>
                    </Form>
                </View>
            </View>
            <View style={loginStyle.bottom}></View>
            
        </View>
    );
}

mapStateToProps = (state) => {
    return{
        counter: state.counter
    }
}

// mapDispatchToProps(dispatch){
//     return{

//     }
// }

export default connect(mapStateToProps)(Login);