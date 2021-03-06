/************************************************
 * Class : 기본 박스 틀 컴포넌트 (제목, 내용 넣을 수 있는 컴포넌트)
 * 
 * props :
 * - title: 박스 상단바 위에 글씨 넣기
 * - func 박스 안 스크롤바 안에 들어갈 내용
 * 
 * function :
 * - putBox() : 전체 기본 컴포넌트 자체
 * 
 *  
 ************************************************/
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class infoBox extends Component {
    putBox() {
        var Box = 
             <View style={styles.orderlist}>
                    {/*주문할 메뉴 함수로 return 받기*/}
                    {this.props.func}
                </View>
        return Box;
    }

    render(){
        return(
            <View>
              {this.putBox()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //주문 가게 이름 표시
    title: {
        marginTop: 10,
        marginLeft: 15,
        marginBottom: 10,
        fontSize: wp('4%'),
        fontWeight: 'bold'
    },
    //스크롤 뷰
    scrollView: {
        marginHorizontal: 7,
    },
    orderlist: {
        width: wp('90%'),
        height: wp('30%'),
        marginTop: wp('5%'),
        marginBottom: wp('-3%'),
        backgroundColor: '#ffffff',
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 2, height: 4 },
        elevation: 2,
        borderRadius: 10
    },
  });

export default infoBox;