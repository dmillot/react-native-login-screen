"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const { width: ScreenWidth } = react_native_1.Dimensions.get("screen");
exports.default = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7f7f7",
    },
    logoImageStyle: {
        width: 200,
        height: 200,
        alignSelf: "center",
    },
    textInputContainer: {
        marginTop: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    passwordTextInputContainer: {
        marginTop: 16,
    },
    loginButtonStyle: {
        height: 40,
        width: ScreenWidth * 0.9,
        backgroundColor: "#25a9e2",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 32,
        elevation: 5,
        shadowRadius: 8,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    loginTextStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    haveAccountButtonStyle: {
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    haveAccountTextStyle: {
        color: "#acabb0",
    },
    dividerStyle: {
        height: 0.5,
        marginTop: 24,
        marginBottom: 12,
        borderRadius: 16,
        width: ScreenWidth * 0.8,
        alignSelf: "center",
        backgroundColor: "#ccc",
    },
    socialLoginContainer: {
        marginTop: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    facebookSocialButtonTextStyle: {
        color: "#4267B2",
    },
    twitterSocialButtonTextStyle: {
        color: "#56bfe8",
    },
    discordSocialButtonTextStyle: {
        color: "#5865F2",
    },
    socialButtonStyle: {
        marginTop: 16,
    },
});
//# sourceMappingURL=LoginScreen.style.js.map