import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, ImageBackground, Image, TouchableOpacity,Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import * as theme from '../theme';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    header: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.sizes.padding,
        paddingTop: theme.sizes.padding * 1.33,
        paddingBottom: theme.sizes.padding * 0.66,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flex: {
        flex: 1,
    },
    column: {
        flexDirection: 'column'
    },
    articles : {
        //paddingHorizontal : 36
    },
    rating: {
      fontSize: 28,
      color: theme.colors.white,
      fontWeight: 'bold'
    },
    destinations : {
        flex: 2,
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    destination : {
        width : width - (theme.sizes.padding * 2),
        height : width * 0.66,
        marginHorizontal : theme.sizes.margin,
        paddingHorizontal : theme.sizes.padding,
        paddingVertical : 20,
        borderRadius : theme.sizes.radius,
    },
    destinationInfo : {
        position : 'absolute',
        borderRadius : 12,
        paddingHorizontal : theme.sizes.padding,
        paddingVertical : 16,
        bottom : -36,                       //In iOS platform, bottom : -36
        left : theme.sizes.padding,
        right : theme.sizes.padding,
        backgroundColor : theme.colors.white,
    },
    shadow : {
        shadowColor: theme.colors.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 5,
    },
    recommended : {
    },
    recommendedHeader: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: theme.sizes.padding,
    },
    recommendation: {
        width: (width - (theme.sizes.padding * 2)) / 2,
        marginHorizontal: 8,
        backgroundColor: theme.colors.white,
        overflow: 'hidden',
        borderRadius: theme.sizes.radius,
        marginVertical: theme.sizes.margin * 0.5,
    },
    recommendationImage: {
        width: (width - (theme.sizes.margin* 2)) / 2,
        height: (width - (theme.sizes.margin * 2)) / 2,
    },
    recommendationHeader: {
        overflow: 'hidden',
        borderTopRightRadius: theme.sizes.radius,
        borderTopLeftRadius: theme.sizes.radius,
    },
    recommendationOptions: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.sizes.padding / 2,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    recommendationTemp: {
        fontSize: 14 * 1.25,
        color: theme.colors.white
    },
    avatar: {
        width: 36,
        height : 36,
        borderRadius : 18
    },
    dots: {
        width: 10,
        height: 10,
        borderWidth: 2.5,
        borderRadius: 5,
        marginHorizontal: 6,
        backgroundColor: theme.colors.gray,
        borderColor: 'transparent',
    },
    activeDot: {
        width: 12.5,
        height: 12.5,
        borderRadius: 6.25,
        borderColor: theme.colors.active,
    }
});

const destinations = [
    {
        id: 1,
        user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
        rating: 4.3,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        ]
    },
    {
        id: 2,
        user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        saved: false,
        location: 'Loutraki, Greece',
        temperature: 34,
        title: 'Loutraki',
        description: 'This attractive small town, 80 kilometers from Athens',
        rating: 4.6,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
        ]
    },
    {
        id: 3,
        user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        description: 'Santorini - Description',
        rating: 3.2,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
        ]
    },
    {
        id: 4,
        user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        location: 'Loutraki, Greece',
        temperature: 34,
        title: 'Loutraki',
        description: 'This attractive small town, 80 kilometers from Athens',
        rating: 5,
        reviews: 3212,
        preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
        ]
    },
]

export default class List extends React.Component {
    scrollX = new Animated.Value(0);

    static navigationOptions = {
        header: () =>
            <View style={[styles.row, styles.header]}>
                <View>
                    <Text style={{color : theme.colors.caption}}>Search for place</Text>
                    <Text style={{fontSize : theme.sizes.font}}>Destination</Text>
                </View>
                <View>
                    <Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/women/32.jpg'}} />
                </View>
            </View>

    }

    renderDots() {
        const dotPosition = Animated.divide(this.scrollX, width);
        return (
            <View
                style={[
                    styles.flex,
                    styles.row,
                    {justifyContent: 'center',alignItems:'center', marginTop : Platform.OS === 'ios' ? theme.sizes.padding * 2 : 48}
                ]}
            >
            {destinations.map((item, index) => {
                    const borderWidth = dotPosition.interpolate({
                        inputRange: [index -1, index, index + 1],
                        outputRange: [0, 2.5, 0],
                        extrapolate: 'clamp'
                    });
                    return (
                        <Animated.View
                            key={`step-${item.id}`}
                            style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
                        />
                    )
                })}

            </View>
        )
    }

