import React from 'react';
import PropTypes from 'prop-types';

import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';
import {priceDisplay} from '../util';

class DealItem extends React.Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    };
    handlePress = () => {
        this.props.onPress(this.props.deal.key);
    };
    render() {
        const { deal } = this.props;
        return (
            <TouchableOpacity style={styles.deal}
                onPress={this.handlePress}>
                <Image source={{ uri: deal.media[0] }}
                style={styles.image} />
                <View style={styles.dealInfo}>
                    <Text style={styles.title}>{deal.title}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.cause}>{deal.cause.name}</Text>
                        <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    deal: {
        margin: 10,
        marginBottom: 0,
    },
    image: {
        width: '100%',
        height: 200,
        backgroundColor: "green"
    },
    dealInfo: {
        padding: 10,
        borderColor: 'lightgrey',
        borderWidth: 2,
        borderTopWidth: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        fontVariant: ['small-caps'],
    },
    footer: {
        flexDirection: 'row',
    },
    cause: {
        flex: 2
    },
    price: {
        flex: 1,
        textAlign: 'right',
    }
});

export default DealItem;