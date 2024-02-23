import React, { useState } from 'react';
import {  Text, TextInput, View } from "react-native";
import { styles } from "./style";
import NewButton from '../../components/button/button1/newButton';


const lab3 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return(
<View>
    <TextInput 
    value={name}
    onChangeText={setName}
    placeholder="Nhập họ tên"
    style={styles.tipStyle}/>
    <TextInput
    value={phone}
    onChangeText={setPhone}
    placeholder="Nhập số điện thoại"
    keyboardType="phone-pad"
    style={styles.tipStyle}/>
    <TextInput
    value={password}
    onChangeText={setPassword}
    placeholder="Nhập mật khẩu"
    secureTextEntry={true}
    style={styles.tipStyle}/>
    

  <View style={styles.container}>
    {/* Line 1 */}
  <Text style={styles.basetext}>
    Em vào đời anh bằng {' '}
    <Text style={[styles.boldText, styles.red]}>vang đỏ</Text> anh vào 
    đời bằng{' '}
    <Text style={[styles.boldText, styles.orange]}>nước trà</Text>
  </Text>
  
  {/* Line 2 */}
  <Text style={styles.basetext}>
    Bằng cơn mưa thơm{' '}
    <Text style={[styles.boldText, styles.bigText, styles.italicText]}> mùi đất{' '}
    </Text>{' '}và {' '}
    <Text style={[styles.smallText, styles.italicText]}>
      bằng hoa dại mọc trước nhà
    </Text>
  </Text>
  {/* Line 3 */}
  <Text 
  style = {[
    styles.basetext,
    styles.italicText,
    styles.boldText,
    styles.gray,
  ]}>
    Em vào đời bằng kế hoạch, anh vào đời bằng mộng mơ
  </Text>
  {/* Line 4 */}
  <Text style={[styles.basetext]}>
    Lý trí em là {' '}
    <Text  style={[styles.basetext, styles.line]}> 
    {' '}công cụ{' '}
    </Text>
    còn trái tim anh là 
    <Text >
      {' '}
      động cơ{' '}
     </Text>
  </Text>

  {/* Line 5 */}
  <Text 
  style={[styles.basetext, styles.right]}>
    Em vào đòi nhiều đồng nghiệp anh vào đời nhiều thân tình
  </Text>

  {/* Line 6 */}
  <Text style={[styles.basetext,styles.orange]}>
    Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
  </Text>

  {/* Line 7 */}
  <Text
  style={[
    styles.basetext,
    styles.black,
    styles.boldText
  ]}>
    Em vào đời bằng <Text style={[styles.yellow]}> đại lộ </Text> và con đường 
    đó giờ<Text style={[styles.white]}> vắng anh </Text>
  </Text>
  </View>
  <View style={[styles.button]}>
    <NewButton></NewButton>
  </View>
  </View>
  )};
  export default lab3;