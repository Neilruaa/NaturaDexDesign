import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ViewStyle } from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";

export interface FormInputProps {
  /** Field label */
  label: string;
  /** Current value */
  value: string;
  /** Change handler */
  onChangeText: (text: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Trailing icon component (e.g., Mail, Lock) */
  Icon?: LucideIcon;
  /** Whether the field is a secure text entry (password) */
  secureTextEntry?: boolean;
  /** Show/hide toggle for password fields.
   *  Provide [visible, setVisible] state pair. */
  visibilityToggle?: [boolean, (v: boolean) => void];
  /** Keyboard type (default: "default") */
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  /** Auto-capitalize (default: "none") */
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  /** Additional container style */
  style?: ViewStyle;
}

/**
 * Styled form input with label, trailing icon, and optional show/hide toggle.
 * Used on Login screen for email and password fields.
 */
export function FormInput({
  label,
  value,
  onChangeText,
  placeholder,
  Icon,
  secureTextEntry = false,
  visibilityToggle,
  keyboardType = "default",
  autoCapitalize = "none",
  style,
}: FormInputProps) {
  const isPasswordVisible = visibilityToggle ? visibilityToggle[0] : false;
  const setPasswordVisible = visibilityToggle ? visibilityToggle[1] : undefined;
  const effectiveSecure = secureTextEntry && !isPasswordVisible;

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="rgba(4,120,87,0.4)"
          secureTextEntry={effectiveSecure}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          style={styles.input}
        />
        {/* Show/hide toggle for password fields */}
        {visibilityToggle && setPasswordVisible ? (
          <Pressable
            onPress={() => setPasswordVisible(!isPasswordVisible)}
            style={styles.trailingIcon}
          >
            {isPasswordVisible ? (
              <EyeOff size={18} color="rgba(168,220,171,0.4)" />
            ) : (
              <Eye size={18} color="rgba(168,220,171,0.4)" />
            )}
          </Pressable>
        ) : Icon ? (
          <View style={styles.trailingIcon}>
            <Icon size={18} color="rgba(168,220,171,0.4)" />
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#97572B",
    marginBottom: 8,
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    backgroundColor: "rgba(250,235,215,0.8)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.8)",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingRight: 48,
    fontSize: 14,
    color: "#97572B",
  },
  trailingIcon: {
    position: "absolute",
    right: 16,
    top: "50%",
    marginTop: -9,
    padding: 4,
  },
});
