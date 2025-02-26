import * as React from "react";
import {
  Image,
  View,
  Text,
  StyleProp,
  ViewStyle,
  StatusBar,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import TextInput from "react-native-text-input-interactive";
/**
 * ? Local Imports
 */
import styles from "./LoginScreen.style";
import SocialButton from "./components/social-button/SocialButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => {};
export interface ILoginScreenProps {
  haveAccountText?: string;
  disableDivider?: boolean;
  logoImageSource: any;
  disableSocialButtons?: boolean;
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  textInputContainerStyle?: CustomStyleProp;
  loginButtonStyle?: CustomStyleProp;
  loginTextStyle?: CustomTextStyleProp;
  haveAccountButtonStyle?: CustomStyleProp;
  haveAccountTextStyle?: CustomTextStyleProp;
  onLoginPress: () => void;
  onHaveAccountPress: () => void;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onFacebookPress?: () => void;
  onTwitterPress?: () => void;
  onApplePress?: () => void;
  onDiscordPress?: () => void;
}

const LoginScreen: React.FC<ILoginScreenProps> = ({
  style,
  dividerStyle,
  logoImageStyle,
  loginTextStyle,
  loginButtonStyle,
  haveAccountTextStyle,
  haveAccountButtonStyle,
  textInputContainerStyle,
  haveAccountText = "Already have an account?",
  disableDivider,
  logoImageSource,
  onLoginPress,
  disableSocialButtons,
  onHaveAccountPress,
  onEmailChange,
  onPasswordChange,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  children,
}) => {
  const Logo = () => (
    <Image
      resizeMode="contain"
      source={logoImageSource}
      style={[styles.logoImageStyle, logoImageStyle]}
    />
  );

  const TextInputContainer = () => (
    <View style={[styles.textInputContainer, textInputContainerStyle]}>
      <TextInput placeholder="Email" onChangeText={onEmailChange} />
      <View style={styles.passwordTextInputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={onPasswordChange}
        />
      </View>
    </View>
  );

  const LoginButton = () => (
    <TouchableOpacity
      style={[styles.loginButtonStyle, loginButtonStyle]}
      onPress={onLoginPress}
    >
      <Text style={[styles.loginTextStyle, loginTextStyle]}>Login</Text>
    </TouchableOpacity>
  );

  const AlreadyHaveAccount = () => (
    <TouchableOpacity
      style={[styles.haveAccountButtonStyle, haveAccountButtonStyle]}
      onPress={onHaveAccountPress}
    >
      <Text style={[styles.haveAccountTextStyle, haveAccountTextStyle]}>
        {haveAccountText}
      </Text>
    </TouchableOpacity>
  );

  const Divider = () => <View style={[styles.dividerStyle, dividerStyle]} />;

  const DefaultSocialLoginButtons = () =>
    !disableSocialButtons ? (
      <>
        <SocialButton
          text="Continue with Facebook"
          textStyle={styles.facebookSocialButtonTextStyle}
          onPress={onFacebookPress}
        />
        <SocialButton
          text="Continue with Twitter"
          style={styles.socialButtonStyle}
          textStyle={styles.twitterSocialButtonTextStyle}
          imageSource={require("./local-assets/twitter.png")}
          onPress={onTwitterPress}
        />
        <SocialButton
          text="Continue with Apple"
          style={styles.socialButtonStyle}
          imageSource={require("./local-assets/apple.png")}
          onPress={onApplePress}
        />
        <SocialButton
          text="Continue with Discord"
          style={styles.socialButtonStyle}
          textStyle={styles.discordSocialButtonTextStyle}
          imageSource={require("./local-assets/discord.png")}
          onPress={onDiscordPress}
        />
      </>
    ) : null;

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" />
      <Logo />
      <TextInputContainer />
      <LoginButton />
      <AlreadyHaveAccount />
      {!disableDivider && <Divider />}
      <View style={styles.socialLoginContainer}>
        {children || <DefaultSocialLoginButtons />}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
