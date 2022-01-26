"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const { width: ScreenWidth } = react_native_1.Dimensions.get("screen");
exports.default = react_native_1.StyleSheet.create({
    container: {
        height: 45,
        borderRadius: 8,
        width: ScreenWidth * 0.9,
        paddingLeft: ScreenWidth * 0.2,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#e9eef4",
    },
    iconImageStyle: {
        width: 20,
        height: 20,
    },
    textContainer: {
        marginLeft: 16,
    },
    textStyle: {
        color: "#315092",
        fontWeight: "500",
    },
});
//# sourceMappingURL=SocialButton.style.js.map