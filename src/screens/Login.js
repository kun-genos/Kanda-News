import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <View style={styles.content}>
              <View style={styles.headerSection}>
                <Text style={styles.title}>Masuk</Text>
                <Text style={styles.subtitle}>Silakan masuk untuk melanjutkan</Text>
              </View>

              <View style={styles.formSection}>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputContainer}>
                    <Ionicons name="mail-outline" size={20} color="#2196F3" />
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>

                  <View style={styles.inputContainer}>
                    <Ionicons name="lock-closed-outline" size={20} color="#2196F3" />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                      <Ionicons 
                        name={showPassword ? "eye-outline" : "eye-off-outline"} 
                        size={20} 
                        color="#2196F3"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPasswordText}>Lupa password?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Masuk</Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                  <View style={styles.line} />
                  <Text style={styles.orText}>atau</Text>
                  <View style={styles.line} />
                </View>

                <View style={styles.socialButtons}>
                  <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-google" size={24} color="#DB4437" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-facebook" size={24} color="#4267B2" />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity 
                  onPress={() => navigation.navigate('Register')}
                  style={styles.footer}
                >
                  <Text style={styles.footerText}>
                    Belum punya akun? <Text style={styles.footerLink}>Daftar</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  headerSection: {
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
  },
  formSection: {
    marginBottom: 20,
  },
  inputWrapper: {
    gap: 12,
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 12,
    gap: 10,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A1A',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#2196F3',
    fontSize: 13,
    fontWeight: '500',
  },
  bottomSection: {
    marginTop: 'auto',
    gap: 16,
    paddingBottom: 20,
  },
  loginButton: {
    backgroundColor: '#2196F3',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    color: '#666666',
    marginHorizontal: 16,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
  },
  footerLink: {
    color: '#2196F3',
    fontWeight: '600',
  },
});

export default Login;
