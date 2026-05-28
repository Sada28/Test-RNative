import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export const Grid = () => {

    const users = [
        {
            id: 1,
            name: "Sadanand"
        },
        {
            id: 2,
            name: "Sahil"
        },
        {
            id: 3,
            name: "Nikitesh"
        },
        {
            id: 4,
            name: "Swapnil"
        },
        {
            id: 5,
            name: "Dipanshu"
        },
        {
            id: 6,
            name: "Abhi"
        },
        {
            id: 6,
            name: "Abhi"
        },
        {
            id: 6,
            name: "Abhi"
        },

    ]
    return (
        <ScrollView>
            <Text style={{ fontSize: 40, textAlign: 'center' }}>Grid with dynamic data </Text>
            <View style={{ flex: 1, flexDirection: 'column', flexWrap: 'wrap' }}>
                {/* <Text style={styles.gridbox}>Box1</Text>
            <Text style={styles.gridbox}>Box2</Text>
            <Text style={styles.gridbox}>Box3</Text>
            <Text style={styles.gridbox}>Box4</Text>
            <Text style={styles.gridbox}>Box5</Text>
            <Text style={styles.gridbox}>Box6</Text>
            <Text style={styles.gridbox}>Box7</Text>
            <Text style={styles.gridbox}>Box8</Text>
            <Text style={styles.gridbox}>Box9</Text>
            <Text style={styles.gridbox}>Box10</Text>
            <Text style={styles.gridbox}>Box11</Text>
            <Text style={styles.gridbox}>Box12</Text>
            <Text style={styles.gridbox}>Box13</Text>
            <Text style={styles.gridbox}>Box14</Text>
            <Text style={styles.gridbox}>Box15</Text>
            <Text style={styles.gridbox}>Box16</Text>
            <Text style={styles.gridbox}>Box17</Text>
            <Text style={styles.gridbox}>Box18</Text>
            <Text style={styles.gridbox}>Box19</Text>
            <Text style={styles.gridbox}>Box20</Text>
            <Text style={styles.gridbox}>Box21</Text> */}
                {

                    users.map((item) => {
                        return (
                            <View key={item.id}>
                                <Text style={styles.gridbox}>{item.name}</Text>
                            </View>

                        )
                    })
                }

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    gridbox: {
        backgroundColor: 'red',
        fontSize: 30,
        color: "black",
        margin: 5,
        padding: 5,
        width: 120,
        height: 120,
        textAlignVertical: 'center',
        textAlign: 'center'

    }
})

export default Grid;