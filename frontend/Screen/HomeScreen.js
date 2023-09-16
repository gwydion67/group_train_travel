import { View, Text, StyleSheet, Dimensions, Image, TextInput , StatusBar } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import DatePicker from 'react-native-date-picker'
import { useState } from "react";
import { Button } from '@rneui/themed';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { createTripCardThunk } from "../Store/thunks/card/thunkCard";

const { height, width } = Dimensions.get('screen');

function HomeScreen() {
    const dispatch = useDispatch();
    const [checkboxTrain, setCheckboxTrain] = useState(false)

    // Date Picker 
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())
    
    // New Trip 
    const [departure, setdeparture] = useState('')
    const [Destination, setDestination] = useState('')
    const [dateForm, setdateForm] = useState('')
   
    
    
    
    // Already booked train  
    const [trainNumber, setTrainNumber] = useState('')
    const [alreadyInTrain, setAlreadyInTrain] = useState(false)
    const [dateForm_, setdateForm_] = useState('')
    const [departure_, setdeparture_] = useState('')
    const [Destination_, setDestination_] = useState('')


    const postButton =   ()=>{
        console.log(departure)
        try {
            if (departure && Destination && dateForm ){
               
                let formContent = {
                    "From" : departure , "To" : Destination ,  "Date" : dateForm
                }
                console.log(formContent , 'jk')
      dispatch(createTripCardThunk(formContent))
                
            }
            else {
                console.log('some fields are empty')
            }
        }
       catch(err){
        console.log('er' ,err )
       }


    }
    const postButton_ = ()=>{}


    return (
        <View style={{ flex: 1, position: 'relative', alignItems: 'center', backgroundColor: 'white' }}>
            <Image source={require('../assets/bg.png')} style={{ position: 'absolute', zIndex: 0, top: -650, left: -350 }} />
            <View style={{ paddingTop: height / 50, backgroundColor: 'rgba(255 , 230 , 230 , 0.1)', height: height / 1.05, width: width / 1.08, borderRadius: 35, borderColor: 'white', borderWidth: 1, top:  StatusBar.currentHeight }}>
                <Text style={{ color: 'black', fontSize: 30, fontWeight: '500', paddingBottom: 0, paddingLeft: width / 25 }}>Hello,</Text>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: '300', marginTop: 0, paddingTop: 0, lineHeight: 24, paddingLeft: width / 25, marginBottom: height / 15 }}>Ranjay Singh</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: width / 25, marginBottom: height / 30 }}>
                    <CheckBox
                        disabled={false}
                        value={checkboxTrain}
                        onValueChange={(newValue) => setCheckboxTrain(newValue)}

                    />


                    <Text>Already booked the train?</Text></View>
                {checkboxTrain ? (
                    <View style={{ alignItems: 'center' }} >
                        <View style={{ alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, width: '80%' }}>
                            <TextInput value={trainNumber} onChange={(text) => (setTrainNumber(text.nativeEvent.text))} placeholder="Train Number" style={{ width: '90%' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', right: width / 6 }}>
                            <CheckBox
                                disabled={false}
                                value={alreadyInTrain}
                                onValueChange={(newValue) => setAlreadyInTrain(newValue)}

                            />
                            <Text>Already in the train?</Text>
                        </View>
                        {!alreadyInTrain && (
                            <View style={{width:'100%' , alignItems:'center' , height:height/5 , justifyContent:'space-between' }}>

                         
                            <View style={{ alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, width: '80%' }}>
                                <TextInput value={departure_} onChange={(text) => (setdeparture_(text.nativeEvent.text))} placeholder="From" style={{ width: '90%' }} />
                            </View>
                            <View style={{ alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, width: '80%' }}>
                                <TextInput value={Destination_} onChange={(text) => (setDestination_(text.nativeEvent.text))} placeholder="To" style={{ width: '90%' }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center',  backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, width: '80%'  }}>
                                <TextInput value={dateForm_} onChange={(text) => (setdateForm_(text.nativeEvent.text))} placeholder="Date" style={{ width: '85%'  , }} />
                                <Button
                                title="Post"
                                buttonStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',


                                    borderRadius: 30,
                                }}
                                containerStyle={{
                                    width: 20,
                                    height: 20
                                  
                                }}

                                titleStyle={{ color: 'white' }}
                                onPress={()=>{setOpen(!open)}}

                            />
                            </View>
                            </View>
                        )}
                        <Button
                            title="Post"
                            buttonStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',


                                borderRadius: 30,
                            }}
                            containerStyle={{
                                width: 200,
                                marginHorizontal: 50,
                                marginVertical: 10,
                            }}

                            titleStyle={{ color: 'white' }}
                            onPress={postButton_}

                        />



                    </View>) : (
                    <View style={{}}>
                        <View style={{ alignItems: 'center', height: height / 3, justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, width: '80%' }}>
                                <TextInput value={departure} onChange={(text) => {setdeparture(text.nativeEvent.text)}} placeholder="From" style={{ width: '90%' }} />
                            </View>

                            <View style={{ alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, width: '80%' }}>
                                <TextInput value={Destination} onChange={(text) => (setDestination(text.nativeEvent.text))} placeholder="To" style={{ width: '90%' }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center',  backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, width: '80%'  }}>
                                <TextInput value={dateForm} onChange={(text) => (setdateForm(text.nativeEvent.text))} placeholder="Date" style={{ width: '85%'  , }} />
                                <Button
                                title="Post"
                                buttonStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',


                                    borderRadius: 30,
                                }}
                                containerStyle={{
                                    width: 20,
                                    height: 20
                                  
                                }}

                                titleStyle={{ color: 'white' }}
                                onPress={()=>{setOpen(!open)}}

                            />
                            </View>
                            <Button
                                title="Post"
                                buttonStyle={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',


                                    borderRadius: 30,
                                }}
                                containerStyle={{
                                    width: 200,
                                    marginHorizontal: 50,
                                    marginVertical: 10,
                                }}

                                titleStyle={{ color: 'white' }}
                                onPress={postButton}

                            />

                        </View>
                        {/* <Button title="Open" onPress={() => setOpen(true)} />                   */}

                      
                    </View>
                )}
                  <DatePicker
                            modal
                            fadeToColor="green"
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                                console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
                                setOpen(false)
                                if (checkboxTrain){
                                    setdateForm_(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
                                }
                                else {
                                    setdateForm(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
                                }
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}

                        />

            </View>

        </View>

    )
}

export default HomeScreen