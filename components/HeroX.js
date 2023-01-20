import * as React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class HeroX extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              image : "../images/food1.jpg",
              text: "This is text area for Item 1",
              key : 1,
          },
          {
              title:"Item 2",
              image : "../images/food2.jpg",
              text: "This is text area for Item 2",
              key : 2,
          },
          {
              title:"Item 3",
              image : "../images/food1.jpg",
              text: "This is text area for Item 3",
              key : 3,
          },
          {
              title:"Item 4",
              image : "../images/food3.jpg",
              text: "This is text area for Item 4",
              key : 3,
          },
          {
              title:"Item 5",
              image : "../images/food1.jpg",
              text: "This is text area for Item 5",
              key : 1,
          },
        ]
      }
    }

    _renderItem({item}){
        return (
          <View className = "w-full h-full bg-slate-200">
            <Text style={{fontSize: 30}} className = "text-black z-10">{item.title}</Text>
            <Text className = "text-black z-10">{item.text}</Text>
            <Image source={require(`../images/food${3}.jpg`)} className = "w-full h-full bg-cover absolute top-0"></Image>
          </View>
        )
    }

    render() {
        return (
          <SafeAreaView className="w-full h-[200px] p-2">
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}