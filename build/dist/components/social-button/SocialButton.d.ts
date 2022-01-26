import * as React from "react";
import { StyleProp, ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from "react-native";
declare type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
declare type CustomImageStyleProp = StyleProp<ImageStyle> | Array<StyleProp<ImageStyle>>;
declare type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
export interface ISocialButtonProps {
    text: string;
    style?: CustomStyleProp;
    textStyle?: CustomTextStyleProp;
    imageSource?: ImageSourcePropType;
    textContainerStyle?: CustomStyleProp;
    iconImageStyle?: CustomImageStyleProp;
    onPress: () => void;
}
declare const SocialButton: React.FC<ISocialButtonProps>;
export default SocialButton;
