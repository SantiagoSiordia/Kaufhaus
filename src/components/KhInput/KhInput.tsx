import { MaterialIcons } from "@expo/vector-icons";
import { useKhTheme } from "@theme";
import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { KhText, KhView } from "..";

export type KhInputProps = TextInputProps & {
    icon: MaterialIconName;
    name: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
};
  
export const KhInput: FC<KhInputProps> = ({
    icon,
    name,
    placeholder = null,
    error = false,
    errorMessage,
    ...props
  }) => {
    const { colors } = useKhTheme();

    return <KhView>
    <KhText
      style={StyleSheet.flatten([
        formStyles.label,
        error ? { color: colors.danger } : { color: colors.purple },
      ])}>
      {name}
    </KhText>
    <KhView
      style={StyleSheet.flatten([
        formStyles.inputContainer,
        error ? {
          borderColor: colors.danger,
          color: colors.danger,
          backgroundColor: colors.overLayDanger
        } : {
          borderColor: colors.purple,
          color: colors.purple,
          backgroundColor: colors.overLayPurple
        },
      ])}>
      <KhView style={formStyles.iconContainer}>
        <MaterialIcons
          name={icon}
          size={24}
          color={error ? colors.danger : colors.purple}
        />
      </KhView>
      <TextInput
        style={StyleSheet.flatten([
          formStyles.input,
          error ? { color: colors.danger } : {},
        ])}
        placeholder={placeholder ?? name}
        placeholderTextColor={error ? colors.danger : colors.purple}
        {...props}
      />
    </KhView>
    {error && (
      <KhText style={{
        color:colors.danger,
        fontSize: 12,
        marginLeft: 8,
    }}>Error: {errorMessage}</KhText>
    )}
  </KhView>
};

const formStyles = StyleSheet.create({
    label: {
        fontSize: 12,
        marginLeft: 8,
        fontWeight: "bold"
    },
    inputContainer: {
        height: 36,
        borderRadius: 8,
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
    },
    iconContainer: {
        height: 36,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    input: {
        width: '80%',
    },
});