"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const react_native_1 = require("react-native");
/**
 * ? Local Imports
 */
const SocialButton_style_1 = (0, tslib_1.__importDefault)(require("./SocialButton.style"));
const SocialButton = ({ style, text, textStyle, iconImageStyle, textContainerStyle, imageSource = require("../../local-assets/facebook.png"), onPress, }) => {
    return (<react_native_1.TouchableOpacity style={[SocialButton_style_1.default.container, style]} onPress={onPress}>
      <react_native_1.Image resizeMode="contain" source={imageSource} style={[SocialButton_style_1.default.iconImageStyle, iconImageStyle]}/>
      <react_native_1.View style={[SocialButton_style_1.default.textContainer, textContainerStyle]}>
        <react_native_1.Text style={[SocialButton_style_1.default.textStyle, textStyle]}>{text}</react_native_1.Text>
      </react_native_1.View>
    </react_native_1.TouchableOpacity>);
};
exports.default = SocialButton;
//# sourceMappingURL=SocialButton.js.map