    renderDestination(item){
        return(
            <ImageBackground
                style={[styles.flex, styles.destination, styles.shadow]}
                imageStyle = {{borderRadius : theme.sizes.radius}}
                source= {{uri : item.preview}}
            >
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <View style={{flex : 0}}>
                        <Image source={{uri: item.user.avatar}} style={styles.avatar}/>
                    </View>
                    <View style={[styles.column, {flex : 2, paddingHorizontal : theme.sizes.padding / 2}]}>
                        <Text style={{color : theme.colors.white, fontWeight : 'bold'}}>{item.user.name}</Text>
                        <Text style={{ color: theme.colors.white }}>
                            <Octicons
                                name="location"
                                size={theme.sizes.font * 0.8}
                                color={theme.colors.white}
                            />
                            <Text> {item.location}</Text>
                        </Text>
                    </View>
                    <View style={{flex : 0, justifyContent : 'center', alignItems : 'flex-end'}}>
                        <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                </View>
                <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
                    <Text style={{ fontSize: theme.sizes.title, fontWeight: '500', paddingBottom: 8, }}>
                        {item.title}
                    </Text>
                    <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end'}]}>
                        <Text style={{ color : theme.colors.caption}}>
                            {item.description.split('').slice(0, 50)}...
                        </Text>
                        <FontAwesome
                            name="chevron-right"
                            size={theme.sizes.font * 0.75}
                            color={theme.colors.caption}
                        />
                    </View>
                </View>

            </ImageBackground>
        )
    }

    renderDestinations(){
        return(
        <View style={[ styles.flex, styles.column, styles.destinations]}>
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator = {false}
                scrollEventThrottle = {16}
                snapToAlignment = "center"
                decelerationRate={0}
                //style={{ overflow : 'visible' }} //In IOS platform
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
                data = {destinations}
                keyExtractor = {(item, index)=> `${item.id}`}
                renderItem = {({item}) => this.renderDestination(item)}
            />
            {this.renderDots()}
        </View>
        )
    }

    renderRecommended(){
        return(
            <View style={[styles.flex, styles.column, styles.recommended]}>
                <View
                    style={[
                        styles.row,
                        styles.recommendedHeader,
                    ]}
                >
                    <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Recommended</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={{ color: theme.colors.caption }}>More</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.column]}>
                    <FlatList
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        showsHorizontalScrollIndicator = {false}
                        scrollEventThrottle = {16}
                        snapToAlignment = "center"
                        data = {destinations}
                        keyExtractor = {(item, index)=> `${item.id}`}
                        renderItem={({ item, index }) => this.renderRecommendation(item, index)}

                    />
                </View>
            </View>
        )
    }

    renderRecommendation(item, index) {
        const isLastItem = index === destinations.length - 1;
        return(
            <View
                style={[styles.flex, styles.column, styles.recommendation, styles.shadow,
                    index === 0 ? { marginLeft: theme.sizes.margin } : null,
                    isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
                ]}
            >
                <View style={[styles.flex, styles.recommendationHeader]}>
                    <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
                    <View style={[styles.flex, styles.row, styles.recommendationOptions]}>
                        <Text style={styles.recommendationTemp}>
                            {item.temperature}℃
                        </Text>
                        <FontAwesome
                            name={item.saved ? 'bookmark' : 'bookmark-o'}
                            color={theme.colors.white}
                            size={theme.sizes.font * 1.25}
                        />
                    </View>
                </View>
                <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: theme.sizes.padding / 2 }]}>
                    <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, }}>{item.title}</Text>
                    <Text style={{ color: theme.colors.caption}}>{item.location}</Text>
                    <View style={[
                        styles.row,
                        { alignItems: 'center', justifyContent: 'space-between', marginTop: theme.sizes.margin }
                    ]}>
                        <Text style={{ color: theme.colors.active }}>{item.rating}</Text>
                    </View>
                </View>
            </View>
        )
    }

    render(){
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 36}}
            >
                {this.renderDestinations()}
                {this.renderRecommended()}
            </ScrollView>
        );
    }
};

