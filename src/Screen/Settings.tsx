import { useState } from "react";
import { Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/Settingsstyle";

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: "#767577", true: "#000000" }}
            thumbColor="#f4f4f4"
          />
        </View>

        <View style={styles.settingRow}>
          <Text style={styles.settingText}>Temperature Unit</Text>
          <Text style={styles.valueText}>°C</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}