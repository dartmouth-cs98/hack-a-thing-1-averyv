import React from 'react';

import PropTypes from 'prop-types';

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {priceDisplay} from '../util';
import ajax from '../ajax';

class DealDetail extends React.Component {
    static propTypes = {
        initialDealData: PropTypes.object.isRequired,
        onBack: PropTypes.func.isRequired,
    };
    state = {
        deal: this.props.initialDealData,
    };
    async componentDidMount() {
        const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
        console.log(fullDeal);
        this.setState({
            deal: fullDeal,
        });
    }
    render() {
        const { deal } = this.state;
        return (
            <View style={styles.deal}>
                <TouchableOpacity onPress={this.props.onBack}>
                    <Text style={styles.backLink}>Back</Text>
                </TouchableOpacity>
                <Image source={{ uri: deal.media[0] }}
                style={styles.image} />
                <View style={styles.itemInfo}>
                    <Text style={styles.title}>{deal.title}</Text>
                    <View style={styles.footer}>
                        
                            <Text>Cause: {deal.cause.name}</Text>
                            <Text>Cost: {priceDisplay(deal.price)}</Text>
                    
                    </View>
                    <View style={styles.userInfo}>
                            {deal.user && (
                                <View>
                                    <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
                                    <Text>{deal.user.name}</Text>
                                </View>
                            )}
                        </View>
                    <View>
                    <Text style={styles.description}>{deal.description}</Text>
                </View>
                </View>
                
                
               
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    backLink: {
        fontSize: 20,
        marginBottom: 5,
    },
    deal: {
        margin: 10,
        marginBottom: 0,
    },
    image: {
        width: '100%',
        height: 200,
        backgroundColor: "#ccc"
    },
    itemInfo: {
        borderColor: 'lightgrey',
        borderWidth: 1,
       
    },
    footer: {
        padding: 10
    },
    userInfo: {
        padding: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        fontVariant: ['small-caps'],
        paddingBottom: 10,
        paddingTop: 10,
        textAlign: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    description: {
        padding: 10,
        marginBottom: 25,
    },
    
});


export default DealDetail;