import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView, WebViewNavigation, WebViewProps } from 'react-native-webview';

interface EmbeddedWebViewProps {
    source: WebViewProps['source'];
}

const EmbeddedWebView: React.FC<EmbeddedWebViewProps> = ({ source }) => {

    const webViewRef = useRef<WebView>(null);

    const handleBack = () => {
        if (webViewRef.current) {
            webViewRef.current.goBack();
        }
    };

    const handleForward = () => {
        if (webViewRef.current) {
            webViewRef.current.goForward();
        }
    };

    const handleReload = () => {
        if (webViewRef.current) {
            webViewRef.current.reload();
        }
    };

    const handleNavigationStateChange = (navState: WebViewNavigation) => {
        
    };

    return (
        <View style={{ flex: 1 }}>

            <View style={styles.controlsContainer}>
                <TouchableOpacity onPress={handleBack} style={styles.controlButton}>
                    <Text style={styles.controlButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleForward} style={styles.controlButton}>
                    <Text style={styles.controlButtonText}>Forward</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReload} style={styles.controlButton}>
                    <Text style={styles.controlButtonText}>Reload</Text>
                </TouchableOpacity>
            </View>

            <WebView
                ref={webViewRef}
                source={source}
                style={{ flex: 1 }}
                onLoad={(syntheticEvent) => {
                    console.log('here')
                }}
            />
        </View>
    );
};

export default EmbeddedWebView;

const styles = StyleSheet.create({
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingVertical: 10,
    },
    controlButton: {
        padding: 10,
    },
    controlButtonText: {
        color: 'blue',
    },
});
