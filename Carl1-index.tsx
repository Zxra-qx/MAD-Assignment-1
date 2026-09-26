<Pressable

  onPress={handleAlertPress}

  style={({ pressed }) => [

    styles.alertButton,

    pressed && styles.alertPressed,

  ]}
>
<Text style={styles.alertButtonText}>Alert</Text>
</Pressable>
 
