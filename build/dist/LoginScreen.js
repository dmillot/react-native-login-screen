"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = (0, tslib_1.__importStar)(require("react"));
const react_native_1 = require("react-native");
const react_native_text_input_interactive_1 = (0, tslib_1.__importDefault)(require("react-native-text-input-interactive"));
/**
 * ? Local Imports
 */
const LoginScreen_style_1 = (0, tslib_1.__importDefault)(require("./LoginScreen.style"));
const SocialButton_1 = (0, tslib_1.__importDefault)(require("./components/social-button/SocialButton"));
const dummyFunction = () => { };
const LoginScreen = ({ style, dividerStyle, logoImageStyle, loginTextStyle, loginButtonStyle, haveAccountTextStyle, haveAccountButtonStyle, textInputContainerStyle, haveAccountText = "Already have an account?", emailTextInputText = "Email", passwordTextInputText = "Password", loginButtonText = "Login", disableDivider, logoImageSource, onLoginPress, disableSocialButtons, onHaveAccountPress, onEmailChange, onPasswordChange, onFacebookPress = dummyFunction, onTwitterPress = dummyFunction, onApplePress = dummyFunction, onDiscordPress = dummyFunction, children, }) => {
    const Logo = () => (<react_native_1.Image resizeMode="contain" source={logoImageSource} style={[LoginScreen_style_1.default.logoImageStyle, logoImageStyle]}/>);
    const TextInputContainer = () => (<react_native_1.View style={[LoginScreen_style_1.default.textInputContainer, textInputContainerStyle]}>
      <react_native_text_input_interactive_1.default placeholder={emailTextInputText} onChangeText={onEmailChange}/>
      <react_native_1.View style={LoginScreen_style_1.default.passwordTextInputContainer}>
        <react_native_text_input_interactive_1.default placeholder={passwordTextInputText} secureTextEntry onChangeText={onPasswordChange}/>
      </react_native_1.View>
    </react_native_1.View>);
    const LoginButton = () => (<react_native_1.TouchableOpacity style={[LoginScreen_style_1.default.loginButtonStyle, loginButtonStyle]} onPress={onLoginPress}>
      <react_native_1.Text style={[LoginScreen_style_1.default.loginTextStyle, loginTextStyle]}>{loginButtonText}</react_native_1.Text>
    </react_native_1.TouchableOpacity>);
    const AlreadyHaveAccount = () => (<react_native_1.TouchableOpacity style={[LoginScreen_style_1.default.haveAccountButtonStyle, haveAccountButtonStyle]} onPress={onHaveAccountPress}>
      <react_native_1.Text style={[LoginScreen_style_1.default.haveAccountTextStyle, haveAccountTextStyle]}>
        {haveAccountText}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>);
    const Divider = () => <react_native_1.View style={[LoginScreen_style_1.default.dividerStyle, dividerStyle]}/>;
    const DefaultSocialLoginButtons = () => !disableSocialButtons ? (<>
        <SocialButton_1.default text="Continue with Facebook" textStyle={LoginScreen_style_1.default.facebookSocialButtonTextStyle} onPress={onFacebookPress}/>
        <SocialButton_1.default text="Continue with Twitter" style={LoginScreen_style_1.default.socialButtonStyle} textStyle={LoginScreen_style_1.default.twitterSocialButtonTextStyle} imageSource={require("./local-assets/twitter.png")} onPress={onTwitterPress}/>
        <SocialButton_1.default text="Continue with Apple" style={LoginScreen_style_1.default.socialButtonStyle} imageSource={require("./local-assets/apple.png")} onPress={onApplePress}/>
        <SocialButton_1.default text="Continue with Discord" style={LoginScreen_style_1.default.socialButtonStyle} textStyle={LoginScreen_style_1.default.discordSocialButtonTextStyle} imageSource={require("./local-assets/discord.png")} onPress={onDiscordPress}/>
      </>) : null;
    return (<react_native_1.SafeAreaView style={[LoginScreen_style_1.default.container, style]}>
      <react_native_1.StatusBar barStyle="dark-content"/>
      <Logo />
      <TextInputContainer />
      <LoginButton />
      <AlreadyHaveAccount />
      {!disableDivider && <Divider />}
      <react_native_1.View style={LoginScreen_style_1.default.socialLoginContainer}>
        {children || <DefaultSocialLoginButtons />}
      </react_native_1.View>
    </react_native_1.SafeAreaView>);
};
exports.default = LoginScreen;
//# sourceMappingURL=LoginScreen.js.map