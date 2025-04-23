import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const PortfolioAIProjectionScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                {/* Portfolio Growth Icon + Headline */}
                <View style={styles.header}>
                    <Text style={styles.icon}>📈</Text>
                    <Text style={styles.title}>Here’s a projection of how your portfolio will perform.</Text>
                </View>

                {/* Card Section */}
                <View style={styles.card}>
                    {/* Projected Value */}
                    <Text style={styles.portfolioValue}>$800,281.00</Text>
                    <Text style={styles.growthPercentage}>+10% long-term performance</Text>

                    {/* Description */}
                    <Text style={styles.description}>
                        This projection is based on historical trends and expected market conditions.
                        Performance may vary depending on economic factors and investment choices.
                    </Text>

                    {/* Growth Chart */}
                    <LineChart
                        data={{
                            labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                            datasets: [
                                {
                                    data: [500000, 600000, 700000, 750000, 800281],
                                    strokeWidth: 3,
                                    color: () => '#e67e22',
                                },
                            ],
                        }}
                        width={screenWidth * 0.9}
                        height={220}
                        yAxisLabel="$"
                        chartConfig={{
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(230, 126, 34, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#e67e22",
                            },
                        }}
                        bezier
                        style={styles.chart}
                    />
                </View>

                {/* Continue Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('HomesAndActivitiesScreen')}
                >
                    <Text style={styles.buttonText}>Continue →</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default PortfolioAIProjectionScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: '#f5f0e1',
    },
    container: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        fontSize: 40,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
        alignItems: 'center',
        marginBottom: 20,
    },
    portfolioValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: 5,
    },
    growthPercentage: {
        fontSize: 16,
        color: '#e67e22',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#7f8c8d',
        textAlign: 'center',
        marginBottom: 10,
    },
    chart: {
        marginTop: 10,
    },
    button: {
        backgroundColor: '#e67e22',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
